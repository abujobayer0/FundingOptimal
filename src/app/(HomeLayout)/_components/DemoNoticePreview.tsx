'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import DemoAccountNotice from './ui/DemoAccountNotice';

const DemoNoticePreview: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<string | null>(null);

  const variants = [
    {
      id: 'banner',
      name: 'Banner (Default)',
      description: 'A prominent banner at the top of content sections',
      component: <DemoAccountNotice variant="banner" />,
    },
    {
      id: 'popup',
      name: 'Popup Modal',
      description:
        'A modal popup that appears after page load (like cookie consent)',
      component: <DemoAccountNotice variant="popup" />,
    },
    {
      id: 'sticky-top',
      name: 'Sticky Top Bar',
      description: 'A fixed bar at the top that stays visible while scrolling',
      component: <DemoAccountNotice variant="sticky-top" />,
    },
    {
      id: 'floating',
      name: 'Floating Card',
      description: 'A floating card in the bottom right corner',
      component: <DemoAccountNotice variant="floating" />,
    },
    {
      id: 'scrolling-text',
      name: 'Scrolling Text',
      description: 'A scrolling text banner with animated movement',
      component: <DemoAccountNotice variant="scrolling-text" />,
    },
  ];

  return (
    <div className="min-h-screen bg-dark-background p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Demo Account Notice - Preview Options
          </h1>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Choose from different display styles for the demo account notice.
            Each variant is designed to match your website's dark theme and
            green accent color.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A0A0A] border border-[#12FF8E]/20 rounded-xl p-6 hover:border-[#12FF8E]/40 
                       transition-colors duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {variant.name}
                </h3>
                <p className="text-secondary-text text-sm">
                  {variant.description}
                </p>
              </div>

              <div className="mb-4">
                <div
                  className="bg-[#050505] rounded-lg p-4 min-h-[120px] flex items-center justify-center 
                              border border-[#12FF8E]/10"
                >
                  {variant.id === 'banner' && (
                    <div className="w-full">
                      <DemoAccountNotice variant="banner" />
                    </div>
                  )}
                  {variant.id === 'scrolling-text' && (
                    <div className="w-full">
                      <DemoAccountNotice variant="scrolling-text" />
                    </div>
                  )}
                  {(variant.id === 'popup' ||
                    variant.id === 'sticky-top' ||
                    variant.id === 'floating') && (
                    <div className="text-center">
                      <p className="text-secondary-text text-sm mb-2">
                        Click "Preview" to see this variant in action
                      </p>
                      <div className="w-12 h-12 bg-[#12FF8E]/10 rounded-lg flex items-center justify-center mx-auto">
                        <span className="text-primary text-xs">Demo</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setActiveVariant(variant.id)}
                className="w-full px-4 py-2 bg-[#12FF8E]/10 text-primary hover:bg-[#12FF8E]/20 
                         rounded-lg transition-colors duration-200 font-medium"
              >
                Preview {variant.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Implementation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-[#0A0A0A] border border-[#12FF8E]/20 rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Implementation Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                For Homepage (Banner)
              </h3>
              <div className="bg-[#050505] rounded-lg p-4 text-sm">
                <code className="text-secondary-text">
                  {`import { DemoAccountNotice } from '@/components/ui';

// In your page component
<DemoAccountNotice variant="banner" />`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Site-wide (Sticky Top)
              </h3>
              <div className="bg-[#050505] rounded-lg p-4 text-sm">
                <code className="text-secondary-text">
                  {`// In your layout.tsx
<DemoAccountNotice 
  variant="sticky-top" 
  showCloseButton={true} 
/>`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Cookie-like Popup
              </h3>
              <div className="bg-[#050505] rounded-lg p-4 text-sm">
                <code className="text-secondary-text">
                  {`<DemoAccountNotice 
  variant="popup" 
  autoShow={true}
  onClose={() => console.log('Closed')}
/>`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Floating Card
              </h3>
              <div className="bg-[#050505] rounded-lg p-4 text-sm">
                <code className="text-secondary-text">
                  {`<DemoAccountNotice 
  variant="floating" 
  showCloseButton={true}
/>`}
                </code>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-[#0A0A0A] border border-[#12FF8E]/20 rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#12FF8E]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary">🎨</span>
              </div>
              <h3 className="text-white font-medium mb-2">Theme Matched</h3>
              <p className="text-secondary-text text-sm">
                Perfect match with your dark theme and green accents
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#12FF8E]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary">✨</span>
              </div>
              <h3 className="text-white font-medium mb-2">Animated</h3>
              <p className="text-secondary-text text-sm">
                Smooth animations using Framer Motion
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#12FF8E]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary">📱</span>
              </div>
              <h3 className="text-white font-medium mb-2">Responsive</h3>
              <p className="text-secondary-text text-sm">
                Works perfectly on all device sizes
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Render active variant */}
      {activeVariant && (
        <div onClick={() => setActiveVariant(null)}>
          {variants.find((v) => v.id === activeVariant)?.component}
        </div>
      )}
    </div>
  );
};

export default DemoNoticePreview;
