'use client';

import { trackCTAClick, trackDemoVideoClick } from '../../lib/analytics';

export default function HeroSection({ setDemoModalOpen }) {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-10 md:py-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2 lg:gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#333333] text-4xl font-black leading-tight sm:text-5xl">
                A/B Test Any Website, <span className="inline-block text-white py-2 -skew-x-12 transform" style={{padding: '0 15px', backgroundColor: 'rgb(79, 196, 126)'}}>Fast</span>, No-Code
              </h1>
              <h2 className="text-[#333333]/70 text-base font-normal leading-normal sm:text-lg">
                A self-serve, lightweight split testing platform to test new ideas quickly.
              </h2>
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start w-full sm:w-auto sm:items-start">
                <div className="flex flex-col items-center gap-2">
                  <a 
                    href="https://dashboard.abify.app/login"
                    onClick={() => trackCTAClick('hero_get_started')}
                    className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#4285F4] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4285F4]/90 transition-colors"
                  >
                    <span className="truncate">Get Started for Free</span>
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
              
              {/* Feature Buttons */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 w-full">
                <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs text-[#333333] text-center font-medium">No-code A/B testing</span>
                </div>
                
                <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="text-xs text-[#333333] text-center font-medium">AI Visual Editor</span>
                </div>
                
                <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <span className="text-xs text-[#333333] text-center font-medium">Real-time analytics</span>
                </div>
                
                <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs text-[#333333] text-center font-medium">Fast, lightweight pixel</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl font-bold opacity-50">
                A/B
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}