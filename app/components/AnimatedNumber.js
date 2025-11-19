'use client';

import { useState, useEffect } from 'react';

export default function AnimatedNumber({ targetValue, isHovered, decimals = 0, className = "", borderColor = "#4285F4" }) {
  const [currentValue, setCurrentValue] = useState(targetValue);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setCurrentValue(targetValue);
      setProgress(0);
      return;
    }

    // Immediately reset to 0 on hover
    setCurrentValue(0);
    setProgress(0);
    
    // Then animate back up to target value
    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const stepProgress = currentStep / steps;
      // Ease out animation curve for smooth acceleration
      const easeOut = 1 - Math.pow(1 - stepProgress, 3);
      const newValue = targetValue * easeOut;
      
      setCurrentValue(newValue);
      setProgress(stepProgress);

      if (currentStep >= steps) {
        setCurrentValue(targetValue);
        setProgress(1);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetValue, isHovered]);

  const circumference = 2 * Math.PI * 36; // radius of 36 for a 80x80 circle
  const strokeDashoffset = circumference - (progress * circumference);

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Animated circular border */}
      <svg 
        className="absolute inset-0 w-20 h-20 -rotate-90 transition-opacity duration-200" 
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <circle
          cx="40"
          cy="40" 
          r="36"
          fill="none"
          stroke={borderColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-100 ease-out"
        />
      </svg>
      
      {/* Number */}
      <span className={`text-2xl font-black relative z-10 ${className}`}>
        {decimals > 0 ? currentValue.toFixed(decimals) : Math.round(currentValue)}
      </span>
    </div>
  );
}