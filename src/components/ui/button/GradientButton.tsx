import { ArrowRight } from 'lucide-react';
import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GradientButtonProps extends HTMLMotionProps<'button'> {
  children?: ReactNode;
  showIcon?: boolean;
  animation?: boolean;
}

export default function GradientButton({
  children = 'Get Funded Now',
  className = '',
  showIcon = true,
  animation = true,
  ...rest
}: GradientButtonProps) {
  return (
    <motion.button
      {...(animation && {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, delay: 1.5 },
      })}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.95 }}
      className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white rounded-lg flex items-center justify-center transition-all duration-500 text-base sm:text-lg overflow-hidden ${className}`}
      style={{
        boxShadow:
          'rgba(18, 255, 142, 0.5) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          'rgba(18, 255, 142, 0.8) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.7) 0px 0px 40px 0px inset, rgba(18, 255, 142, 0.4) 0px 0px 50px 0px inset, rgba(18, 255, 142, 0.6) 0px 0px 60px 10px';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          'rgba(18, 255, 142, 0.5) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset';
      }}
      {...rest}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-emerald-400/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      <div className="absolute inset-0 rounded-lg border border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />

      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>

      {showIcon && (
        <motion.div
          className="relative z-10 ml-2"
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      )}
    </motion.button>
  );
}
