'use client';

import { useState } from 'react';
import { trackCTAClick } from '../../lib/analytics';

export default function Header({ setDemoModalOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white border-b border-solid border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center justify-between whitespace-nowrap">
            {/* Logo - Left */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="Abify Logo" className="h-7 w-auto" />
              </a>
            </div>
            
            {/* Navigation - Center */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <nav className="flex items-center gap-9">
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="/">
                  Home
                </a>
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="#features">
                  Features
                </a>
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="#pricing">
                  Pricing
                </a>
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="/contact">
                  Contact Us
                </a>
              </nav>
            </div>
            
            {/* Dashboard Button - Right */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="https://dashboard.abify.app/login"
                onClick={() => trackCTAClick('header_dashboard')}
                className="abify-cta abify-cta-header flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4285F4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4285F4]/90 transition-colors"
              >
                <span className="truncate">Go To Dashboard</span>
              </a>
            </div>
            
            <div className="md:hidden">
              <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className="w-6 h-6 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex flex-col gap-4">
              <a className="text-[#333333]/80 text-sm font-medium" href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a className="text-[#333333]/80 text-sm font-medium" href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a className="text-[#333333]/80 text-sm font-medium" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a className="text-[#333333]/80 text-sm font-medium" href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              <a 
                href="https://dashboard.abify.app/login" 
                onClick={() => trackCTAClick('mobile_header_dashboard')}
                className="abify-cta abify-cta-header-mobile w-full text-left text-[#4285F4] text-sm font-bold"
              >
                Go To Dashboard
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}