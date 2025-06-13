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
    <div className="w-full overflow-hidden bg-background py-8">
      <div className="relative flex items-center">
        {/* First set of logos */}
        <div className="flex animate-slide-left gap-16 pr-16">
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
      </div>
    </div>
  );
};

export default SponsorLogoSlider;
