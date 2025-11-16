'use client';

import { trackCTAClick } from '../../lib/analytics';

export default function CTASection() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#4285F4] rounded-3xl overflow-hidden">
          {/* Background Pattern - Technical Grid */}
          <div className="absolute inset-0">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200/8 via-transparent to-purple-400/6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/4 via-transparent to-purple-500/3"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}></div>
            
            {/* Circuit-like connectors */}
            <div className="absolute top-16 left-16 w-20 h-0.5 bg-white/10"></div>
            <div className="absolute top-16 left-36 w-0.5 h-16 bg-white/10"></div>
            <div className="absolute top-32 left-36 w-24 h-0.5 bg-white/10"></div>
            <div className="absolute top-32 left-60 w-0.5 h-8 bg-white/10"></div>
            
            <div className="absolute bottom-20 right-20 w-16 h-0.5 bg-white/8"></div>
            <div className="absolute bottom-20 right-20 w-0.5 h-20 bg-white/8"></div>
            <div className="absolute bottom-40 right-4 w-16 h-0.5 bg-white/8"></div>
            <div className="absolute bottom-40 right-4 w-0.5 h-12 bg-white/8"></div>
            
            <div className="absolute top-1/3 left-1/2 w-18 h-0.5 bg-white/9"></div>
            <div className="absolute top-1/3 left-1/2 w-0.5 h-12 bg-white/9"></div>
            <div className="absolute top-1/3 right-1/3 w-22 h-0.5 bg-white/7"></div>
            <div className="absolute top-1/3 right-[20%] w-0.5 h-10 bg-white/7"></div>
            
            <div className="absolute bottom-1/4 left-1/4 w-14 h-0.5 bg-white/11"></div>
            <div className="absolute bottom-1/4 left-1/4 w-0.5 h-18 bg-white/11"></div>
            <div className="absolute bottom-1/4 left-32 w-20 h-0.5 bg-white/11"></div>
            <div className="absolute bottom-[40%] left-52 w-0.5 h-14 bg-white/11"></div>
            
            
            {/* Subtle corner gradients */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/3 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/4 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative py-16 md:py-20 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Conversion Rate Optimization Journey
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of teams using our A/B testing marketing platform to boost conversions.
            </p>
            <a 
              href="https://dashboard.abify.app"
              onClick={() => trackCTAClick('main_cta_get_started')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#4285F4] bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Now
            </a>
            <p className="text-sm text-white/80 mt-4">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}