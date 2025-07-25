import { Metadata } from "next";
import "@app/globals.css";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

export const metadata: Metadata = {
  title: "appodus - Strategic Tech Partner for Fast-Moving Startups",
  description: "Build Fast. Scale Smart. We help founders turn ideas into fast-moving products with full-cycle execution: web apps, mobile apps, dashboards, and more.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
      </body>
    </html>
  );
}
