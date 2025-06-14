'use client';
import { motion } from 'motion/react';
import React from 'react';
import { evaluationData } from './data';
import EvaluationSectionHeader from './SectionHeader';
import EvaluationCardComponent from './EvaluationCard';
import { useScrollTo } from '@/hooks/useScrollTo';

const Evaluation: React.FC = () => {
  const getProductUrl = (id: string) => {
    console.log('Getting product URL for ID:', id);
    const baseUrl = 'https://fundingoptimal.com/checkout/index.php/product';
    let url;
    switch (id) {
      case 'one-step':
        url = `${baseUrl}/one-step-evaluation/`;
        break;
      case 'two-step':
        url = `${baseUrl}/two-step-evaluation/`;
        break;
      case 'instant-funding':
        url = `${baseUrl}/instant-funding/`;
        break;
      default:
        url = '#get-funded';
    }
    console.log('Generated URL:', url);
    return url;
  };
  const { scrollTo } = useScrollTo();

  const handleBuyNowClick = (id: string) => {
    console.log('handleBuyNowClick called with ID:', id);
    const productUrl = getProductUrl(id);
    console.log('Product URL:', productUrl);
    if (productUrl.startsWith('http')) {
      console.log('Opening URL in new tab:', productUrl);
      window.open(productUrl, '_blank');
    } else {
      console.log('Scrolling to:', productUrl.substring(1));
      scrollTo('get-funded');
    }
  };

  return (
    <section className="bg-black text-white pt-20">
      <motion.div
        className="md:bg-gradient-to-t from-primary/10 pb-24 via-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl px-4 md:px-0 mx-auto">
          <EvaluationSectionHeader />

          <motion.div
            className="grid grid-cols-1 items-center md:grid-cols-3 w-full lg:grid-cols-5"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {evaluationData.map((card, index) => (
              <EvaluationCardComponent
                key={card.id}
                card={card}
                index={index}
                handleBuyNowClick={handleBuyNowClick}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Evaluation;
