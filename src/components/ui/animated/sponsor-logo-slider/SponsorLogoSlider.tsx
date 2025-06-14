import React from 'react';
import Image from 'next/image';

const SponsorLogoSlider = () => {
  // Define logos array with paths
  const logos = [
    '/logo/1.svg',
    '/logo/2.svg',
    '/logo/3.svg',
    '/logo/4.svg',
    '/logo/5.svg',
  ];

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden max-w-7xl mx-auto bg-background py-8">
      <div className="relative flex items-center">
        {/* Gradient overlay - left side */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />

        {/* First set of logos */}
        <div className="flex animate-slide-left gap-32 pr-16">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex min-w-[150px] items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Sponsor Logo ${index + 1}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay - right side */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  );
};

export default SponsorLogoSlider;
