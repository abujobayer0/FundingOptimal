'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  BarChart3,
  ArrowRight,
  Edit3,
  Save,
  X,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react';
import Link from 'next/link';
import { useClientAuth } from '@/hooks/useClientAuth';

// Simple outlined button used only on this page
const ActionOutlineButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className = '', ...rest }) => (
  <button
    {...rest}
    className={`group relative w-full sm:w-auto px-6 py-3 border border-primary rounded-lg text-primary flex items-center justify-center overflow-hidden transition-colors duration-300 hover:bg-primary/10 hover:border-primary/60 ${className}`}
  >
    <span className="mr-2 group-hover:text-primary/80 transition-colors duration-300">
      {children}
    </span>
    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
  </button>
);

const ProfilePage = () => {
  const { user, updateUser } = useClientAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [editData, setEditData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  // Password change states
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Update editData when user data changes
  React.useEffect(() => {
    if (user) {
      setEditData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || '',
      });
    }
  }, [user?.email]);

  if (!user?.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Loading...</h1>
          <p className="text-secondary-text">
            Please wait while we load your profile.
          </p>
        </div>
      </div>
    );
  }

  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone || '',
    joinedDate: user.createdAt,
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
    });
  };

  const handleSave = async () => {
    setIsUpdating(true);
    setUpdateError(null);

    try {
      const result = await updateUser(editData);

      if (result.success) {
        setIsEditing(false);
        console.log('Profile updated successfully:', result.message);
      } else {
        setUpdateError(result.message || 'Failed to update profile');
        console.error('Profile update failed:', result.message);
      }
    } catch (error) {
      setUpdateError('Network error. Please try again.');
      console.error('Error updating profile:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdateError(null);
    setEditData({
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = async () => {
    setPasswordError(null);
    setPasswordSuccess(null);

    // Validation
    if (!passwordData.currentPassword) {
      setPasswordError('Please enter your current password');
      return;
    }

    if (!passwordData.newPassword) {
      setPasswordError('Please enter a new password');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      setPasswordError('New password must be different from current password');
      return;
    }

    setIsUpdatingPassword(true);

    try {
      const accessToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('accessToken='))
        ?.split('=')[1];

      const response = await fetch('/api/auth/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setPasswordSuccess('Password changed successfully!');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        setTimeout(() => {
          setIsChangingPassword(false);
          setPasswordSuccess(null);
        }, 2000);
      } else {
        setPasswordError(result.message || 'Failed to change password');
      }
    } catch (error) {
      setPasswordError('Network error. Please try again.');
      console.error('Error changing password:', error);
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handlePasswordInputChange = (field: string, value: string) => {
    setPasswordData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear errors when user starts typing
    if (passwordError) {
      setPasswordError(null);
    }
  };

  const cancelPasswordChange = () => {
    setIsChangingPassword(false);
    setPasswordError(null);
    setPasswordSuccess(null);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="min-h-screen mt-20 bg-dark-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,142,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(18,255,142,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Profile</h1>
            <p className="text-secondary-text mt-2">
              Manage your account information
            </p>
          </div>

          {/* Profile Card */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-50" />
            <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl p-6">
              {/* User Info Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <span className="text-black text-xl font-bold">
                    {userData.firstName[0]}
                    {userData.lastName[0]}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <p className="text-secondary-text">
                    Member since{' '}
                    {new Date(userData.joinedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    Contact Information
                  </h3>
                  {!isEditing && (
                    <button
                      onClick={handleEdit}
                      className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/20 border border-primary/40 rounded-lg transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    {/* Editable Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={editData.firstName}
                          onChange={(e) =>
                            handleInputChange('firstName', e.target.value)
                          }
                          className="w-full px-3 py-3 bg-[#FFFFFF14] border border-transparent text-white placeholder-[#FFFFFF72] rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={editData.lastName}
                          onChange={(e) =>
                            handleInputChange('lastName', e.target.value)
                          }
                          className="w-full px-3 py-3 bg-[#FFFFFF14] border border-transparent text-white placeholder-[#FFFFFF72] rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                        className="w-full px-3 py-3 bg-[#FFFFFF14] border border-transparent text-white placeholder-[#FFFFFF72] rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={userData.email}
                        disabled
                        className="w-full px-3 py-3 bg-black/30 border border-white/20 text-secondary-text rounded-lg cursor-not-allowed"
                      />
                      <p className="text-xs text-secondary-text mt-1">
                        Email cannot be changed
                      </p>
                    </div>

                    {/* Error Message */}
                    {updateError && (
                      <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                        <p className="text-red-400 text-sm">{updateError}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        disabled={isUpdating}
                        className="flex items-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        <span>{isUpdating ? 'Saving...' : 'Save Changes'}</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={isUpdating}
                        className="flex items-center gap-2 px-4 py-3 border border-white/20 hover:bg-white/10 disabled:bg-white/5 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Display Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                        <User className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-secondary-text">
                            Full Name
                          </p>
                          <p className="text-white font-medium">
                            {userData.firstName} {userData.lastName}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-secondary-text">Phone</p>
                          <p className="text-white font-medium">
                            {userData.phone || 'Not provided'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-secondary-text">
                          Email Address
                        </p>
                        <p className="text-white font-medium">
                          {userData.email}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Password Change Card */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-50" />
            <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Password & Security
                </h3>
                {!isChangingPassword && (
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/20 border border-primary/40 rounded-lg transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Change Password</span>
                  </button>
                )}
              </div>

              {isChangingPassword ? (
                <div className="space-y-4">
                  {/* Current Password */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                          handlePasswordInputChange(
                            'currentPassword',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-3 pr-10 bg-[#FFFFFF14] border border-transparent text-white placeholder-[#FFFFFF72] rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text hover:text-white transition-colors"
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={passwordData.newPassword}
                        onChange={(e) =>
                          handlePasswordInputChange(
                            'newPassword',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-3 pr-10 bg-[#FFFFFF14] border border-transparent text-white placeholder-[#FFFFFF72] rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Enter new password (min. 8 characters)"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text hover:text-white transition-colors"
                      >
                        {showNewPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={passwordData.confirmPassword}
                        onChange={(e) =>
                          handlePasswordInputChange(
                            'confirmPassword',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-3 pr-10 bg-[#FFFFFF14] border border-transparent text-white placeholder-[#FFFFFF72] rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Confirm new password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error Message */}
                  {passwordError && (
                    <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <p className="text-red-400 text-sm">{passwordError}</p>
                    </div>
                  )}

                  {/* Success Message */}
                  {passwordSuccess && (
                    <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
                      <p className="text-green-400 text-sm">
                        {passwordSuccess}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handlePasswordChange}
                      disabled={isUpdatingPassword}
                      className="flex items-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>
                        {isUpdatingPassword ? 'Changing...' : 'Change Password'}
                      </span>
                    </button>
                    <button
                      onClick={cancelPasswordChange}
                      disabled={isUpdatingPassword}
                      className="flex items-center gap-2 px-4 py-3 border border-white/20 hover:bg-white/10 disabled:bg-white/5 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-secondary-text">
                  <p>Keep your account secure by using a strong password.</p>
                  <p className="text-sm mt-2">Last password change: Never</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dashboard Link Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Trading Dashboard
                </h3>
                <p className="text-secondary-text mb-4">
                  Access your trading dashboard to monitor positions and analyze
                  performance.
                </p>
                <Link href="https://dashboard.fundingoptimal.com">
                  <button className="inline-flex items-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg transition-colors">
                    <span>Launch Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Get Funded Link Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Get Funded
                </h3>
                <p className="text-secondary-text mb-4">
                  Apply for funding and take your trading to the next level.
                </p>
                <Link href="https://checkout.fundingoptimal.com/index.php/shop/">
                  <ActionOutlineButton className="w-full sm:w-auto">
                    Get Funded Now
                  </ActionOutlineButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
