import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-6 text-cyan-900/80 text-xs z-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-4 flex-wrap text-[#A2A2A2] justify-center"
      >
        <motion.a
          href="#"
          className="hover:text-primary transition"
          variants={itemVariants}
        >
          Terms
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-primary transition"
          variants={itemVariants}
        >
          Privacy
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-primary transition"
          variants={itemVariants}
        >
          Docs
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-primary transition"
          variants={itemVariants}
        >
          Helps
        </motion.a>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 mt-2 sm:mt-0"
      >
        <svg
          className="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
        </svg>
        <span className="text-[#A2A2A2]">English</span>
        <svg
          className="w-3 h-3 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
