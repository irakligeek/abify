'use client';

import { useState } from 'react';

export default function SetupStep({ stepNumber, title, description, isCompleted = false }) {
  const [completed, setCompleted] = useState(isCompleted);

  const handleClick = () => {
    setCompleted(!completed);
  };

  return (
    <div 
      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-gray-200 hover:bg-white/80 ${
        completed ? 'bg-white shadow-md border-gray-300' : 'hover:bg-white/40'
      }`}
      onClick={handleClick}
    >
      <div className={`flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm transition-colors duration-300 ${
        completed ? 'bg-green-500 text-white' : 'bg-[#161618] text-white'
      }`}>
        {completed ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        ) : (
          stepNumber
        )}
      </div>
      <div className="flex-grow">
        <div className={`font-semibold transition-colors duration-300 ${
          completed ? 'text-green-700' : 'text-[#333333]'
        }`}>
          {title}
        </div>
        <div className={`text-sm transition-colors duration-300 ${
          completed ? 'text-green-600' : 'text-[#333333]/70'
        }`}>
          {description}
        </div>
      </div>
      {completed && (
        <div className="flex-shrink-0 ml-auto">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}