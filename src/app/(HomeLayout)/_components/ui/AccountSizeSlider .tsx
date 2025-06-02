'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';

interface AccountSizeSliderProps {
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  step?: number;
  formatValue?: (value: number) => string;
  onChange?: (newValue: number) => void;
  className?: string;
  label?: string;
  discreteValues?: number[];
}

const AccountSizeSlider = ({
  minValue = 10000,
  maxValue = 500000,
  initialValue = 100000,
  step = 1000,
  formatValue = (value: number) => `$${(value / 1000).toFixed(0)}k`,
  onChange = (newValue: number) => {},
  className = '',
  label = '',
  discreteValues = [],
}: AccountSizeSliderProps) => {
  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);

  // Use discrete values if provided, otherwise use continuous range
  const isDiscrete = discreteValues.length > 0;
  const actualMinValue = isDiscrete ? 0 : minValue;
  const actualMaxValue = isDiscrete ? discreteValues.length - 1 : maxValue;

  // Convert slider position to actual value
  const getActualValue = (sliderValue: number) => {
    if (isDiscrete) {
      const index = Math.round(sliderValue);
      return discreteValues[
        Math.min(Math.max(index, 0), discreteValues.length - 1)
      ];
    }
    return sliderValue;
  };

  // Convert actual value to slider position
  const getSliderValue = (actualValue: number) => {
    if (isDiscrete) {
      const index = discreteValues.findIndex((val) => val === actualValue);
      return index >= 0 ? index : 0;
    }
    return actualValue;
  };

  const currentSliderValue = getSliderValue(value);
  const percentage =
    ((currentSliderValue - actualMinValue) /
      (actualMaxValue - actualMinValue)) *
    100;

  const handleSliderChange = useCallback(
    (e: { target: { value: string } }) => {
      const sliderValue = parseInt(e.target.value);
      const newActualValue = getActualValue(sliderValue);
      setValue(newActualValue);
      onChange(newActualValue);
    },
    [onChange, isDiscrete, discreteValues]
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-6">
        {label && <h2 className="text-sm">{label}</h2>}
        <div className="block text-sm">{formatValue(value)}</div>
      </div>

      <div className="relative">
        {/* Track */}
        <div className="w-full h-[3px] bg-primary/20 rounded-full relative overflow-hidden">
          {/* Progress fill */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary rounded-full transition-all duration-150 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Thumb */}
        <div
          className={`absolute top-1/2 w-8 h-2.5 bg-primary rounded-full transform -translate-y-1/2 -translate-x-1/2 transition-all duration-150 ${
            isDragging ? 'scale-110 shadow-xl' : 'hover:scale-105'
          }`}
          style={{ left: `${percentage}%` }}
        />

        <input
          type="range"
          min={actualMinValue}
          max={actualMaxValue}
          value={currentSliderValue}
          step={isDiscrete ? 1 : step}
          onChange={handleSliderChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>
    </div>
  );
};

export default AccountSizeSlider;
