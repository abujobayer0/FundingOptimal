'use client';
import { motion } from 'framer-motion';
import React from 'react';
import EvaluationCardComponent from './Evaluation/EvaluationCard';
import EvaluationSectionHeader from './Evaluation/SectionHeader';
import { evaluationData } from './Evaluation/data';

const Evaluation: React.FC = () => {
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
            className="grid grid-cols-1 items-center md:grid-cols-2 w-full lg:grid-cols-4"
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
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Evaluation;
