import React from 'react';
import Header from '../_components/module/FAQs/Header';
import CTA from '../_components/module/FAQs/CTA';
import SearchBar from '../_components/module/FAQs/SearchBar';
import FaqsSlider from '../_components/module/FAQs/FaqsSlider';

const FAQsPage = () => {
  return (
    <div className="mt-20">
      <Header />
      <SearchBar />
      <FaqsSlider />
      <CTA />
    </div>
  );
};

export default FAQsPage;
