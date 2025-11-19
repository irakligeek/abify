export default function QuickSetup() {
  return (
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
            <div className="rounded-xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/setup.png" 
                  alt="Installation Setup Process" 
                  className="w-full h-full object-cover transform scale-x-[-1]"
                />
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
                  <div className="text-sm text-[#333333]/70">Add our tiny pixel script to your website.</div>
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
                  <div className="text-sm text-[#333333]/70">Schedule your test, watch user events in real time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No-Code Visual Editor */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="rounded-xl">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/visual-editor-illustration.png" 
                  alt="Visual Editor Screenshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              No-Code Visual Editor
            </h3>
            <p className="text-[#333333]/70 mb-6 text-lg leading-relaxed">
              Create variants in seconds using our intuitive visual editor. Edit or add new elements to your page. For advanced users, we also provide manual CSS/JS editors for full control.
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
                <span className="text-[#333333]/80">Advanced CSS/JS editors available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Integrations */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/compatibility.png" 
                  alt="Platform Integration Logos" 
                  className="w-full h-full object-cover"
                />
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
        
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a 
            href="https://dashboard.abify.app/login"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#4285F4] text-white rounded-lg font-bold text-base hover:bg-[#4285F4]/90 transition-colors shadow-lg text-lg"
          >
            Try Abify for Free
          </a>
        </div>
      </div>
    </div>
  );
}