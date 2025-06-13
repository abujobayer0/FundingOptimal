'use client';
import React, { useEffect, useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    const sphereEl = sphereRef.current;
    const spherePathEls = pathRefs.current;

    if (!sphereEl || !spherePathEls.length) return;

    // Fit element to parent function
    const fitElementToParent = (el: HTMLElement, padding = 0) => {
      const resize = () => {
        const parentEl = el.parentElement;
        if (!parentEl) return;

        const elOffsetWidth = el.offsetWidth - padding;
        const parentOffsetWidth = parentEl.offsetWidth;
        if (!parentOffsetWidth) return;
        const ratio = parentOffsetWidth / elOffsetWidth;

        el.style.transform = `scale(${Math.min(ratio, 1)})`;
      };

      resize();
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    };

    // Initialize stroke dasharray for animation
    spherePathEls.forEach((path, i) => {
      if (path) {
        const length = path.getTotalLength();
        if (typeof length !== 'number') return;
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
        path.style.animationDelay = `${i * 0.19}s`;
      }
    });

    // Start animations
    setTimeout(() => {
      sphereEl.classList.add('animate');
    }, 100);

    const cleanup = fitElementToParent(sphereEl);
    return cleanup;
  }, []);

  return (
    <div className="sphere-container">
      <div className="animation-wrapper">
        <div ref={sphereRef} className="sphere-animation">
          <svg className="sphere" viewBox="0 0 440 440" stroke="rgba(0,0,0,1)">
            <defs>
              <linearGradient
                id="sphereGradient"
                x1="5%"
                x2="5%"
                y1="0%"
                y2="15%"
              >
                <stop stopColor="#064e3b" offset="0%" />
                <stop stopColor="#065f46" offset="25%" />
                <stop stopColor="#047857" offset="50%" />
                <stop stopColor="#065f46" offset="75%" />
                <stop stopColor="#050505" offset="100%" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  values="0 220 220; 20 220 220; 0 220 220"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* All the sphere paths */}
            {[
              'M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z',
              'M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z',
              'M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z',
              'M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z',
              'M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z',
              'M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z',
              'M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z',
              'M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z',
              'M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z',
              'M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z',
              'M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z',
              'M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z',
              'M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z',
              'M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z',
              'M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z',
              'M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z',
              'M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z',
              'M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z',
              'M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z',
              'M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z',
              'M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z',
            ].map((pathData, index) => (
              <path
                key={index}
                ref={(el) => {
                  if (el) {
                    pathRefs.current[index] = el;
                  }
                }}
                d={pathData}
                fill="url(#sphereGradient)"
                strokeWidth="0.8px"
                stroke="rgba(255,255,255,0.1)"
                className="sphere-path"
                style={{
                  backfaceVisibility: 'hidden',
                  animationDelay: `${index * 0.19}s`,
                  filter: 'url(#glow)',
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <style jsx>{`
        .sphere-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          perspective: 1200px;
        }

        .animation-wrapper {
          width: 50%;
          padding-bottom: 50%;
          position: relative;
          transform-style: preserve-3d;
          animation: floatAnimation 8s ease-in-out infinite;
        }

        .sphere-animation {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 580px;
          height: 580px;
          margin: -290px 0 0 -290px;
          transform-origin: center;
          mix-blend-mode: screen;
        }

        .sphere-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: none;
          transition: all 0.3s ease;
          opacity: 0.9;
        }

        .animate .sphere-path {
          animation: drawPath 3.9s ease-in-out forwards,
            breathe 4s ease-in-out infinite, glowEffect 6s ease-in-out infinite,
            subtleRotate 12s ease-in-out infinite;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes breathe {
          0%,
          100% {
            stroke: rgba(16, 185, 129, 0.05);
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          50% {
            stroke: rgba(16, 185, 129, 0.5);
            transform: translate(-2px, -2px) scale(1.02) rotate(1deg);
          }
        }

        @keyframes glowEffect {
          0%,
          100% {
            filter: drop-shadow(0 0 2px rgba(16, 185, 129, 0.1));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.9));
          }
        }

        @keyframes subtleRotate {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes floatAnimation {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          50% {
            transform: translateY(-20px) rotateX(2deg) rotateY(1deg);
          }
        }

        @media (min-width: 500px) {
          .sphere-path {
            stroke-width: 0.6px;
          }
        }

        @media (max-width: 768px) {
          .animation-wrapper {
            width: 80%;
            padding-bottom: 80%;
          }

          .sphere-animation {
            width: 400px;
            height: 400px;
            margin: -200px 0 0 -200px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSphere;
