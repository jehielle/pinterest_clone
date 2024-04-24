import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from './components/Header'
import "./globals.css";
import Providers from "./Providers";


const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinterest",
  description: "Pinterest Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          { children }
        </Providers>
        
        </body>
    </html>
  );
}
