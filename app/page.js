'use client';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import DashboardPreview from './components/DashboardPreview';
import WhySection from './components/WhySection';
import QuickSetup from './components/QuickSetup';
import PerformanceSection from './components/PerformanceSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <DashboardPreview />
      <WhySection />
      <QuickSetup />
      <PerformanceSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </Layout>
  );
}