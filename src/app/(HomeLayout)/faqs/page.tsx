"use client";

import React, { useContext, useEffect } from "react";
import Header from "../_components/module/FAQs/Header";
import CTA from "../_components/module/FAQs/CTA";
import { useRouter, useSearchParams } from "next/navigation";
import { mockFAQs } from "../_components/module/FAQs/data";
import FaqsSlider from "../_components/module/FAQs/FaqsSlider";
import { FaqSidebarContext } from "./layout";

const FAQsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { category, search, setCategory } = useContext(FaqSidebarContext);

  // Sync context category with URL
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "All FAQs";
    if (urlCategory !== category) {
      setCategory(urlCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, setCategory]);

  // Update URL when category changes (if not already in sync)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (category && category !== "All FAQs") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    const url = `${window.location.pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    if (
      window.location.search !==
      (params.toString() ? `?${params.toString()}` : "")
    ) {
      router.replace(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, router]);

  // Filter FAQs
  const filteredFaqs = mockFAQs.filter((faq) => {
    const matchesCategory =
      category === "All FAQs" || faq.category === category;
    const searchLower = search.toLowerCase();
    const matchesSearch =
      faq.title.toLowerCase().includes(searchLower) ||
      faq.category.toLowerCase().includes(searchLower) ||
      faq.questions.some((q) => q.ques.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="md:mt-28 flex gap-8 max-w-7xl mx-auto px-4">
      {/* Sidebar is now in layout */}
      <div className="flex-1 min-w-0">
        <Header />
        <FaqsSlider filteredFaqs={filteredFaqs} />
        <CTA />
      </div>
    </div>
  );
};

export default FAQsPage;
