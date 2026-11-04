import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    name: "SafarSathi",
    art: "safar",
    lines: ["SAFAR", "SATHI"],
    colors: { bg: "cyan", title: "ink", shadow: "pink", band: "ink", bandText: "paper" },
    meta: "PERSONAL PROJECT",
    tag: "Intelligent safety navigation",
    category: "Safety navigation app",
    problem: "Routes need to account for safety signals across individual street segments.",
    built:
      "Built an intelligent navigation app with XGBoost safety-routing decisions from street-segment features, PostGIS spatial joins, and real-time route-deviation alerts for tracked users.",
    result: { value: "~40%", unit: "reduction in safety-routing decision latency" },
    stack: ["Python", "FastAPI", "PostGIS", "XGBoost", "Flutter", "GeoAlchemy2"],
  },
  {
    name: "MemoryOps",
    art: "memory",
    lines: ["MEMORY", "OPS"],
    colors: { bg: "pink", title: "ink", shadow: "acid", band: "ink", bandText: "paper" },
    meta: "PERSONAL PROJECT",
    tag: "AI incident response agent",
    category: "Agentic AI",
    problem: "Incident response can benefit from relevant past incidents and their resolutions.",
    built:
      "Built an agent that retrieves historical incidents, analyzes patterns, and generates evidence-based recommendations. Human confidence checks and approval guard high-impact remediation.",
    result: { value: "Human review", unit: "Confidence checks and approval for high-impact remediation" },
    stack: ["Python", "FastAPI", "Hindsight", "Groq LLM", "Agentic AI"],
  },
  {
    name: "NeuroAI",
    art: "neuro",
    lines: ["NEURO", "AI"],
    colors: { bg: "blue", title: "acid", shadow: "ink", band: "acid", bandText: "ink" },
    meta: "PERSONAL PROJECT",
    tag: "Brain tumor detection",
    category: "Deep learning system",
    problem: "Classify MRI images into four brain-tumor categories.",
    built:
      "Built a ResNet50 classifier for glioma, meningioma, no-tumor, and pituitary images, with image augmentation and two-stage transfer learning that fine-tunes the final 30 layers. FastAPI serves predictions to a React interface.",
    result: { value: "91%", unit: "test accuracy on 2,600 test images" },
    stack: ["Python", "TensorFlow", "Keras", "ResNet50", "FastAPI", "React"],
  },
];
