import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export const metadata = {
  title: "Contact Abify - Get A/B Testing Support | Conversion Optimization Help",
  description: "Contact our A/B testing experts for conversion optimization support. Get help with split testing, conversion rate optimization, and marketing test alternatives.",
  keywords: "contact abify, a/b testing support, conversion optimization help, split testing assistance, conversion rate optimization agency contact",
  openGraph: {
    title: "Contact Abify - A/B Testing Support & Conversion Optimization Help",
    description: "Get expert help with A/B testing and conversion optimization. Contact our team for split testing support and marketing advice.",
    url: "https://abify.app/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Abify - A/B Testing Support",
    description: "Get expert help with A/B testing and conversion optimization.",
  },
  alternates: {
    canonical: "https://abify.app/contact",
  },
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactForm />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}