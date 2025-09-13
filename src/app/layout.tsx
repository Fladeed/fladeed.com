import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../contexts/ThemeContext';
import { StructuredData } from '../components/StructuredData';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fladeed.com'),
  title: {
    default: "Fladeed - Full-Stack Software Development Agency | Custom Applications & Solutions",
    template: "%s | Fladeed - Software Development Agency"
  },
  description: "Expert software development agency providing full-stack solutions: web development, mobile apps, desktop software, cloud solutions, and enterprise systems. Serving businesses worldwide with cutting-edge technology.",
  keywords: [
    // Global SEO keywords (primary focus)
    "software development agency",
    "full stack developers",
    "custom software solutions",
    "web development",
    "mobile app development",
    "desktop application development",
    "cloud solutions",
    "enterprise software",
    "api development",
    "database design",
    "system architecture",
    "devops services",
    "software consulting",
    "react developers",
    "nextjs development",
    "nodejs development",
    "python development",
    "java development",
    "typescript experts",
    "ui ux design",
    "frontend development",
    "backend development",
    "microservices",
    "modern web technologies",
    "agile development",
    "software maintenance",
    // Local SEO keywords (secondary, for local search)
    "software development casablanca",
    "développement logiciel maroc",
    "web development morocco",
    "mobile app development morocco"
  ].join(", "),
  authors: [{ name: "Fladeed Development Agency", url: "https://fladeed.com" }],
  creator: "Fladeed",
  publisher: "Fladeed",
  category: "Technology",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'ar_MA'],
    url: 'https://fladeed.com',
    siteName: 'Fladeed',
    title: 'Fladeed - Full-Stack Software Development Agency',
    description: 'Professional software development services worldwide. Full-stack solutions including web, mobile, desktop, and cloud applications. Expert developers using cutting-edge technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fladeed - Expert Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fladeed - Full-Stack Software Development Agency',
    description: 'Expert software developers creating comprehensive solutions worldwide. Web, mobile, desktop, and cloud applications using cutting-edge technologies.',
    images: ['/og-image.png'],
    creator: '@fladeed',
    site: '@fladeed',
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon", 
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "MA-06",
    "geo.placename": "Casablanca",
    "geo.position": "33.5731;-7.5898",
    "ICBM": "33.5731, -7.5898",
    "business:contact_data:locality": "Casablanca",
    "business:contact_data:region": "Casablanca-Settat",
    "business:contact_data:country_name": "Morocco",
    "business:contact_data:phone_number": "+212521168411",
    "business:contact_data:email": "contact@fladeed.com",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f23' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://fladeed.com" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fladeed" />
        <link rel="alternate" hrefLang="en" href="https://fladeed.com" />
        <link rel="alternate" hrefLang="fr" href="https://fladeed.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://fladeed.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var root = document.documentElement;
                  
                  root.classList.remove('light', 'dark');
                  
                  if (theme === 'system') {
                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
