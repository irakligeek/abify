'use client';

import { useState } from 'react';
import AnimatedNumber from './AnimatedNumber';

export default function PerformanceSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Lightning-Fast Performance</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#333333]/70">
            Our ultra-lightweight script ensures your website stays fast while providing powerful A/B testing capabilities. See how we compare to the competition.
          </p>
        </div>

        {/* Performance Highlights - Minimal Side Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div 
            className="flex items-center gap-6 p-6 rounded-lg cursor-pointer"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-shrink-0">
              <AnimatedNumber 
                targetValue={6.2} 
                isHovered={hoveredCard === 1} 
                decimals={1} 
                className="text-[#4285F4]" 
                borderColor="#4285F4"
              />
            </div>
            <div className="flex-1 border-l-2 border-gray-200 pl-6">
              <div className="text-lg font-bold text-[#333333]">KB</div>
              <div className="text-sm font-semibold text-[#333333]/80 mb-1">Ultra-Small Script</div>
              <div className="text-xs text-[#333333]/60">25x smaller</div>
            </div>
          </div>
          
          <div 
            className="flex items-center gap-6 p-6 rounded-lg cursor-pointer"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-shrink-0">
              <AnimatedNumber 
                targetValue={20} 
                isHovered={hoveredCard === 2} 
                className="text-[#4fc47e]" 
                borderColor="#4fc47e"
              />
            </div>
            <div className="flex-1 border-l-2 border-gray-200 pl-6">
              <div className="text-lg font-bold text-[#333333]">ms</div>
              <div className="text-sm font-semibold text-[#333333]/80 mb-1">Script Loading</div>
              <div className="text-xs text-[#333333]/60">60x faster</div>
            </div>
          </div>
          
          <div 
            className="flex items-center gap-6 p-6 rounded-lg cursor-pointer"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-shrink-0">
              <AnimatedNumber 
                targetValue={80} 
                isHovered={hoveredCard === 3} 
                className="text-[#8b5cf6]" 
                borderColor="#8b5cf6"
              />
            </div>
            <div className="flex-1 border-l-2 border-gray-200 pl-6">
              <div className="text-lg font-bold text-[#333333]">ms</div>
              <div className="text-sm font-semibold text-[#333333]/80 mb-1">Variant Load</div>
              <div className="text-xs text-[#333333]/60">8x faster</div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-2xl p-8 overflow-hidden">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#333333]">Performance Comparison</h3>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-[#333333]">Platform</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#333333]">Script Size</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#333333]">Variant Load</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#333333]">Response Time</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#333333]">Total Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50 border-l-4 border-[#3179e8]">
                  <td className="py-4 px-6 font-semibold text-[#3179e8] flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Abify
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-[#4fc47e]">6.2 KB</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#4fc47e]">~80ms</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#4fc47e]">~120ms</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#4fc47e]">~200ms</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-[#333333]">Optimizely</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">50-150 KB</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~1.2s</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~600ms</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~1.8s</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-[#333333]">VWO</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">100-150 KB</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~950ms</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~700ms</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~1.65s</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-[#333333]">Convert.com</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">100-200 KB</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~1.23s</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~650ms</td>
                  <td className="py-4 px-4 text-center text-red-500 font-medium">~1.88s</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <div className="bg-blue-50 border-l-4 border-[#3179e8] p-4 rounded-r-lg">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-[#3179e8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <h4 className="font-semibold text-[#3179e8]">Abify</h4>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-[#333333]/70">Script Size:</span> <span className="font-semibold text-[#4fc47e]">6.2 KB</span></div>
                <div><span className="text-[#333333]/70">Variant:</span> <span className="font-semibold text-[#4fc47e]">~80ms</span></div>
                <div><span className="text-[#333333]/70">Response:</span> <span className="font-semibold text-[#4fc47e]">~120ms</span></div>
                <div><span className="text-[#333333]/70">Total:</span> <span className="font-semibold text-[#4fc47e]">~200ms</span></div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h4 className="font-semibold text-[#333333] mb-3">Optimizely</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-[#333333]/70">Script Size:</span> <span className="text-red-500 font-medium">50-150 KB</span></div>
                <div><span className="text-[#333333]/70">Variant:</span> <span className="text-red-500 font-medium">~1.2s</span></div>
                <div><span className="text-[#333333]/70">Response:</span> <span className="text-red-500 font-medium">~600ms</span></div>
                <div><span className="text-[#333333]/70">Total:</span> <span className="text-red-500 font-medium">~1.8s</span></div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h4 className="font-semibold text-[#333333] mb-3">VWO</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-[#333333]/70">Script Size:</span> <span className="text-red-500 font-medium">100-150 KB</span></div>
                <div><span className="text-[#333333]/70">Variant:</span> <span className="text-red-500 font-medium">~950ms</span></div>
                <div><span className="text-[#333333]/70">Response:</span> <span className="text-red-500 font-medium">~700ms</span></div>
                <div><span className="text-[#333333]/70">Total:</span> <span className="text-red-500 font-medium">~1.65s</span></div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h4 className="font-semibold text-[#333333] mb-3">Convert.com</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-[#333333]/70">Script Size:</span> <span className="text-red-500 font-medium">100-200 KB</span></div>
                <div><span className="text-[#333333]/70">Variant:</span> <span className="text-red-500 font-medium">~1.23s</span></div>
                <div><span className="text-[#333333]/70">Response:</span> <span className="text-red-500 font-medium">~650ms</span></div>
                <div><span className="text-[#333333]/70">Total:</span> <span className="text-red-500 font-medium">~1.88s</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}