import { Mail } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  containerVariants,
  itemVariants,
} from '../../register/_animations/form.animation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '../_validation/form.validation';
import { ForgotPasswordFormValues } from '../_validation/form.validation';

const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit() {
    setIsLoading(true);
    setError(null);

    try {
      // await resetEmail(data);
      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred while sending the reset link. Please try again later.'
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
      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 relative z-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {error && (
          <motion.div
            variants={itemVariants}
            className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-md text-sm backdrop-blur-sm"
          >
            {error}
          </motion.div>
        )}

        {isSuccess ? (
          <motion.div
            variants={itemVariants}
            className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-md text-sm backdrop-blur-sm"
          >
            Password reset link has been sent to your email. Please check your
            inbox.
          </motion.div>
        ) : (
          <>
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
                  placeholder="Enter your email"
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
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-black font-semibold py-3 rounded-md shadow hover:bg-green-300 transition text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </motion.button>
          </>
        )}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-4"
        >
          <a
            href="/auth/login"
            className="flex items-center gap-1 text-primary hover:text-green-200 transition-colors font-medium text-sm"
          >
            <span className="text-lg">&#8592;</span> Back to Login
          </a>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Form;
