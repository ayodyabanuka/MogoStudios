import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOGO Studio by AB",
  description: "MOGO studio demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" type="image/x-icon" href="/Mogo-Studios-Logo_final-03.png"></link>
      </head>
      <body className={cn("relative h-full font-sans antialiased bg-[#F2F3F5] dark:bg-[#181818]", rubik.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
