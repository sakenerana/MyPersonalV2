import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useState } from "react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const GLOBAL_AI_KNOWLEDGE = [
  {
    keywords: ["background", "about", "experience", "summary"],
    answer:
      "Charls is a full-stack developer with 7+ years of hands-on experience in web development and IT operations, focused on practical business solutions.",
  },
  {
    keywords: ["stack", "skills", "tech", "react", "angular", "node", "remix"],
    answer:
      "Core technologies include React, Angular, Node.js, Remix, TypeScript, Tailwind, and Docker, with strong e-commerce implementation experience.",
  },
  {
    keywords: ["projects", "project", "inventory", "portfolio"],
    answer:
      "The projects highlight full-stack implementation, workflow-focused inventory systems, and production-ready UI/UX delivery.",
  },
  {
    keywords: ["contact", "hire", "email", "message"],
    answer:
      "You can reach Charls quickly via the portfolio contact form or email at sakenerana@gmail.com.",
  },
];

function getGlobalAiAnswer(question: string) {
  const normalized = question.toLowerCase();
  const best = GLOBAL_AI_KNOWLEDGE.reduce(
    (currentBest, item) => {
      const score = item.keywords.reduce(
        (total, keyword) => total + (normalized.includes(keyword) ? 1 : 0),
        0
      );

      if (score > currentBest.score) {
        return { score, answer: item.answer };
      }

      return currentBest;
    },
    {
      score: 0,
      answer:
        "Ask me about background, skills, projects, or contact details and I'll point you to the right part of the portfolio.",
    }
  );

  return best.answer;
}

function GlobalAskAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("What makes you a strong full-stack hire?");
  const [answer, setAnswer] = useState(getGlobalAiAnswer("What makes you a strong full-stack hire?"));

  const handleAsk = () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setAnswer(getGlobalAiAnswer(trimmedQuestion));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-[320px] rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
            <img
                      className="h-4 w-4"
                      src="./img/coffee.svg"
                      alt="Coffee"
                    />
            <p className="text-sm font-semibold text-gray-900">Ask AI</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
          </div>

          <div className="p-3 space-y-2">
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-200 p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAsk}
              className="w-full rounded-lg bg-gray-900 py-2 text-xs font-medium text-white hover:bg-gray-800"
            >
              Ask AI
            </button>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
              <p className="text-[11px] font-medium text-gray-700">Answer</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{answer}</p>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:bg-gray-800"
        >
          Ask AI
        </button>
      )}
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <GlobalAskAiWidget />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
