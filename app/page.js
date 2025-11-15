'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('test-results');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#F9F9F9]">
      {/* Video Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setDemoModalOpen(false)}>
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setDemoModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pb-[59.01639344262295%] h-0 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.loom.com/embed/7635ef5a78734c55985c08405fa60a23?hideEmbedTopBar=true" 
                style={{border: 'none'}}
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Abify Demo Video"
              />
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="w-full bg-white border-b border-solid border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Abify Logo" className="h-6 w-auto" />
            </div>
            
            <div className="hidden md:flex flex-1 justify-end items-center gap-8">
              <nav className="flex items-center gap-9">
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="#">
                  Home
                </a>
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="#">
                  Features
                </a>
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="#">
                  Pricing
                </a>
                <a className="text-[#333333]/80 text-sm font-medium leading-normal hover:text-[#4285F4] transition-colors" href="#">
                  Contact Us
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <a 
                  href="https://dashboard.abify.app/login"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4285F4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4285F4]/90 transition-colors"
                >
                  <span className="truncate">Go To Dashboard</span>
                </a>
              </div>
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
              <a className="text-[#333333]/80 text-sm font-medium" href="#">Home</a>
              <a className="text-[#333333]/80 text-sm font-medium" href="#">Features</a>
              <a className="text-[#333333]/80 text-sm font-medium" href="#">Pricing</a>
              <a className="text-[#333333]/80 text-sm font-medium" href="#">Contact Us</a>
              <a href="https://dashboard.abify.app/login" className="w-full text-left text-[#4285F4] text-sm font-bold">Go To Dashboard</a>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-4 md:px-10 md:py-6">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
              <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2 lg:gap-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#333333] text-4xl font-black leading-tight sm:text-5xl">
                    A/B Test Any Website, Fast, No-Code
                  </h1>
                  <h2 className="text-[#333333]/70 text-base font-normal leading-normal sm:text-lg">
                    A self-serve, fast, lightweight A/B testing tool for quick setup and faster results.
                  </h2>
                </div>
                <div className="flex flex-col items-center gap-2 lg:items-start">
                  <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start w-full sm:w-auto">
                    <a 
                      href="https://dashboard.abify.app/login"
                      className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#4285F4] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4285F4]/90 transition-colors"
                    >
                      <span className="truncate">Get Started for Free</span>
                    </a>
                    <button 
                      onClick={() => setDemoModalOpen(true)}
                      className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#F9F9F9] border border-gray-300 text-[#333333] text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
                    >
                      <span className="truncate">Watch a Demo</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#333333]/60">No Credit Card Required</p>
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

        {/* Dashboard Preview Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 md:py-4">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <div className="w-full">
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setActiveTab('test-results')}
                    className={`px-4 py-3 border-b-2 ${activeTab === 'test-results' ? 'border-[#4285F4] text-[#4285F4] font-semibold' : 'border-transparent text-[#333333]/60 hover:text-[#333333] hover:border-gray-300 font-medium'} text-sm transition-colors`}
                  >
                    Tests
                  </button>
                  <button 
                    onClick={() => setActiveTab('visual-editor')}
                    className={`px-4 py-3 border-b-2 ${activeTab === 'visual-editor' ? 'border-[#4285F4] text-[#4285F4] font-semibold' : 'border-transparent text-[#333333]/60 hover:text-[#333333] hover:border-gray-300 font-medium'} text-sm transition-colors`}
                  >
                    Visual Editor
                  </button>
                  <button 
                    onClick={() => setActiveTab('events')}
                    className={`px-4 py-3 border-b-2 ${activeTab === 'events' ? 'border-[#4285F4] text-[#4285F4] font-semibold' : 'border-transparent text-[#333333]/60 hover:text-[#333333] hover:border-gray-300 font-medium'} text-sm transition-colors`}
                  >
                    Events
                  </button>
                  <button 
                    onClick={() => setActiveTab('analytics')}
                    className={`px-4 py-3 border-b-2 ${activeTab === 'analytics' ? 'border-[#4285F4] text-[#4285F4] font-semibold' : 'border-transparent text-[#333333]/60 hover:text-[#333333] hover:border-gray-300 font-medium'} text-sm transition-colors`}
                  >
                    Analytics
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <div className="w-full bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
                  {/* macOS Window Header */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  
                  {/* Window Content */}
                  <div className="p-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      {activeTab === 'test-results' && (
                        <img 
                          src="/Tests.png" 
                          alt="Test Results Dashboard" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeTab === 'visual-editor' && (
                        <img 
                          src="/visual-editor.png" 
                          alt="Visual Editor Interface" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeTab === 'events' && (
                        <img 
                          src="/events.png" 
                          alt="Events Tracking" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeTab === 'analytics' && (
                        <img 
                          src="/analytics.png" 
                          alt="Analytics Dashboard" 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Abify Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Why Abify</h2>
              <p className="max-w-xl text-lg text-[#333333]/70">
                Need a fast, lightweight A/B test that takes minutes to set up and won't slow your site? Abify gives you simple, instant testing without the bloat.
              </p>
            </div>
            <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Ultra-Fast Loading</h3>
                  <p className="text-sm text-[#333333]/60">Smallest pixel script for ultra-fast loading</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">No Flicker</h3>
                  <p className="text-sm text-[#333333]/60">Variant application in under 100ms</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Easy Setup</h3>
                  <p className="text-sm text-[#333333]/60">Get started in under 10 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Visual & Code Editor</h3>
                  <p className="text-sm text-[#333333]/60">AI edits for no-code, plus CSS/JS</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Test Scheduling</h3>
                  <p className="text-sm text-[#333333]/60">Precise control for when tests run</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Real-Time Analytics</h3>
                  <p className="text-sm text-[#333333]/60">Insights by country, device, and more</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Unlimited Tests</h3>
                  <p className="text-sm text-[#333333]/60">Run experiments with multiple variants</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Email Alerts</h3>
                  <p className="text-sm text-[#333333]/60">Stay informed about test performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Security</h3>
                  <p className="text-sm text-[#333333]/60">Enterprise-grade security and compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Quick Setup Breakdown Section */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Quick Setup</h2>
              <p className="max-w-2xl mx-auto text-lg text-[#333333]/70">
                Get your A/B tests running in minutes, not hours. Here's how simple it really is.
              </p>
            </div>

            {/* Easy Setup */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-medium">Installation Illustration</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Lightning-Fast Setup
                </h3>
                <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
                  Install our lightweight script and start testing immediately. Our setup process is designed to get you running in under 5 minutes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4fc47e] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-[#333333]">Add Script Tag</div>
                      <div className="text-sm text-[#333333]/70">Copy & paste one line of code</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4fc47e] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-[#333333]">Configure Settings</div>
                      <div className="text-sm text-[#333333]/70">Set up your first test in minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4fc47e] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-[#333333]">Go Live</div>
                      <div className="text-sm text-[#333333]/70">Launch your test, watch user events in real time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* No-Code Visual Editor */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-medium">Visual Editor Screenshot</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  No-Code Visual Editor
                </h3>
                <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
                  Create variants in seconds using our intuitive visual editor. Edit, or add new elements on your page. 
                  For advanced users, we also provide manual CSS/JS editors for complete control.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">Create variants in under 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">No coding skills required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">Advanced CSS/JS editor available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Integrations */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-medium">Platform Integration Logos</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Works Everywhere
                </h3>
                <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
                  Seamlessly integrates with all major platforms and tools you already use. No complex configurations or compatibility issues.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">WordPress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">Shopify</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">Webflow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">Google Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">Squarespace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#333333]/80">And many more...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speed & Performance Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Lightning-Fast Performance</h2>
              <p className="max-w-3xl mx-auto text-lg text-[#333333]/70">
                Our ultra-lightweight script ensures your website stays fast while providing powerful A/B testing capabilities. See how we compare to the competition.
              </p>
            </div>

            {/* Performance Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl font-bold text-[#3179e8] mb-2">6.2 KB</div>
                <div className="text-sm font-semibold text-[#333333] mb-1">Ultra-Small Script</div>
                <div className="text-xs text-[#333333]/70">25x smaller than competitors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl font-bold text-[#4fc47e] mb-2">~20ms</div>
                <div className="text-sm font-semibold text-[#333333] mb-1">Script Loading</div>
                <div className="text-xs text-[#333333]/70">60x faster delivery</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-3xl font-bold text-[#8b5cf6] mb-2">~80ms</div>
                <div className="text-sm font-semibold text-[#333333] mb-1">Variant Load</div>
                <div className="text-xs text-[#333333]/70">8x faster load</div>
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

        {/* Pricing Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Pay for what matters</h2>
              <p className="max-w-3xl mx-auto text-lg text-[#333333]/70">
                Pay only when users convert, not for traffic. Abify's results-based pricing lets you optimize fast. Smaller sites can usually run all their tests on the free plan.
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1 flex items-center shadow-sm">
                <button 
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 text-sm font-medium transition-colors rounded-full ${
                    billingPeriod === 'yearly' 
                      ? 'bg-[#4285F4] text-white' 
                      : 'text-[#333333]/60 hover:text-[#333333]'
                  }`}
                >
                  Yearly <span className={billingPeriod === 'yearly' ? 'text-white' : 'text-[#4285F4]'}>-20%</span>
                </button>
                <button 
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 text-sm font-medium transition-colors rounded-full ${
                    billingPeriod === 'monthly' 
                      ? 'bg-[#4285F4] text-white' 
                      : 'text-[#333333]/60 hover:text-[#333333]'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">Free</h3>
                  <p className="text-[#333333]/70 text-sm mb-6">
                    Great for small projects and getting started with A/B testing.
                  </p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-[#333333]">$0</span>
                    <span className="text-[#333333]/60 ml-2">Per month</span>
                  </div>
                  <button className="w-full py-3 px-6 bg-[#4285F4] text-white rounded-lg font-semibold hover:bg-[#4285F4]/90 transition-colors">
                    Get Started
                  </button>
                  <div className="mt-8 space-y-3">
                    <p className="font-semibold text-[#333333] mb-4">Includes:</p>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Unlimited A/B tests</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">1 tested site</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm"><strong>1K</strong> Max conversions per month</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm"><strong>100</strong> AI visual edits per month</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Real-time analytics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Goal tracking & conversions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Test scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Dashboard & insights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Basic email support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#4285F4]">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#4285F4] text-white text-xs font-semibold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">Pro</h3>
                  <p className="text-[#333333]/70 text-sm mb-6">
                    Scale your testing capabilities for growing teams and websites.
                  </p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-[#333333]">
                      ${billingPeriod === 'yearly' ? '63' : '79'}
                    </span>
                    <span className="text-[#333333]/60 ml-2">
                      Per month{billingPeriod === 'yearly' && ', billed annually'}
                    </span>
                  </div>
                  <button className="w-full py-3 px-6 bg-[#4285F4] text-white rounded-lg font-semibold hover:bg-[#4285F4]/90 transition-colors">
                    Upgrade to Pro
                  </button>
                  <div className="mt-8 space-y-3">
                    <p className="font-semibold text-[#333333] mb-4">Includes:</p>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">All features from Free +</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">3 tested sites</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm"><strong>10K</strong> Max conversions per month</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm"><strong>1K</strong> AI visual edits per month</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Priority email support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Setup & integration assistance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">Enterprise</h3>
                  <p className="text-[#333333]/70 text-sm mb-6">
                    Advanced features and dedicated support for large organizations.
                  </p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-[#333333]">
                      ${billingPeriod === 'yearly' ? '479' : '599'}
                    </span>
                    <span className="text-[#333333]/60 ml-2">
                      Per month{billingPeriod === 'yearly' && ', billed annually'}
                    </span>
                  </div>
                  <button className="w-full py-3 px-6 bg-[#4285F4] text-white rounded-lg font-semibold hover:bg-[#4285F4]/90 transition-colors">
                    Upgrade to Enterprise
                  </button>
                  <div className="mt-8 space-y-3">
                    <p className="font-semibold text-[#333333] mb-4">Includes:</p>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">All features from Pro +</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">10 tested sites</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm"><strong>100K</strong> Max conversions per month</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm"><strong>10K</strong> AI visual edits per month</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Dedicated developer & integration support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Live chat support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4fc47e] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[#333333]/80 text-sm">Priority feature requests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="relative bg-[#4285F4] rounded-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="absolute -top-32 -left-20 w-96 h-96" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="120" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="100" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5"/>
                </svg>
                <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
                </svg>
                <svg className="absolute bottom-0 left-0 w-80 h-80" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="0.5"/>
                </svg>
                <svg className="absolute top-1/2 left-1/3 w-48 h-48 -translate-y-1/2" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="0.3"/>
                  <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="0.3"/>
                  <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="0.3"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative py-16 md:py-20 px-8 md:px-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ultra Fast A/B Testing Platform for Quick Results
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams who are optimizing their websites with confidence.
                </p>
                <a 
                  href="https://dashboard.abify.app/login"
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

        {/* FAQ Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-[#333333]/70">
                Everything you need to know about getting started with Abify
              </p>
            </div>
            
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                >
                  <span className="font-medium text-[#333333]">How quickly can I set up my first A/B test?</span>
                  <svg 
                    className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4 text-[#333333]/70">
                    You can set up your first A/B test in under 5 minutes! Simply add our lightweight script to your website, use our visual editor to create variants, and launch your test. No coding required for basic tests, though we also offer CSS/JS editors for advanced customization.
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                >
                  <span className="font-medium text-[#333333]">Will Abify slow down my website?</span>
                  <svg 
                    className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 text-[#333333]/70">
                    No! Abify is built for speed. Our script is only 8KB (20x smaller than competitors), loads in ~20ms, and applies variants in under 80ms. This means zero flicker and no noticeable impact on your site's performance. We're the fastest A/B testing tool on the market.
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                >
                  <span className="font-medium text-[#333333]">What's included in the free plan?</span>
                  <svg 
                    className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-4 text-[#333333]/70">
                    Our free plan includes unlimited A/B tests, 1 website, up to 1,000 conversions per month, 100 AI visual edits, real-time analytics, goal tracking, test scheduling, and basic email support. It's perfect for small projects and getting started with A/B testing.
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                >
                  <span className="font-medium text-[#333333]">Can I test on multiple pages or just one?</span>
                  <svg 
                    className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-4 text-[#333333]/70">
                    You can test on as many pages as you want! Create tests for individual pages, run site-wide experiments, or target specific page groups using URL targeting rules. Our platform supports complex multi-page funnels and cross-page experiments.
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                >
                  <span className="font-medium text-[#333333]">How does Abify compare to Google Optimize?</span>
                  <svg 
                    className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-4 text-[#333333]/70">
                    Since Google Optimize was sunset in 2023, Abify offers a modern, faster alternative. We're easier to set up, significantly faster (8KB vs 200KB+ scripts), offer both visual and code editors, and provide real-time analytics. Plus, our free tier is generous enough for most small to medium sites.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 items-center">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Abify Logo" className="h-8 w-auto brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm">
                Ultra-fast A/B testing platform for quick results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://dashboard.abify.app/login" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="https://dashboard.abify.app/login" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Abify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}