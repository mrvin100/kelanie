import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/global";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "KELANIE",
  description:
    "Geometric, colorful and playful jewelry that embraces the imperfection of made by hand. Hypoallergenic and sustainable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased  font-light scroll-smooth`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
