import { useState } from 'react';
import SetupStep from './SetupStep';
import LogoSlideshow from './LogoSlideshow';

export default function QuickSetup() {
  const [clickedFeatures, setClickedFeatures] = useState([]);

  const toggleFeature = (index) => {
    setClickedFeatures(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  return (
    <div className="bg-white py-16 md:py-24">
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
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/setup.png" 
                alt="Simple 5-minute A/B testing setup process showing script installation and configuration steps for website optimization" 
                className="w-full h-full object-cover transform scale-x-[-1]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              Lightning-Fast Setup
            </h3>
            <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
              Install our lightweight script and start testing immediately. Our setup process is designed to get you running in under 5 minutes.
            </p>
            <div className="space-y-2">
              <SetupStep 
                stepNumber="1"
                title="Add Script Tag"
                description="Add our tiny pixel script to your website."
              />
              <SetupStep 
                stepNumber="2"
                title="Configure Settings"
                description="Set up your first test in minutes"
              />
              <SetupStep 
                stepNumber="3"
                title="Go Live"
                description="Schedule your test, watch user events in real time"
              />
            </div>
          </div>
        </div>

        {/* No-Code Visual Editor */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/visual-editor-illustration.png" 
                alt="No-code visual editor interface for creating A/B test variants with drag-and-drop functionality and CSS/JS editing capabilities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              No-Code Visual Editor
            </h3>
            <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
              Create variants in seconds using our intuitive visual editor. Edit or add new elements to your page. For advanced users, we also provide manual CSS/JS editors for full control.
            </p>
            <div className="space-y-2">
              <div 
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border-b ${
                  clickedFeatures.includes(0) 
                    ? 'bg-white shadow-md border-b-transparent' 
                    : 'border-b-transparent hover:border-b-gray-200 hover:bg-white/60'
                }`}
                onClick={() => toggleFeature(0)}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  clickedFeatures.includes(0) ? 'text-[#4fc47e]' : 'text-[#161618]'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className={`transition-colors duration-300 ${
                  clickedFeatures.includes(0) ? 'text-green-600' : 'text-[#333333]/80'
                }`}>Create variants in under 5 minutes</span>
              </div>
              <div 
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border-b ${
                  clickedFeatures.includes(1) 
                    ? 'bg-white shadow-md border-b-transparent' 
                    : 'border-b-transparent hover:border-b-gray-200 hover:bg-white/60'
                }`}
                onClick={() => toggleFeature(1)}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  clickedFeatures.includes(1) ? 'text-[#4fc47e]' : 'text-[#161618]'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className={`transition-colors duration-300 ${
                  clickedFeatures.includes(1) ? 'text-green-600' : 'text-[#333333]/80'
                }`}>No coding skills required</span>
              </div>
              <div 
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border-b ${
                  clickedFeatures.includes(2) 
                    ? 'bg-white shadow-md border-b-transparent' 
                    : 'border-b-transparent hover:border-b-gray-200 hover:bg-white/60'
                }`}
                onClick={() => toggleFeature(2)}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  clickedFeatures.includes(2) ? 'text-[#4fc47e]' : 'text-[#161618]'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className={`transition-colors duration-300 ${
                  clickedFeatures.includes(2) ? 'text-green-600' : 'text-[#333333]/80'
                }`}>Advanced CSS/JS editors available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Integrations */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/compatibility.png" 
                alt="Abify A/B testing platform compatibility with WordPress, Shopify, Webflow, Google Analytics and other popular website platforms" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-5/12">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              Works Everywhere
            </h3>
            <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
              Seamlessly integrates with all major platforms and tools you already use. No complex configurations or compatibility issues.
            </p>
            <LogoSlideshow />
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a 
            href="https://dashboard.abify.app/login"
            className="abify-cta abify-cta-quicksetup group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-[#4285F4] text-white rounded-lg font-bold text-base hover:bg-[#4285F4]/90 transition-all duration-300 shadow-lg"
          >
            {/* Animated underline - slides left to right */}
            <span className="absolute bottom-1 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-300">Start Testing</span>
          </a>
        </div>
      </div>
    </div>
  );
}