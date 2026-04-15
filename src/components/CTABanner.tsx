import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready for Reliable HVAC Service?",
  subtitle = "Contact Browning HVAC Service today for expert heating and cooling solutions in Micanopy, FL and surrounding areas.",
}: CTABannerProps) {
  return (
    <section className="hvac-gradient section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:3526709160">
            <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
