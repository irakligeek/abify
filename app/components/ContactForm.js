'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const payload = {
        type: "contact",
        name: data.name,
        email: data.email,
        message: data.message,
        subject: "Landing Page Inquiry - Abify",
        company: data.company || undefined
      };

      const response = await fetch('https://api.abify.app/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl mb-4 text-[#333333]">Get in Touch</h1>
          <p className="text-lg text-[#333333]/70">
            Have questions about Abify? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#333333] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-[#333333] mb-2">
                Company <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                {...register('company')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-colors"
                placeholder="Your company name"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message', { 
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell us about your A/B testing needs, questions, or how we can help..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Status */}
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <div className="flex items-center">
                  {submitStatus.type === 'success' ? (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                  )}
                  {submitStatus.message}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-lg font-bold text-base transition-colors shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-[#4285F4] text-white hover:bg-[#4285F4]/90'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}