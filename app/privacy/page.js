import Layout from '../components/Layout';

export const metadata = {
  title: "Privacy Policy - Abify | Data Protection & Privacy",
  description: "Learn how Abify protects your privacy and handles your data. Our privacy policy explains data collection, usage, third-party services, and your rights.",
  keywords: "privacy policy, data protection, abify privacy, data collection, user privacy, GDPR, data rights, privacy terms",
  openGraph: {
    title: "Privacy Policy - Abify A/B Testing Platform",
    description: "Abify's privacy policy - Learn how we collect, use, and protect your data.",
    url: "https://abify.app/privacy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy - Abify",
    description: "Learn how Abify protects your privacy and handles your data.",
  },
  alternates: {
    canonical: "https://abify.app/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold sm:text-4xl mb-4 text-[#333333]">Privacy Policy</h1>
            <p className="text-sm text-[#333333]/60">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <p className="text-[#333333]/80 leading-relaxed">
                  Abify ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.
                </p>
                <p className="text-[#333333]/80 leading-relaxed mt-4">
                  <strong>By using Abify, you agree to the practices described in this Privacy Policy.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">1. Information We Collect</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-[#333333] mb-3">A. Automatically Collected Data</h3>
                  <p className="text-[#333333]/80 leading-relaxed mb-3">
                    When you use Abify, we may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                    <li>Browser and device information</li>
                    <li>LocalStorage data (e.g., A/B test variant assignments)</li>
                    <li>Usage logs such as page views, timestamps, and error logs</li>
                    <li>User country information</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-[#333333] mb-3">B. Account Information</h3>
                  <p className="text-[#333333]/80 leading-relaxed mb-3">
                    When you create an account, we collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                    <li>Email address</li>
                    <li>Name</li>
                    <li>Password (securely hashed; Handled by AWS Cognito)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#333333] mb-3">C. Billing Information (via Stripe)</h3>
                  <p className="text-[#333333]/80 leading-relaxed mb-3">
                    All payment information is processed securely by Stripe.<br />
                    We do not store or have access to your full credit card details.
                  </p>
                  <p className="text-[#333333]/80 leading-relaxed mb-3">
                    Stripe may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Billing address</li>
                    <li>Last 4 digits of the card</li>
                    <li>Expiration date</li>
                  </ul>
                  <p className="text-[#333333]/80 leading-relaxed mt-3">
                    All handled under Stripe's own privacy policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">2. How We Use Your Information</h2>
                <p className="text-[#333333]/80 leading-relaxed mb-4">
                  We use the collected data to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>Provide and improve the Abify platform</li>
                  <li>Maintain account security</li>
                  <li>Operate A/B test assignments</li>
                  <li>Process subscriptions and payments</li>
                  <li>Communicate updates, billing notices, and service alerts</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">3. Analytics</h2>
                <p className="text-[#333333]/80 leading-relaxed mb-3">
                  We use Google Analytics to understand how users interact with our site.<br />
                  Google Analytics may collect information such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>Device type</li>
                  <li>Browser information</li>
                  <li>Usage patterns</li>
                  <li>IP address (in anonymized or full form depending on your GA settings)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">4. Third-Party Services</h2>
                <p className="text-[#333333]/80 leading-relaxed mb-4">
                  We use several third-party services to operate Abify:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li><strong>Stripe</strong> (billing and payments)</li>
                  <li><strong>AWS CloudFront</strong> (content delivery)</li>
                  <li><strong>AWS Lambda</strong> (server-side functions)</li>
                  <li><strong>AWS S3</strong> (asset hosting)</li>
                  <li><strong>AWS DynamoDB</strong> (data storage)</li>
                  <li><strong>AWS Cognito</strong> (authentication)</li>
                </ul>
                <p className="text-[#333333]/80 leading-relaxed mt-4">
                  These services may process minimal data needed to deliver Abify, but they do not control or sell your data.
                  We only use them as part of our platform infrastructure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">5. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li><strong>Account information:</strong> Deleted immediately when you delete your account.</li>
                  <li><strong>Variant assignment data:</strong> Retained for 1 year, unless you manually delete it from your dashboard.</li>
                  <li><strong>Usage logs:</strong> Retained as long as needed for diagnostics and service improvement.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">6. Your Rights</h2>
                <p className="text-[#333333]/80 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#333333]/80">
                  <li>Request deletion of your data</li>
                  <li>Request a copy of the data we have about you</li>
                  <li>Update or correct your account information</li>
                  <li>Delete your account, which removes all associated account data immediately</li>
                </ul>
                <p className="text-[#333333]/80 leading-relaxed mt-4">
                  To exercise these rights, contact us at <a href="mailto:hello@abify.app" className="text-[#4285F4] hover:underline">hello@abify.app</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">7. Data Security</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">8. Children's Privacy</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  Abify is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">9. International Data Transfers</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using Abify, you consent to this transfer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">11. Contact Information</h2>
                <p className="text-[#333333]/80 leading-relaxed">
                  For questions about this Privacy Policy, please contact us at <a href="mailto:hello@abify.app" className="text-[#4285F4] hover:underline">hello@abify.app</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}