import { DollarSign, LifeBuoy } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/fundingoptimal-logo.png';

const features = [
  {
    icon: <CreditCard className="w-5 h-5 text-primary" />,
    text: 'Secure & Fast Registration',
  },
  {
    icon: <LifeBuoy className="w-5 h-5 text-primary" />,
    text: 'Life Time Support',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    text: 'Up to 200k Funded Account',
  },
];

const Header = ({ title }: { title: string }) => {
  const router = useRouter();
  const navigate = () => {
    router.push('/auth/login');
  };
  return (
    <div className="px-4 sm:px-0">
      <motion.div
        onClick={navigate}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center cursor-pointer h-[58px] justify-center gap-2 overflow-hidden w-full"
      >
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FundingOptimal" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm sm:text-lg">
              FUNDINGOPTIMAL
            </span>
            <span className="text-gray-400 text-xs -mt-1">
              We Fund the Fearless
            </span>
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl font-semibold mt-4 text-white text-center px-2"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8 mt-4 mb-8"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-2 text-white text-sm sm:text-base"
          >
            <span>{f.icon}</span>
            <span className="text-center sm:text-left">{f.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
