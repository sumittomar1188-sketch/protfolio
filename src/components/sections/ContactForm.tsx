"use client";

import { useRef, useState, type FormEvent } from "react";
import { site } from "@/config/site";
import ParkIcon from "./ParkIcon";
import s from "./Finish.module.css";

type Name = "name" | "email" | "message";
const valid: Record<Name, (v: string) => boolean> = {
  name: (v) => v.trim().length > 0,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  message: (v) => v.trim().length > 0,
};

/**
 * The "Send a message" form posts directly to Web3Forms; the visitor's email app is never opened.
 */
export default function ContactForm() {
  const F = site.contact.form;
  const [errors, setErrors] = useState<Partial<Record<Name, boolean>>>({});
  const [status, setStatus] = useState<{ text: string; tone: "ok" | "bad" } | null>(null);
  const [busy, setBusy] = useState(false);
  const submitting = useRef(false);

  const read = (form: HTMLFormElement) => {
    const data = new FormData(form);
    return {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting.current) return;
    const form = e.currentTarget;
    const values = read(form);
    const bad = (Object.keys(valid) as Name[]).filter((k) => !valid[k](values[k]));
    setErrors(Object.fromEntries(bad.map((k) => [k, true])));
    if (bad.length) {
      setStatus(null);
      form.querySelector<HTMLElement>(`[name="${bad[0]}"]`)?.focus();
      return;
    }
    if (new FormData(form).get("company")) return; // honeypot: a bot filled the hidden field

    if (!F.web3formsKey) {
      setStatus({ text: `${F.failed} ${site.email}`, tone: "bad" });
      return;
    }
    submitting.current = true;
    setBusy(true);
    setStatus({ text: F.sending, tone: "ok" });
    try {
      const res = await fetch(F.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: F.web3formsKey,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          subject: F.subject,
        }),
      });
      // Web3Forms answers { success, message }; only a success counts as sent
      const out = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || out?.success !== true) throw new Error(String(res.status));
      form.reset();
      setStatus({ text: F.sent, tone: "ok" });
    } catch {
      setStatus({ text: `${F.failed} ${site.email}`, tone: "bad" });
    } finally {
      submitting.current = false;
      setBusy(false);
    }
  };

  const clear = (name: Name, value: string) => {
    if (errors[name] && valid[name](value)) setErrors((e) => ({ ...e, [name]: false }));
  };
  const field = (name: Name, input: "input" | "textarea") => {
    const f = F.fields[name];
    const id = `contact-${name}`;
    const props = {
      id,
      name,
      placeholder: f.placeholder,
      required: true,
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${id}-err` : undefined,
      onChange: (ev: { currentTarget: { value: string } }) => clear(name, ev.currentTarget.value),
    };
    return (
      <div className={s.field} data-error={errors[name] ? "" : undefined}>
        <label htmlFor={id}>
          {f.label} <i aria-hidden="true">*</i>
        </label>
        {input === "textarea" ? (
          <textarea {...props} rows={4} data-lenis-prevent="" />
        ) : (
          <input {...props} type={name === "email" ? "email" : "text"} autoComplete={name} />
        )}
        {errors[name] && (
          <span className={s.err} id={`${id}-err`}>
            ! {f.error}
          </span>
        )}
      </div>
    );
  };

  return (
    <form className={s.form} noValidate onSubmit={onSubmit}>
      {field("name", "input")}
      {field("email", "input")}
      {field("message", "textarea")}
      {/* honeypot: hidden from people, tempting to bots */}
      <input className={s.trap} type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className={s.formFoot}>
        <p className={s.status} data-tone={status?.tone} role="status" aria-live="polite">
          {status?.text}
        </p>
        <button className={s.send} type="submit" disabled={busy}>
          <ParkIcon name="send" />
          {F.send}
        </button>
      </div>
    </form>
  );
}
