'use client';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function ContactPage() {
  return (
    <Layout>
      <ContactForm />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}