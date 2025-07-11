'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { SectionHeader } from '../../ui';

interface ContactInfoItem {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}

const ContactInfoSection: React.FC = () => {
  const contactData: ContactInfoItem[] = [
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      subtitle: 'Available',
      value: '+00-000-547-574',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_415_1011)">
            <path
              d="M0.507923 11.8564C0.507365 13.8729 1.03425 15.8418 2.03611 17.5773L0.412109 23.5067L6.4802 21.9157C8.15856 22.8293 10.039 23.3081 11.95 23.3082H11.955C18.2634 23.3082 23.3985 18.1749 23.4012 11.8654C23.4024 8.80804 22.2129 5.93307 20.0516 3.77009C17.8906 1.6073 15.0167 0.41558 11.9545 0.414185C5.64541 0.414185 0.510621 5.54721 0.508016 11.8564"
              fill="url(#paint0_linear_415_1011)"
            />
            <path
              d="M0.0995349 11.8527C0.0988837 13.9417 0.644651 15.981 1.68223 17.7786L0 23.9207L6.28567 22.2726C8.01758 23.2168 9.96754 23.7147 11.9517 23.7154H11.9568C18.4915 23.7154 23.8112 18.3975 23.814 11.8621C23.8151 8.69488 22.5827 5.71656 20.3442 3.47609C18.1054 1.23591 15.1287 0.00130233 11.9568 0C5.42102 0 0.10214 5.31721 0.0995349 11.8527ZM3.84288 17.469L3.60819 17.0965C2.62158 15.5277 2.10084 13.7149 2.10158 11.8534C2.10363 6.4213 6.52447 2.00186 11.9606 2.00186C14.5931 2.00298 17.0672 3.02921 18.928 4.89116C20.7887 6.7533 21.8127 9.22865 21.812 11.8614C21.8096 17.2935 17.3887 21.7135 11.9568 21.7135H11.9529C10.1843 21.7126 8.44967 21.2376 6.93693 20.34L6.57693 20.1265L2.84688 21.1045L3.84288 17.469Z"
              fill="url(#paint1_linear_415_1011)"
            />
            <path
              d="M8.99304 6.89746C8.77108 6.40416 8.5375 6.39421 8.32643 6.38556C8.15359 6.37811 7.95601 6.37867 7.75862 6.37867C7.56104 6.37867 7.24001 6.453 6.96866 6.74928C6.69704 7.04583 5.93164 7.76249 5.93164 9.22007C5.93164 10.6776 6.99332 12.0864 7.14132 12.2843C7.2895 12.4817 9.1909 15.5686 12.2022 16.7562C14.7049 17.743 15.2142 17.5468 15.7574 17.4973C16.3007 17.448 17.5103 16.7808 17.7571 16.089C18.0041 15.3973 18.0041 14.8043 17.9301 14.6804C17.856 14.557 17.6584 14.4829 17.3622 14.3348C17.0659 14.1867 15.6092 13.4698 15.3377 13.371C15.0661 13.2722 14.8686 13.2229 14.671 13.5195C14.4734 13.8157 13.9061 14.4829 13.7331 14.6804C13.5604 14.8785 13.3875 14.9031 13.0913 14.755C12.7948 14.6063 11.8407 14.2938 10.7087 13.2846C9.82792 12.4993 9.23331 11.5296 9.06048 11.2329C8.88764 10.9367 9.04197 10.7762 9.19052 10.6285C9.32364 10.4958 9.4869 10.2826 9.63518 10.1096C9.7829 9.93663 9.8322 9.81318 9.93099 9.6156C10.0299 9.41783 9.98038 9.24481 9.90643 9.09663C9.8322 8.94844 9.25648 7.48323 8.99304 6.89746Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_415_1011"
              x1="1149.87"
              y1="2309.67"
              x2="1149.87"
              y2="0.414185"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1FAF38" />
              <stop offset="1" stopColor="#60D669" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_415_1011"
              x1="1190.7"
              y1="2392.07"
              x2="1190.7"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F9F9F9" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_415_1011">
              <rect width="23.814" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      href: 'https://wa.me/00000547574',
    },
    {
      id: 'livechat',
      title: 'Live Chat',
      subtitle: 'Chat with us',
      value: 'fundingoptimal.com',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C6.5 3 2 6.58 2 11C2.02525 12.0627 2.28483 13.1067 2.7602 14.0574C3.23557 15.0081 3.91501 15.8422 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11C22 6.58 17.5 3 12 3ZM12 17C7.58 17 4 14.31 4 11C4 7.69 7.58 5 12 5C16.42 5 20 7.69 20 11C20 14.31 16.42 17 12 17Z"
            fill="white"
          />
        </svg>
      ),
      href: '#',
    },
    {
      id: 'email',
      title: 'Email',
      subtitle: 'Email us',
      value: 'fundingoptimal.com',
      icon: <Mail className="size-6" />,
      href: 'mailto:contact@fundingoptimal.com',
    },
    {
      id: 'phone',
      title: 'Phone Number',
      subtitle: 'Call Us',
      value: '24/7',
      icon: <Phone className="size-6" />,
      href: 'tel:+00000547574',
    },
  ];

  const handleContactClick = (item: ContactInfoItem) => {
    console.log('Contact method clicked:', {
      type: item.title,
      value: item.value,
      href: item.href,
    });

    if (item.href && item.href !== '#') {
      window.open(item.href, '_blank');
    }
  };

  return (
    <div className="bg-gradient-to-b from-transparent from-[40%] to-[rgba(9,131,70,0.3)] to-[100%] pb-[100px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader
          className="items-center"
          badge="Worldwide"
          title="Contact Us"
          description="We Have Everything You Need In A Prop Firm."
        />

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleContactClick(item)}
              className="rounded-xl p-6 bg-primary/5 transition-all duration-300 cursor-pointer group"
              style={{
                boxShadow:
                  'rgba(18, 255, 142, 0.3) 0px 0px 15px 0px inset, rgba(18, 255, 142, 0.3) 0px 0px 25px 0px inset, rgba(18, 255, 142, 0.05) 0px 0px 35px 0px inset',
              }}
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-3 mb-4">
                {item.icon}

                <h3 className="text-white font-normal text-[24px]">
                  {item.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm pt-2">{item.subtitle}</p>

              {/* Value */}
              <p className="text-white font-normal">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
