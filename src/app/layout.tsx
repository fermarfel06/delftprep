import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/providers/SessionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DelftPrep - TU Delft Aerospace Engineering Admission Preparation",
  description: "Comprehensive platform to help students prepare for TU Delft Aerospace Engineering admission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WGB04NJ0VP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WGB04NJ0VP');
          `}
        </Script>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
