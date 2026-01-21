import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VaultX – Secure & Smart Crypto Wallet | Buy, Store, Stake Crypto",
  description:
    "VaultX is a secure and smart crypto wallet to buy, store, trade, and stake cryptocurrencies. Enjoy multi-currency support, real-time market data, military-grade security, and seamless cross-platform access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="pt-10 pb-17.5">
        <Navbar />
        <body className={`${beVietnamPro.className}  antialiased`}>
          {children}
        </body>
      </div>
    </html>
  );
}
