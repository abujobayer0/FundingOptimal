import React from 'react';
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
}) => {
  const contentDiv = (
    <div className="w-full flex flex-col gap-8 items-start justify-between">
      <span className="text-primary text-2xl p-3 rounded-md border border-primary">
        <Icon />
      </span>
      <h2 className="text-[44px] font-bold">{title}</h2>
      <p className="text-white font-[16px]">{description}</p>
      {!showStats && (
        <button
          onClick={onButtonClick}
          className="bg-transparent border  text-white border-primary px-4 py-2 rounded-md mt-4"
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
