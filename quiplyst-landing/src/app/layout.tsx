import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Quiplyst: AI-Powered FinanceOps for Mid-Market Teams | US, UK, CAN, AUS & ME",
  description: "Tired of manual reconciliation, siloed spreadsheets and blind-spot forecasts? Quiplyst's AI copilot Mercury unifies AP, AR, budgeting & compliance—so mid-market teams from New York to Dubai can close faster and forecast smarter.",
  canonical: "https://www.quiplyst.com/",
  openGraph: {
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_IN", "ar_SA", "ar_AE"],
    title: "Quiplyst: AI-Powered FinanceOps for Mid-Market Teams",
    description: "Streamline AP, AR, forecasting & compliance with Mercury, your AI FinanceOps copilot. Try a free demo today.",
    images: ["https://res.cloudinary.com/demo/image/upload/v1/quiplyst-social.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.quiplyst.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB, en_AU, en_CA, en_IN, ar_SA, ar_AE" />
        <meta property="og:title" content="Quiplyst: AI-Powered FinanceOps for Mid-Market Teams" />
        <meta property="og:description" content="Streamline AP, AR, forecasting & compliance with Mercury, your AI FinanceOps copilot. Try a free demo today." />
        <meta property="og:image" content="https://res.cloudinary.com/demo/image/upload/v1/quiplyst-social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quiplyst",
              "description": "AI-Powered FinanceOps platform for mid-market teams",
              "url": "https://www.quiplyst.com",
              "logo": "https://res.cloudinary.com/demo/image/upload/v1/quiplyst-logo.png",
              "sameAs": [
                "https://linkedin.com/company/quiplyst",
                "https://twitter.com/quiplyst",
                "https://facebook.com/quiplyst"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-QUIPLYST",
                "contactType": "customer service",
                "availableLanguage": ["English", "Arabic"]
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}