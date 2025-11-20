'use client';

import { trackCTAClick, trackDemoVideoClick } from '../../lib/analytics';
import GridBackground from './GridBackground';

export default function HeroSection({ setDemoModalOpen }) {
  return (
    <div className="w-full relative">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-4 lg:px-10 lg:py-6 relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2 lg:gap-8 relative z-10">
            <div className="flex flex-col gap-4 max-w-[600px] mx-auto lg:max-w-none lg:mx-0">
              <h1 className="abify-hero-headline relative z-10 text-[#333333] text-4xl font-black leading-tight sm:text-5xl">
                A/B Test Any Website, Fast, No-Code
              </h1>
              <h2 className="abify-hero-subheadline text-[#333333]/70 text-base font-normal leading-normal sm:text-lg">
                A self-serve, lightweight split testing platform to test new ideas quickly.
              </h2>
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start relative z-10">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start w-full sm:w-auto sm:items-start">
                <div className="flex flex-col items-center gap-2">
                  <a 
                    href="https://dashboard.abify.app/login"
                    onClick={() => trackCTAClick('hero_get_started')}
                    className="abify-cta abify-cta-hero group relative overflow-hidden flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-[#4285F4] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300"
                  >
                    {/* Animated underline - slides left to right */}
                    <span className="absolute bottom-1 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
                    <span className="truncate relative z-10 group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-300">Get Started for Free</span>
                  </a>
                  <p className="text-xs text-[#333333]/60 text-center">No Credit Card Required</p>
                </div>
                <a 
                  href="#"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    trackDemoVideoClick();
                    setDemoModalOpen(true); 
                  }}
                  className="text-[#4285F4] text-base font-medium underline hover:text-[#4285F4]/80 transition-colors sm:mt-[10px]"
                >
                  Watch a Demo
                </a>
              </div>
              
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-4/5 max-w-[450px] mx-auto aspect-square">
              <img 
                src="/ab-hero.png" 
                alt="Abify A/B testing platform dashboard showing conversion optimization tools and split testing interface for websites" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add displayName for reliable component identification
HeroSection.displayName = 'HeroSection';