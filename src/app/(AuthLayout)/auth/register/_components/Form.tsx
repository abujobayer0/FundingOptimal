import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { itemVariants } from '../_animations/form.animation';
import { containerVariants } from '../_animations/form.animation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  RegisterFormValues,
  registerSchema,
} from '../_validation/form.validation';

interface FormProps {
  referralCode?: string;
}

const Form = ({ referralCode = '' }: FormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      referralCode: referralCode,
      confirmPassword: '',
      terms: false,
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    setError(null);

    try {
      //    await register({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: data.email,
      //   password: data.password,
      //   phone: data.phone,
      //   referralCode: data.referralCode,
      // });
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col justify-center items-center px-4 py-12 md:py-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl relative rounded-2xl p-10 backdrop-blur-md border border-primary/60"
        style={{ background: 'transparent', backdropFilter: 'blur(50px)' }}
      >
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <motion.div
                variants={itemVariants}
                className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-md text-sm backdrop-blur-sm"
              >
                {error}
              </motion.div>
            )}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-base text-white mb-1 font-medium"
                >
                  First Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className={`w-full pl-10 pr-3 py-3 rounded-md bg-[#FFFFFF14] border ${
                      form.formState.errors.firstName
                        ? 'border-primary/50 focus:border-primary'
                        : 'border-transparent'
                    } text-white placeholder-[#FFFFFF72] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base`}
                    {...form.register('firstName')}
                  />
                </div>
                {form.formState.errors.firstName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-primary flex items-center gap-1"
                  >
                    <span className="text-primary">•</span>
                    {form.formState.errors.firstName.message}
                  </motion.p>
                )}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-base text-white mb-1 font-medium"
                >
                  Last Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className={`w-full pl-10 pr-3 py-3 rounded-md bg-[#FFFFFF14] border ${
                      form.formState.errors.lastName
                        ? 'border-primary/50 focus:border-primary'
                        : 'border-transparent'
                    } text-white placeholder-[#FFFFFF72] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base`}
                    {...form.register('lastName')}
                  />
                </div>
                {form.formState.errors.lastName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-primary flex items-center gap-1"
                  >
                    <span className="text-primary">•</span>
                    {form.formState.errors.lastName.message}
                  </motion.p>
                )}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="referralCode"
                className="block text-base text-white mb-1 font-medium"
              >
                Referral Code (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <User className="w-5 h-5" />
                </span>
                <input
                  id="referralCode"
                  type="text"
                  placeholder="Referral Code"
                  className={`w-full pl-10 pr-3 py-3 rounded-md bg-[#FFFFFF14] border ${
                    form.formState.errors.referralCode
                      ? 'border-primary/50 focus:border-primary'
                      : 'border-transparent'
                  } text-white placeholder-[#FFFFFF72] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base`}
                  {...form.register('referralCode')}
                />
              </div>
              {form.formState.errors.referralCode && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-primary flex items-center gap-1"
                >
                  <span className="text-primary">•</span>
                  {form.formState.errors.referralCode.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-base text-white mb-1 font-medium"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={`w-full pl-10 pr-3 py-3 rounded-md bg-[#FFFFFF14] border ${
                    form.formState.errors.email
                      ? 'border-primary/50 focus:border-primary'
                      : 'border-transparent'
                  } text-white placeholder-[#FFFFFF72] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base`}
                  {...form.register('email')}
                />
              </div>
              {form.formState.errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-primary flex items-center gap-1"
                >
                  <span className="text-primary">•</span>
                  {form.formState.errors.email.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="password"
                className="block text-base text-white mb-1 font-medium"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <Lock className="w-5 h-5" />
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={`w-full pl-10 pr-10 py-3 rounded-md bg-[#FFFFFF14] border ${
                    form.formState.errors.password
                      ? 'border-primary/50 focus:border-primary'
                      : 'border-transparent'
                  } text-white placeholder-[#FFFFFF72] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base`}
                  {...form.register('password')}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-green-200"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {form.formState.errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-primary flex items-center gap-1"
                >
                  <span className="text-primary">•</span>
                  {form.formState.errors.password.message}
                </motion.p>
              )}
              <div className="text-xs text-white mt-1">
                Minimum length is 8 characters.
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="confirmPassword"
                className="block text-base text-white mb-1 font-medium"
              >
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <Lock className="w-5 h-5" />
                </span>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className={`w-full pl-10 pr-10 py-3 rounded-md bg-[#FFFFFF14] border ${
                    form.formState.errors.confirmPassword
                      ? 'border-primary/50 focus:border-primary'
                      : 'border-transparent'
                  } text-white placeholder-[#FFFFFF72] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base`}
                  {...form.register('confirmPassword')}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-green-200"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {form.formState.errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-primary flex items-center gap-1"
                >
                  <span className="text-primary">•</span>
                  {form.formState.errors.confirmPassword.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <input
                id="terms"
                type="checkbox"
                className="accent-primary w-4 h-4"
                {...form.register('terms')}
              />
              <label htmlFor="terms" className="text-green-100 text-base">
                I agree to the{' '}
                <a
                  href={`${process.env.NEXT_PUBLIC_LANDING_PAGE_URL}/terms-and-conditions`}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href={`${process.env.NEXT_PUBLIC_LANDING_PAGE_URL}/privacy-policy`}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </motion.div>
            {form.formState.errors.terms && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-primary flex items-center gap-1"
              >
                <span className="text-primary">•</span>
                {form.formState.errors.terms.message}
              </motion.p>
            )}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-black font-semibold py-3 rounded-md shadow hover:bg-green-300 transition text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </motion.button>
            <motion.div
              variants={itemVariants}
              className="text-center text-white text-[14px] mt-6"
            >
              Already have an account?{' '}
              <a href="/auth/login" className="text-primary hover:underline">
                Sign in
              </a>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Form;
