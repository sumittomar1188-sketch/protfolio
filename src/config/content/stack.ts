import type { WheelGroup } from "@/types/content";

/** Skills are grouped for browsing; no proficiency levels or numerical ratings are assigned. */
export const wheelGroups: WheelGroup[] = [
  {
    name: "Programming languages",
    color: "pink",
    text: "ink",
    items: ["Python", "C", "C++", "Java (Basic)", "SQL"].map((name) => ({ name })),
  },
  {
    name: "Machine learning & data science",
    color: "acid",
    text: "ink",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Machine Learning",
      "Data Analytics",
    ].map((name) => ({ name })),
  },
  {
    name: "Generative & agentic AI",
    color: "white",
    text: "ink",
    items: [
      "LangChain",
      "LangGraph",
      "Google ADK (Agent Development Kit)",
      "Groq LLM",
      "RAG",
      "AI Agent Development",
      "Building and Deploying AI Agents",
    ].map((name) => ({ name })),
  },
  {
    name: "Backend & deployment",
    color: "blue",
    text: "white",
    items: ["FastAPI", "Docker", "Git", "GitHub", "AI Application Deployment"].map((name) => ({ name })),
  },
  {
    name: "Core computer science",
    color: "cyan",
    text: "ink",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"].map(
      (name) => ({ name }),
    ),
  },
];
