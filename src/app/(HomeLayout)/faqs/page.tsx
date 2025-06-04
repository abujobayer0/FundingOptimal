import React from 'react';
import Header from '../_components/module/FAQs/Header';
import CTA from '../_components/module/FAQs/CTA';
import SearchBar from '../_components/module/FAQs/SearchBar';

const FAQsPage = () => {
  return (
    <div className="mt-20">
      <Header />
      <SearchBar />
      <CTA />
    </div>
  );
};

export default FAQsPage;
