'use client';
import { motion } from 'motion/react';
import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
  maxWidth?: string;
  descriptionMaxWidth?: string;
  showBadge?: boolean;
  centerAlign?: boolean;
  noMargin?: boolean;
}

// Helper function to parse title and highlight text within curly braces
const parseTitle = (title: string) => {
  const parts = title.split(/(\{[^}]+\})/);

  return parts.map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      const text = part.slice(1, -1); // Remove curly braces
      return (
        <span key={index} className="text-primary">
          {text}
        </span>
      );
    }
    return part;
  });
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  badgeClassName = '',
  maxWidth = 'max-w-3xl',
  descriptionMaxWidth = 'max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl',
  showBadge = true,
  centerAlign = true,
  noMargin = false,
}) => {
  const containerClasses = centerAlign
    ? `text-center flex justify-center ${
        noMargin ? '' : 'md:mt-24'
      } flex-col gap-4 mb-16 ${className}`
    : `flex flex-col gap-4 mb-16 ${className}`;

  const titleClasses = centerAlign
    ? `text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold ${maxWidth} ${titleClassName}`
    : `text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold ${maxWidth} ${titleClassName}`;

  const descriptionClasses = centerAlign
    ? `text-center text-sm md:text-base lg:text-[16px] font-light ${descriptionMaxWidth} ${descriptionClassName}`
    : `text-sm md:text-base lg:text-[16px] font-light ${descriptionMaxWidth} ${descriptionClassName}`;

  return (
    <div className={containerClasses}>
      {showBadge && badge && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded bg-primary/10 text-primary text-center text-sm md:text-base ${badgeClassName}`}
        >
          {badge}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`${titleClasses}`}
      >
        {parseTitle(title)}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={descriptionClasses}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
