import React from 'react';

const BackgroundSVG: React.FC = () => (
  <svg
    viewBox="0 0 800 180"
    className="w-full h-full object-cover -mt-8 md:-mt-28 z-0"
  >
    <defs>
      <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
        <stop offset="30%" style={{ stopColor: '#050505', stopOpacity: 0.4 }} />
        <stop
          offset="100%"
          style={{ stopColor: '#12FF8E75', stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="horizontalFade" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
        <stop
          offset="20%"
          style={{ stopColor: '#12FF8E15', stopOpacity: 0.5 }}
        />
        <stop
          offset="80%"
          style={{ stopColor: '#12FF8E15', stopOpacity: 0.5 }}
        />
        <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="roundedVignette" cx="50%" cy="50%" r="80%">
        <stop offset="0%" style={{ stopColor: '#050505', stopOpacity: 0 }} />
        <stop offset="50%" style={{ stopColor: '#050505', stopOpacity: 0 }} />
        <stop offset="75%" style={{ stopColor: '#050505', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
      </radialGradient>
      <radialGradient id="topLeftCorner" cx="0%" cy="0%" r="60%">
        <stop offset="0%" style={{ stopColor: '#050505', stopOpacity: 0.5 }} />
        <stop offset="70%" style={{ stopColor: '#050505', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 0 }} />
      </radialGradient>
      <radialGradient id="topRightCorner" cx="100%" cy="0%" r="60%">
        <stop offset="0%" style={{ stopColor: '#050505', stopOpacity: 0.5 }} />
        <stop offset="70%" style={{ stopColor: '#050505', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 0 }} />
      </radialGradient>
      <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop
          offset="0%"
          style={{ stopColor: '#050505  ', stopOpacity: 0.4 }}
        />
        <stop offset="50%" style={{ stopColor: '#050505', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 0 }} />
      </linearGradient>
    </defs>

    {/* Background - vertical fade */}
    <rect width="100%" height="100%" fill="url(#verticalGradient)" />
    {/* Background - horizontal corner fade */}
    <rect
      width="100%"
      height="100%"
      fill="url(#horizontalFade)"
      style={{ mixBlendMode: 'multiply' }}
    />
    {/* Rounded vignette effect */}
    <rect width="100%" height="100%" fill="url(#roundedVignette)" />
    {/* Top left corner fade */}
    <rect width="100%" height="100%" fill="url(#topLeftCorner)" />
    {/* Top right corner fade */}
    <rect width="100%" height="100%" fill="url(#topRightCorner)" />

    {/* Curved lens shape - only top half visible */}
    <ellipse cx="400" cy="200" rx="400" ry="80" fill="#050505" />

    {/* Shadow overlay on top part of shape */}
    <ellipse cx="400" cy="200" rx="400" ry="80" fill="url(#shadowGradient)" />
  </svg>
);

export default BackgroundSVG;
