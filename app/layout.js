import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Abify - A/B Testing Software | Conversion Rate Optimization Platform",
  description: "Professional A/B testing software for conversion optimization. Run split testing campaigns with our no-code A/B testing marketing platform. Boost conversion rates with data-driven test alternatives.",
  keywords: [
    "a/b testing",
    "A/B split testing", 
    "A/B testing marketing",
    "A/B testing software",
    "A/B tests",
    "conversion optimization",
    "conversion rate optimization",
    "conversion rate optimization agency",
    "split testing",
    "test alternatives"
  ].join(", "),
  openGraph: {
    title: "Abify - Split Testing Platform | Conversion Optimization Software",
    description: "Professional A/B testing marketing platform for conversion rate optimization. Run A/B tests with our advanced split testing software.",
    type: "website",
    locale: "en_US",
    siteName: "Abify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abify - A/B Tests Platform | Conversion Rate Optimization Agency",
    description: "Run A/B tests and explore test alternatives with our conversion optimization platform. Professional A/B testing for marketing teams.",
  },
  robots: {
    index: true,
    follow: true,
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
