import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../_animations/form.animation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '../_validation/form.validation';
import { ResetPasswordFormValues } from '../_validation/form.validation';
import { useRouter } from 'next/navigation';

interface ResetPasswordFormProps {
  email: string;
  token: string;
}

const Form = ({ email, token }: ResetPasswordFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: email || '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit() {
    if (!token) {
      setError('Invalid reset password link');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // await resetPassword({
      //   email: data.email,
      //   newPassword: data.password,
      //   token: token,
      // });
      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to reset password. Please try again.'
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
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-md text-sm backdrop-blur-sm"
            >
              Your password has been successfully reset. You can now log in with
              your new password.
            </motion.div>
            <motion.button
              variants={itemVariants}
              type="button"
              className="w-full bg-primary text-black font-semibold py-3 rounded-md shadow hover:bg-green-300 transition text-base"
              onClick={() => router.push('/auth/login')}
            >
              Back to Login
            </motion.button>
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

            <motion.div variants={itemVariants}>
              <label
                htmlFor="password"
                className="block text-base text-white mb-1 font-medium"
              >
                New Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <Lock className="w-5 h-5" />
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
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
                  placeholder="Confirm new password"
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

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-black font-semibold py-3 rounded-md shadow hover:bg-green-300 transition text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Resetting Password...' : 'Reset Password'}
            </motion.button>
          </>
        )}
        {!isSuccess && (
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
        )}
      </motion.form>
    </motion.div>
  );
};

export default Form;
