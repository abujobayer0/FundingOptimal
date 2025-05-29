import React from 'react';

export interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  gradientIntensity: 'light' | 'medium' | 'strong';
  index: number;
}
