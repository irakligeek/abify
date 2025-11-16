export default function CTASection() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#4285F4] rounded-3xl overflow-hidden">
          {/* Background Pattern - Speed Lines */}
          <div className="absolute inset-0">
            {/* Speed streaks from left */}
            <div className="absolute left-0 top-1/4 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            <div className="absolute left-0 top-1/3 w-2/5 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-15"></div>
            <div className="absolute left-0 top-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-25"></div>
            <div className="absolute left-0 top-2/3 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
            <div className="absolute left-0 bottom-1/4 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            
            {/* Speed streaks from right */}
            <div className="absolute right-0 top-1/5 w-2/5 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent opacity-15"></div>
            <div className="absolute right-0 top-2/5 w-1/3 h-[2px] bg-gradient-to-l from-transparent via-white to-transparent opacity-20"></div>
            <div className="absolute right-0 bottom-1/3 w-1/2 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent opacity-15"></div>
            
            {/* Diagonal speed lines */}
            <div className="absolute -left-10 top-0 w-40 h-[1px] bg-gradient-to-r from-transparent to-white opacity-10 transform rotate-12"></div>
            <div className="absolute -right-10 bottom-0 w-60 h-[2px] bg-gradient-to-l from-transparent to-white opacity-15 transform -rotate-12"></div>
          </div>
          
          {/* Content */}
          <div className="relative py-16 md:py-20 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Conversion Rate Optimization Journey
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of teams using our A/B testing marketing platform to boost conversions.
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
  );
}