'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('yearly');

  return (
    <div id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Pay For What Matters</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#333333]/70">
            Pay only when users convert, not for traffic. Abify's results-based pricing lets you optimize fast. Smaller sites can usually run their tests on our free plan.
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
              <a href="https://dashboard.abify.app/" className="block w-full py-3 px-6 bg-[#4285F4] text-white rounded-lg font-semibold hover:bg-[#4285F4]/90 transition-colors text-center">
                Get Started
              </a>
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
              <a href="https://dashboard.abify.app/" className="block w-full py-3 px-6 bg-[#4285F4] text-white rounded-lg font-semibold hover:bg-[#4285F4]/90 transition-colors text-center">
                Upgrade to Pro
              </a>
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
              <a href="https://dashboard.abify.app/" className="block w-full py-3 px-6 bg-[#4285F4] text-white rounded-lg font-semibold hover:bg-[#4285F4]/90 transition-colors text-center">
                Upgrade to Enterprise
              </a>
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
  );
}