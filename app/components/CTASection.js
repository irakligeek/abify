'use client';

import { trackCTAClick } from '../../lib/analytics';
import GridBackground from './GridBackground';

export default function CTASection() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#4285F4] rounded-3xl overflow-hidden">
          <GridBackground isSubtle={true} />
          
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
              className="group relative z-10 overflow-hidden inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-[#4285F4] bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              {/* Animated underline - slides left to right */}
              <span className="absolute bottom-2 left-0 h-1 w-0 bg-[#4285F4] group-hover:w-full transition-all duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-300">Get Started Now</span>
            </a>
            <p className="text-sm text-white/80 mt-2">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}