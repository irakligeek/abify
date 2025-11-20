import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Abify - A/B Testing Tool | Conversion Rate Optimization Platform",
  description: "Professional A/B testing platform for conversion optimization. Run split testing campaigns with our no-code A/B testing marketing platform. Boost conversion rates with data-driven test alternatives.",
  keywords: [
    "a/b testing",
    "A/B split testing", 
    "A/B testing marketing",
    "A/B testing software",
    "A/B tests",
    "conversion optimization",
    "conversion rate optimization",
    "conversion rate optimization service",
    "split testing",
    "test alternatives"
  ].join(", "),
  authors: [{ name: "Abify" }],
  creator: "Abify",
  publisher: "Abify",
  alternates: {
    canonical: "https://abify.app",
  },
  openGraph: {
    title: "Abify - Split Testing & Conversion Optimization Platform",
    description: "Professional A/B testing marketing platform for conversion rate optimization. Run A/B tests with our advanced split testing tool.",
    url: "https://abify.app",
    type: "website",
    locale: "en_US",
    siteName: "Abify",
    images: [
      {
        url: "https://abify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abify - A/B Testing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abifyapp",
    creator: "@abifyapp",
    title: "Abify - A/B Testing & Conversion Rate Optimization",
    description: "Run A/B tests and explore test alternatives with our conversion optimization platform. Professional A/B testing for marketing teams.",
    images: ["https://abify.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   yahoo: "your-yahoo-verification-code",
  // },
  category: "technology",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Abify",
    "description": "Professional A/B testing software for conversion optimization. Run split testing campaigns with our no-code A/B testing marketing platform.",
    "url": "https://abify.app",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Abify",
      "url": "https://abify.app",
      "logo": "https://abify.app/logo.png",
      "sameAs": [
        "https://twitter.com/abifyapp",
        "https://linkedin.com/company/abify"
      ]
    },
    "featureList": [
      "A/B Testing",
      "Split Testing",
      "Conversion Rate Optimization",
      "No-Code Testing",
      "Real-time Analytics",
      "Visual Editor"
    ],
    "screenshot": "https://abify.app/screenshot.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [{
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Chen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Abify transformed our conversion optimization process. We saw a 35% increase in conversions within the first month!"
    }]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q208LW3FKS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q208LW3FKS', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        
        {/* Abify A/B Testing Script */}
        <Script id="abify-flicker-control" strategy="beforeInteractive">
          {`
            document.documentElement.style.opacity="0";
            setTimeout(()=>{
              if("0"===document.documentElement.style.opacity){
                document.documentElement.style.transition="opacity 0.2s ease-in-out";
                document.documentElement.style.opacity="1";
                setTimeout(()=>document.documentElement.style.transition="",200);
              }
            },2e3);
          `}
        </Script>
        <Script
          src="https://cdn.abify.app/scripts/dev/abf.js"
          data-site-id="site-f43dAjsoa-NuIj8"
          strategy="beforeInteractive"
        />
        
        {children}
      </body>
    </html>
  );
}
