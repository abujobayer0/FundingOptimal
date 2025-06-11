import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormValues } from '../_validation/form.validation';
import { loginSchema } from '../_validation/form.validation';
import { containerVariants, itemVariants } from '../_animations/form.animation';
import { useClientAuth } from '@/hooks/useClientAuth';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useClientAuth();
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login(data.email, data.password);

      if (result.success) {
        // Login successful, redirect to profile
        router.push('/profile');
      } else {
        // Handle login errors
        if (result.errors && result.errors.length > 0) {
          const errorMessages = result.errors
            .map((err) => err.message)
            .join(', ');
          setError(errorMessages);
        } else {
          setError(result.message || 'Login failed. Please try again.');
        }
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred while logging in. Please try again later.'
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
          <div className="flex items-center justify-end mt-3">
            <a
              href="/auth/forgot-password"
              className="text-xs text-primary hover:text-green-200 transition-colors font-medium"
            >
              Forgot your password?
            </a>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            className="accent-primary w-4 h-4"
          />
          <label htmlFor="remember" className="text-primary text-base">
            Remember Me
          </label>
        </motion.div>
        <motion.button
          variants={itemVariants}
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-black font-semibold py-3 rounded-md shadow hover:bg-green-300 transition text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing in...' : 'Login'}
        </motion.button>
        <motion.div
          variants={itemVariants}
          className="text-center text-white text-[14px] mt-6"
        >
          Do not have an account?{' '}
          <a href="/auth/register" className="text-primary hover:underline">
            Sign up
          </a>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Form;
