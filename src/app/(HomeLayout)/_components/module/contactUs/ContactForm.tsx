'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form Data:', data);
    // You can add additional logic here like API calls
    reset(); // Reset form after submission
  };

  return (
    <div className="w-full max-w-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-primary/20 rounded-lg p-6 space-y-6"
      >
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-300/90 font-normal text-[16px] mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8337 17.5L13.3337 15M13.3337 15L15.8337 12.5M13.3337 15H18.3337M10.0003 12.9167H6.25033C5.08736 12.9167 4.50587 12.9167 4.03271 13.0602C2.96737 13.3834 2.13369 14.217 1.81053 15.2824C1.66699 15.7555 1.66699 16.337 1.66699 17.5M12.0837 6.25C12.0837 8.32107 10.4047 10 8.33366 10C6.26259 10 4.58366 8.32107 4.58366 6.25C4.58366 4.17893 6.26259 2.5 8.33366 2.5C10.4047 2.5 12.0837 4.17893 12.0837 6.25Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                {...register('firstName')}
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full border border-gray-700/25 rounded-md py-3 text-[14px] px-10 text-white/30 placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-primary/20 bg-gray-400/5 focus:border-transparent"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-400/50 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-300/90 font-normal text-[16px] mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8337 17.5L18.3337 15M18.3337 15L15.8337 12.5M18.3337 15H13.3337M10.0003 12.9167H6.25033C5.08736 12.9167 4.50587 12.9167 4.03271 13.0602C2.96737 13.3834 2.13369 14.217 1.81053 15.2824C1.66699 15.7555 1.66699 16.337 1.66699 17.5M12.0837 6.25C12.0837 8.32107 10.4047 10 8.33366 10C6.26259 10 4.58366 8.32107 4.58366 6.25C4.58366 4.17893 6.26259 2.5 8.33366 2.5C10.4047 2.5 12.0837 4.17893 12.0837 6.25Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                {...register('lastName')}
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full border border-gray-700/25 rounded-md py-3 text-[14px] px-10 text-white/30 placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-primary/20 bg-gray-400/5 focus:border-transparent"
              />
            </div>
            {errors.lastName && (
              <p className="text-red-400/50 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-300/90 font-normal text-[16px] mb-2"
          >
            Email
          </label>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66699 5.83331L8.47109 10.5962C9.02207 10.9819 9.29756 11.1747 9.59721 11.2494C9.8619 11.3154 10.1387 11.3154 10.4034 11.2494C10.7031 11.1747 10.9786 10.9819 11.5296 10.5962L18.3337 5.83331M5.66699 16.6666H14.3337C15.7338 16.6666 16.4339 16.6666 16.9686 16.3942C17.439 16.1545 17.8215 15.772 18.0612 15.3016C18.3337 14.7668 18.3337 14.0668 18.3337 12.6666V7.33331C18.3337 5.93318 18.3337 5.23312 18.0612 4.69834C17.8215 4.22793 17.439 3.84548 16.9686 3.6058C16.4339 3.33331 15.7338 3.33331 14.3337 3.33331H5.66699C4.26686 3.33331 3.5668 3.33331 3.03202 3.6058C2.56161 3.84548 2.17916 4.22793 1.93948 4.69834C1.66699 5.23312 1.66699 5.93318 1.66699 7.33331V12.6666C1.66699 14.0668 1.66699 14.7668 1.93948 15.3016C2.17916 15.772 2.56161 16.1545 3.03202 16.3942C3.5668 16.6666 4.26686 16.6666 5.66699 16.6666Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-700/25 rounded-md py-3 text-[14px] px-10 text-white/30 placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-primary/20 bg-gray-400/5 focus:border-transparent"
            />
          </div>
          {errors.email && (
            <p className="text-red-400/50 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-300/90 font-normal text-[16px] mb-2"
          >
            Message
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            placeholder="Message"
            className="w-full border border-gray-700/25 rounded-md py-3 text-[14px] px-4 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-primary/20 bg-gray-400/5 focus:border-transparent resize-none"
          />
          {errors.message && (
            <p className="text-red-400/50 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 border border-green-500/30 text-white rounded-lg relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 hover:border-green-400/50 hover:bg-green-500/5"
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-green-300">
            Submit
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-green-500/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
