"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { mockFAQs } from "../FAQs/data";

interface FaqQuestion {
  ques: string;
  userIds: string[];
  status: boolean;
}

interface Faq {
  id: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  questions: FaqQuestion[];
}

interface FaqsDetailsProps {
  id: string;
}

export default function FaqsDetails({ id }: FaqsDetailsProps) {
  const faq = (mockFAQs as Faq[]).find((f: Faq) => f.id === id);
  const [feedback, setFeedback] = useState<{
    [ques: string]: "yes" | "no" | null;
  }>({});

  // Update URL when category changes

  if (!faq) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">FAQ Not Found</h1>
        <p className="text-gray-400">
          Sorry, we couldn&apos;t find the FAQ you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mt-16 md:mt-24 px-4 py-10 bg-black/80 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full opacity-60 -z-10" />
      {/* Image if present */}
      {faq.image && (
        <div className="flex justify-center mb-6">
          <Image
            src={faq.image}
            alt={faq.title}
            className="w-32 h-32 object-cover rounded-2xl border border-primary/30 shadow-lg"
            width={1000}
            height={1000}
          />
        </div>
      )}
      <div className="flex flex-col items-center text-center mb-6">
        <span className="px-4 py-1 rounded-lg bg-primary text-black font-semibold text-sm mb-2">
          {faq.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {faq.title}
        </h1>
        <p className="text-gray-400 text-base max-w-xl mb-2">
          {faq.description}
        </p>
        <span className="text-xs text-primary/80 font-medium">
          {faq.questions.length} Questions
        </span>
      </div>
      <div className="mt-8 space-y-6">
        {faq.questions.map((q: FaqQuestion) => (
          <div
            key={q.ques}
            className="bg-gradient-to-br from-primary/5 to-black/30 border border-white/10 rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4 shadow-md hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    q.status ? "bg-green-400" : "bg-red-400"
                  }`}
                ></span>
                <span className="font-semibold text-white text-lg">
                  {q.ques}
                </span>
              </div>
              <span className="text-xs text-gray-400">
                {q.userIds.length > 0
                  ? `${q.userIds.length} user${
                      q.userIds.length > 1 ? "s" : ""
                    } asked this`
                  : "No user asked this yet"}
              </span>
            </div>
            <div className="flex-shrink-0 flex flex-col items-end gap-2 min-w-[120px]">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  q.status
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {q.status ? "Answered" : "Unanswered"}
              </span>
              <div className="flex gap-3 mt-2 items-center">
                {/* Yes Button */}
                <button
                  className={`w-12 h-7 flex items-center justify-center rounded-full border border-green-400/40 bg-green-500/10 text-green-400 hover:bg-green-500/30 hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400/40 text-xs ${
                    feedback[q.ques] === "yes"
                      ? "bg-green-500/80 text-white"
                      : ""
                  }`}
                  type="button"
                  title="Yes, this answered my question"
                  aria-label="Yes"
                  onClick={() =>
                    setFeedback((f) => ({ ...f, [q.ques]: "yes" }))
                  }
                  disabled={!!feedback[q.ques]}
                >
                  {feedback[q.ques] === "yes" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span>Yes</span>
                  )}
                </button>
                {/* No Button */}
                <button
                  className={`w-12 h-7 flex items-center justify-center rounded-full border border-red-400/40 bg-red-500/10 text-red-400 hover:bg-red-500/30 hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400/40 text-xs ${
                    feedback[q.ques] === "no" ? "bg-red-500/80 text-white" : ""
                  }`}
                  type="button"
                  title="No, this did not answer my question"
                  aria-label="No"
                  onClick={() => setFeedback((f) => ({ ...f, [q.ques]: "no" }))}
                  disabled={!!feedback[q.ques]}
                >
                  {feedback[q.ques] === "no" ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <span>No</span>
                  )}
                </button>
                {/* Feedback message */}
                {feedback[q.ques] && (
                  <span
                    className={`ml-2 text-xs font-medium ${
                      feedback[q.ques] === "yes"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {feedback[q.ques] === "yes"
                      ? "Thank you!"
                      : "We appreciate your feedback!"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
