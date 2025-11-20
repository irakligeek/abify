'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Clone children and pass setDemoModalOpen to HeroSection
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      // Pass setDemoModalOpen to the first child (HeroSection) or any child with displayName 'HeroSection'
      if (index === 0 || child.type?.displayName === 'HeroSection') {
        return React.cloneElement(child, { setDemoModalOpen });
      }
    }
    return child;
  });

  return (
    <div id="top" className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#ffffff]">
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
      
      <Header setDemoModalOpen={setDemoModalOpen} />
      
      <main className="flex-grow w-full">
        {childrenWithProps}
      </main>
      
      <Footer />
    </div>
  );
}