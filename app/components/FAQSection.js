'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
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
              <span className="font-medium text-[#333333]">How much does A/B testing cost with Abify?</span>
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
                Abify uses a conversion based pricing model. You only pay for what is meaningful for you. Free accounts include 1,000 conversions per month and come with all the features, so you can enjoy Abify totally free for smaller websites. Pro accounts get 10,000 conversions and Enterprise accounts include 100,000 conversions.
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
                No. Abify is designed to be very lightweight and to minimally impact your site's performance. Its script is only 6 KB compressed and loads very quickly from edge servers worldwide. With asynchronous loading and efficient logic, Abify never blocks rendering or causes flicker. Once the variant is applied, all other events such as tracking and goals are sent to the server asynchronously, so there is no impact on site load whatsoever.
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            >
              <span className="font-medium text-[#333333]">Does Abify run on SPA websites?</span>
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
                Yes. Abify is designed to run on any type of website. For SPAs, it monitors URL changes for page view goals and listens to other DOM changes to ensure accurate tracking and variant application.
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
            >
              <span className="font-medium text-[#333333]">How does split testing assign users to test alternatives?</span>
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
                Our A/B testing tool uses industry-standard deterministic hash-based assignment with SHA-256. This ensures each user consistently sees the same variant while maintaining a balanced distribution across your visitors. You can also control traffic allocation for each variant, giving you full flexibility. This method is used by leading conversion optimization agencies and enterprise split testing platforms.
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
            >
              <span className="font-medium text-[#333333]">How does Abify ensure test results are statistically reliable?</span>
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
                Abify uses standard two-tailed z-tests with real p-value calculations (p &lt; 0.05 for 95% confidence). It enforces minimum sample sizes, calculates proper confidence intervals, and follows the same methodology used by industry-standard A/B testing platforms. This ensures your results are scientifically reliable, not just estimates.
              </div>
            )}
          </div>

          {/* FAQ Item 6 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
            >
              <span className="font-medium text-[#333333]">Can I use Abify to run server-side tests?</span>
              <svg 
                className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 6 ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFaq === 6 && (
              <div className="px-6 pb-4 text-[#333333]/70">
                No. Abify is a client-side testing platform with a tiny script designed for result-oriented tests that deliver quick insights. If you're looking for VWO alternatives or other major A/B testing platform alternatives for fast, quick split testing needs, Abify is the right choice for you.
              </div>
            )}
          </div>

          {/* FAQ Item 7 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
            >
              <span className="font-medium text-[#333333]">Can I run Abify on WordPress, Webflow, Wix etc?</span>
              <svg 
                className={`w-5 h-5 text-[#333333]/60 transition-transform ${openFaq === 7 ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFaq === 7 && (
              <div className="px-6 pb-4 text-[#333333]/70">
                Yes, Abify works on all major CMS platforms.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}