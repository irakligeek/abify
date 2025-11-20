export default function WhySection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
      title: "Ultra-Fast Loading",
      description: "Smallest pixel script for ultra-fast loading"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      ),
      title: "No Flicker",
      description: "Variant application in under 100ms"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Easy Setup",
      description: "Get started in under 10 minutes"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
        </svg>
      ),
      title: "Visual & Code Editor",
      description: "AI edits for no-code, plus CSS/JS"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Test Scheduling",
      description: "Precise control for when tests run"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
        </svg>
      ),
      title: "Real-Time Analytics",
      description: "Insights by country, device, and more"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Unlimited Tests",
      description: "Run experiments with multiple variants"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
        </svg>
      ),
      title: "Email Alerts",
      description: "Stay informed about test performance"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#4fc47e]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Security",
      description: "Enterprise-grade security and compliance"
    }
  ];

  return (
    <div id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Abify</h2>
            <p className="max-w-xl text-lg text-[#333333]/70">
              Need fast A/B testing tool that takes minutes to set up and won't slow your site? Abify gives you a lightweight conversion rate optimization platform for instant split testing without the bloat.
            </p>
          </div>
          <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="group relative flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden hover:border-[#4fc47e] hover:bg-gradient-to-br hover:from-[#4fc47e]/8 hover:to-[#4285F4]/8">
                {/* Animated border lines */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Top border */}
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4fc47e] to-[#4285F4] group-hover:w-full transition-all duration-700 delay-0"></div>
                  {/* Right border */}
                  <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-[#4285F4] to-[#4fc47e] group-hover:h-full transition-all duration-700 delay-200"></div>
                  {/* Bottom border */}
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-[#4fc47e] to-[#4285F4] group-hover:w-full transition-all duration-700 delay-400"></div>
                  {/* Left border */}
                  <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-[#4285F4] to-[#4fc47e] group-hover:h-full transition-all duration-700 delay-600"></div>
                </div>
                {/* Content wrapper with higher z-index */}
                <div className="relative z-10 flex items-start gap-3 w-full">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[#333333]/60">{feature.description}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}