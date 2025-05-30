'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';

const AccountSizeSlider = ({
  minValue = 10000,
  maxValue = 500000,
  initialValue = 100000,
  step = 1000,
  formatValue = (value: number) => `$${(value / 1000).toFixed(0)}k`,
  onChange = (newValue: number) => {},
  className = '',
  label = '',
}) => {
  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

  const handleSliderChange = useCallback(
    (e: { target: { value: string } }) => {
      const newValue = parseInt(e.target.value);
      setValue(newValue);
      onChange(newValue);
    },
    [onChange]
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
          min={minValue}
          max={maxValue}
          value={value}
          step={step}
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
