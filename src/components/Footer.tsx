import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative">
      {/* Gold divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Name */}
          <div className="space-y-2">
            <h3 className="font-display text-2xl text-gold-gradient">
              Saranya Joshiba.M
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              Professional Makeup Artist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Copyright */}
          <div className="space-y-2 text-sm text-muted-foreground font-body">
            <p>© {currentYear} | Makeup Artist </p>
            <p className="flex items-center justify-center gap-1.5 text-xs">
              Crafted with{" "}
              <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
              <a
                href="https://www.rooban.info"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary transition-colors duration-200"
              >
                Rooban
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
