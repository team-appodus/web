import { ROUTES } from "@lib/routes";
import { Mail, Twitter, Linkedin, Github, MapPin} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href={ROUTES.HOME} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">appodus</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Strategic tech partner for fast-moving startups. We help founders turn ideas into scalable products with speed and precision.
            </p>
            <div className="mt-14">
              
            <div className="flex gap-4 text-muted-foreground ">
              <MapPin className="h-5 w-5" /> <span> 23 Agodogba Street, Parkview, Ikoyi, Lagos NG.</span>
            </div>
            <span className="ml-14  text-muted-foreground"> Remote-first: globally accessible.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTES.HOME} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={ROUTES.HOW_IT_WORKS} className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href={ROUTES.FEATURED_WORK} className="text-muted-foreground hover:text-primary transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ABOUT} className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href={ROUTES.START_YOUR_BUILD} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@appodus.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 <strong>appodus</strong>. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built with ❤️ for startup founders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;