"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Footer } from "../_components/ui";
import FaqsSidebar from "../_components/module/FAQs/FaqsSidebar";

// Context for FAQ sidebar state
type FaqSidebarContextType = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const FaqSidebarContext = createContext<FaqSidebarContextType>({
  category: "All FAQs",
  setCategory: () => {},
  search: "",
  setSearch: () => {},
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState("All FAQs");
  const [search, setSearch] = useState("");

  return (
    <FaqSidebarContext.Provider
      value={{ category, setCategory, search, setSearch }}
    >
      <div className="min-h-screen flex flex-col bg-black">
        <div className="md:flex flex-1 w-full max-w-7xl mx-auto px-2 md:px-6 gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-[300px] flex-shrink-0 mt-24">
            <FaqsSidebar
              selectedCategory={category}
              onCategorySelect={setCategory}
              search={search}
              onSearchChange={setSearch}
            />
          </div>
          {/* Main content */}
          <div className="flex-1 w-full overflow-x-hidden">{children}</div>
        </div>
        <Footer showBanner={false} />
      </div>
    </FaqSidebarContext.Provider>
  );
};

export default Layout;
