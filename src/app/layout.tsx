import { Metadata } from "next";
import "@app/globals.css";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import { ClarityPageTracker } from "@components/microsoft-clarity/clarity-tracker";
import { ClarityProvider } from "@components/microsoft-clarity/clarity-provider";
import { AuthModal } from "@components/user/auth/AuthModal";
import { FullPageLoading } from "@components/ui/loading-spinner";

export const metadata: Metadata = {
  title: "appodus - Strategic Tech Partner for Fast-Moving Startups",
  description: "Build Fast. Scale Smart. We help founders turn ideas into fast-moving products with full-cycle execution: web apps, mobile apps, dashboards, and more.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return <FullPageLoading text="Initializing..." />;
  
  return (
    <html lang="en">
      <body
        className=""
      >
      <ClarityProvider />
      <ClarityPageTracker />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FullPageLoading text="Initializing..." />
        <AuthModal />
      </div>
      </body>
    </html>
  );
}
