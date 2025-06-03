'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertTriangle, Info } from 'lucide-react';

type NoticeVariant =
  | 'banner'
  | 'popup'
  | 'floating'
  | 'sticky-top'
  | 'scrolling-text';

interface DemoAccountNoticeProps {
  variant?: NoticeVariant;
  showCloseButton?: boolean;
  autoShow?: boolean;
  className?: string;
  onClose?: () => void;
}

const DemoAccountNotice: React.FC<DemoAccountNoticeProps> = ({
  variant = 'banner',
  showCloseButton = true,
  autoShow = true,
  className = '',
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(autoShow);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    if (variant === 'popup' && autoShow) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [variant, autoShow]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
    onClose?.();
  };

  const noticeText =
    'Please note that all accounts we provide to our clients are demo accounts in a simulated trading environment';

  // Popup variant
  if (variant === 'popup') {
    return (
      <AnimatePresence>
        {isVisible && !hasBeenClosed && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Popup Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                         max-w-md w-full mx-4"
            >
              <div
                className="bg-[#0A0A0A] border border-[#12FF8E]/20 rounded-xl p-6 shadow-2xl
                            backdrop-blur-md relative overflow-hidden"
              >
                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-xl opacity-50"
                  style={{
                    background: `conic-gradient(
                      from 0deg,
                      #12FF8E,
                      rgba(18, 255, 142, 0.3) 90deg,
                      rgba(18, 255, 142, 0.1) 180deg,
                      rgba(18, 255, 142, 0.3) 270deg,
                      #12FF8E 360deg
                    )`,
                    animation: 'spin 4s linear infinite',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#12FF8E]/10 rounded-lg flex items-center justify-center">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Demo Account Notice
                      </h3>
                      <p className="text-secondary-text text-sm leading-relaxed">
                        {noticeText}
                      </p>
                    </div>
                    {showCloseButton && (
                      <button
                        onClick={handleClose}
                        className="flex-shrink-0 w-6 h-6 text-secondary-text hover:text-white 
                                 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={handleClose}
                      className="px-4 py-2 bg-[#12FF8E]/10 text-primary hover:bg-[#12FF8E]/20 
                               rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      I Understand
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Sticky top banner
  if (variant === 'sticky-top') {
    return (
      <AnimatePresence>
        {isVisible && !hasBeenClosed && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md
                     border-b border-[#12FF8E]/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-white text-sm">
                    <span className="font-medium text-primary">
                      Demo Account:
                    </span>{' '}
                    {noticeText}
                  </p>
                </div>
                {showCloseButton && (
                  <button
                    onClick={handleClose}
                    className="text-secondary-text hover:text-white transition-colors duration-200 ml-4"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Floating banner (bottom right)
  if (variant === 'floating') {
    return (
      <AnimatePresence>
        {isVisible && !hasBeenClosed && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40 max-w-sm"
          >
            <div
              className="bg-[#0A0A0A] border border-[#12FF8E]/30 rounded-xl p-4 shadow-2xl
                          backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#12FF8E]/5 to-transparent rounded-xl" />

              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#12FF8E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-sm mb-1">
                      Demo Account
                    </h4>
                    <p className="text-secondary-text text-xs leading-relaxed">
                      {noticeText}
                    </p>
                  </div>
                  {showCloseButton && (
                    <button
                      onClick={handleClose}
                      className="text-secondary-text hover:text-white transition-colors duration-200 flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Scrolling text banner
  if (variant === 'scrolling-text') {
    return (
      <AnimatePresence>
        {isVisible && !hasBeenClosed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-r from-[#12FF8E]/10 via-[#12FF8E]/5 to-[#12FF8E]/10 
                     border-y border-[#12FF8E]/20 py-2 overflow-hidden relative"
          >
            <motion.div
              animate={{ x: [1000, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="whitespace-nowrap"
            >
              <span className="text-primary font-medium text-sm">
                🚨 DEMO ACCOUNT NOTICE: {noticeText} 🚨
              </span>
            </motion.div>
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                         text-secondary-text hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Default banner variant
  return (
    <AnimatePresence>
      {isVisible && !hasBeenClosed && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className={`bg-gradient-to-r from-[#12FF8E]/10 via-[#12FF8E]/5 to-[#12FF8E]/10 
                     border border-[#12FF8E]/20 rounded-lg p-4 mb-6 relative overflow-hidden ${className}`}
        >
          {/* Subtle animated background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(90deg, 
                rgba(18, 255, 142, 0.1) 0%, 
                rgba(18, 255, 142, 0.05) 50%, 
                rgba(18, 255, 142, 0.1) 100%
              )`,
              animation: 'pulse 3s ease-in-out infinite',
            }}
          />

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#12FF8E]/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-white">
                <span className="font-semibold text-primary">
                  Demo Account Notice:
                </span>{' '}
                <span className="text-secondary-text">{noticeText}</span>
              </p>
            </div>
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="text-secondary-text hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoAccountNotice;
