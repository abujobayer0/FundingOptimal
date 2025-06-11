import React, { useState } from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface StatItem {
  prefix?: string;
  value: number;
  label: string;
}

interface TwoColumnSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  reverse?: boolean;
  onButtonClick?: () => void;
  showStats?: boolean;
  stats?: StatItem[];
  showButton?: boolean;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 441,
  reverse = false,
  onButtonClick,
  showStats = false,
  stats = [],
  showButton = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowReadMore = description.length > 500;
  const truncatedDescription = shouldShowReadMore
    ? description.substring(0, 500) + '...'
    : description;

  const renderFormattedContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Check if this paragraph looks like a subheading (short line followed by content)
      const lines = paragraph.split('\n');
      if (
        lines.length > 1 &&
        lines[0].length < 50 &&
        !lines[0].includes('.') &&
        lines[0].trim() !== ''
      ) {
        return (
          <div key={index} className="space-y-2">
            <h3 className="text-primary font-semibold text-[18px]">
              {lines[0]}
            </h3>
            <p className="whitespace-pre-line">{lines.slice(1).join('\n')}</p>
          </div>
        );
      }

      // Handle bullet points or list items
      if (
        paragraph.includes('\n') &&
        !paragraph.startsWith('At ') &&
        !paragraph.startsWith('What ') &&
        !paragraph.startsWith('Driven ') &&
        !paragraph.startsWith('This ') &&
        !paragraph.startsWith('Join ') &&
        !paragraph.startsWith('We ') &&
        !paragraph.startsWith('Our ') &&
        !paragraph.startsWith('Beyond ')
      ) {
        const items = paragraph
          .split('\n')
          .filter((item) => item.trim() !== '');
        if (items.length > 1 && items.every((item) => item.length < 100)) {
          return (
            <ul key={index} className="space-y-2 pl-4">
              {items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="relative before:content-['•'] before:text-primary before:absolute before:-left-4"
                >
                  {item.trim()}
                </li>
              ))}
            </ul>
          );
        }
      }

      // Regular paragraph
      return (
        <p key={index} className="whitespace-pre-line">
          {paragraph}
        </p>
      );
    });
  };

  const contentDiv = (
    <div className="w-full flex flex-col gap-8 items-start justify-between">
      <span className="text-primary text-2xl p-3 rounded-md border border-primary">
        <Icon />
      </span>

      <h2 className="text-[44px] font-bold">{title}</h2>

      <div className="text-white text-[16px] leading-relaxed space-y-4">
        {renderFormattedContent(
          isExpanded ? description : truncatedDescription
        )}

        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      {showButton && (
        <button
          onClick={onButtonClick}
          className="bg-transparent border text-white border-primary px-4 py-2 rounded-md mt-4"
        >
          {buttonText}
        </button>
      )}

      {showStats && stats.length > 0 && (
        <div className="grid w-full grid-cols-3 gap-4 sm:gap-0 max-w-7xl mx-auto relative">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center relative ${
                index < stats.length - 1
                  ? 'sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:h-full sm:after:w-[1px] sm:after:bg-gradient-to-b sm:after:from-transparent sm:after:via-primary sm:after:to-transparent sm:px-8'
                  : ''
              }`}
            >
              <h3 className="text-white text-[30px] font-bold">
                {stat.prefix} {stat.value}+
              </h3>
              <p className="text-gray-400 text-[14px]">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const imageDiv = (
    <div className="w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div
      className={`grid grid-cols-1 items-center mt-10 mb-10 justify-center md:grid-cols-2 gap-10 md:gap-44 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {reverse ? (
        <>
          {imageDiv}
          {contentDiv}
        </>
      ) : (
        <>
          {contentDiv}
          {imageDiv}
        </>
      )}
    </div>
  );
};

export default TwoColumnSection;
