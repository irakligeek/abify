import Layout from '../components/Layout';

export const metadata = {
  title: "Terms of Service - Abify | A/B Testing Platform Terms & Conditions",
  description: "Read Abify's terms of service and conditions for using our A/B testing platform. Learn about subscriptions, billing, cancellations, and user responsibilities.",
  keywords: "terms of service, terms and conditions, abify terms, a/b testing platform terms, subscription terms, billing terms",
  openGraph: {
    title: "Terms of Service - Abify A/B Testing Platform",
    description: "Terms of service and conditions for using Abify's A/B testing platform.",
    url: "https://abify.app/terms",
    type: "website",
  },
  twitter: {
    title: "Terms of Service - Abify",
    description: "Terms of service for Abify's A/B testing platform.",
  },
  alternates: {
    canonical: "https://abify.app/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16 md:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold sm:text-4xl mb-4 text-[#333333]">Terms of Service</h1>
            <p className="text-sm text-[#333333]/60">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <p className="text-[#333333]/80 leading-relaxed">
                  These Terms & Conditions ("Terms") govern your use of Abify ("we," "us," or "our"), a service operated by a sole proprietor under the business name Abify, located in Connecticut, USA.
                </p>
                <p className="text-[#333333]/80 leading-relaxed mt-4">
                  <strong>By using Abify, you agree to these Terms.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">1. Eligibility</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  You must be at least 18 years old to use Abify and capable of entering a legally binding agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">2. Services Provided</h2>
                <p className="text-[#333333]/80 leading-relaxed mb-4">
                  Abify offers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>A lightweight client-side A/B testing platform</li>
                  <li>A free-forever plan for small websites</li>
                  <li>Paid monthly and yearly subscription plans</li>
                </ul>
                <p className="text-[#333333]/80 leading-relaxed mt-4">
                  All features, pricing, and plan details are listed on abify.app and may change over time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">3. Accounts</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>You are responsible for maintaining the confidentiality of your account.</li>
                  <li>You are responsible for all activity performed under your account.</li>
                  <li>You may not share, sell, or transfer your account to others.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">4. Subscription Billing</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>Abify offers monthly and yearly subscription plans.</li>
                  <li>Yearly plans are billed upfront at a discounted rate.</li>
                  <li>Payments are processed electronically through Stripe.</li>
                  <li>By subscribing, you authorize Abify and Stripe to charge your chosen payment method on a recurring basis until canceled.</li>
                  <li>If a payment fails, we may suspend access until the payment issue is resolved.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">5. Cancellations</h2>
                <p className="text-[#333333]/80 leading-relaxed mb-4">
                  You may cancel your subscription at any time by either:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>Using your dashboard: <a href="https://dashboard.abify.app/account" className="text-[#4285F4] hover:underline">abify.app/account</a>, or</li>
                  <li>Contacting us at <a href="mailto:hello@abify.app" className="text-[#4285F4] hover:underline">hello@abify.app</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">6. Data and Privacy</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>We collect and process data necessary to provide our A/B testing services.</li>
                  <li>Your data is handled in accordance with our Privacy Policy.</li>
                  <li>You retain ownership of your data and may request deletion at any time.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">7. Limitation of Liability</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  Abify is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">8. Changes to Terms</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  We may update these Terms at any time. Continued use of Abify after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">9. Contact Information</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  For questions about these Terms, please contact us at <a href="mailto:hello@abify.app" className="text-[#4285F4] hover:underline">hello@abify.app</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}