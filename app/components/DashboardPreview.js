'use client';

import { useState } from 'react';

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('visual-editor');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
      <h2 className="sr-only">Dashboard Preview</h2>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div className="w-full">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('visual-editor')}
                className={`px-4 py-3 border-b-2 ${activeTab === 'visual-editor' ? 'border-[#4285F4] text-[#4285F4] font-semibold' : 'border-transparent text-[#333333]/60 hover:text-[#333333] hover:border-gray-300 font-medium'} text-sm transition-colors`}
              >
                Visual Editor
              </button>
              <button 
                onClick={() => setActiveTab('test-results')}
                className={`px-4 py-3 border-b-2 ${activeTab === 'test-results' ? 'border-[#4285F4] text-[#4285F4] font-semibold' : 'border-transparent text-[#333333]/60 hover:text-[#333333] hover:border-gray-300 font-medium'} text-sm transition-colors`}
              >
                Tests
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
              {/* macOS Window Header - Hidden for visual editor */}
              {activeTab !== 'visual-editor' && (
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              )}
              
              {/* Window Content */}
              {activeTab === 'visual-editor' ? (
                // No padding or constraints for visual editor embed
                <div style={{position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', maxHeight: '80svh', width: '100%', aspectRatio: '1.9585492227979275', padding: '0 0 40px 0'}}>
                  <iframe 
                    src="https://app.supademo.com/embed/cmi1ya4xe0x1wqnb9dhfik0cy?embed_v=2&utm_source=embed" 
                    loading="lazy" 
                    title="Edit with visual editor - no code" 
                    allow="clipboard-write" 
                    frameBorder="0" 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    allowFullScreen 
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                  />
                </div>
              ) : (
                // Regular content with padding for other tabs
                <div className="p-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    {activeTab === 'test-results' && (
                      <img 
                        src="/Tests.png" 
                        alt="A/B testing results dashboard showing conversion optimization metrics" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    {activeTab === 'events' && (
                      <img 
                        src="/events.png" 
                        alt="Conversion tracking events for A/B tests" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    {activeTab === 'analytics' && (
                      <img 
                        src="/analytics.png" 
                        alt="Conversion rate optimization analytics dashboard" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}