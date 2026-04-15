import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "HVAC Service Area | Micanopy, Gainesville, Ocala FL | Browning HVAC" },
      { name: "description", content: "Browning HVAC Service proudly serves Micanopy, Gainesville, Ocala, Alachua, Newberry, Archer, Hawthorne, and surrounding areas in North Central Florida." },
      { property: "og:title", content: "HVAC Service Area | Micanopy, Gainesville, Ocala FL" },
      { property: "og:description", content: "Serving Micanopy, Gainesville, Ocala and surrounding areas in North Central Florida." },
    ],
  }),
  component: ServiceAreaPage,
});

const areas = [
  { name: "Micanopy", description: "Our home base. We're proud to be Micanopy's trusted HVAC contractor.", primary: true },
  { name: "Gainesville", description: "Full HVAC services for Gainesville homeowners and businesses." },
  { name: "Ocala", description: "Reliable heating and cooling services throughout the Ocala area." },
  { name: "Alachua", description: "Expert AC repair and installation for Alachua residents." },
  { name: "Newberry", description: "Professional HVAC maintenance and repair in Newberry, FL." },
  { name: "Archer", description: "Comprehensive HVAC solutions for the Archer community." },
  { name: "Hawthorne", description: "Trusted heating and cooling services in Hawthorne, FL." },
  { name: "Williston", description: "Quality HVAC service for homes and businesses in Williston." },
  { name: "High Springs", description: "AC repair and installation services in High Springs, FL." },
  { name: "Waldo", description: "Reliable HVAC contractor serving the Waldo area." },
  { name: "McIntosh", description: "Expert heating and cooling services for McIntosh residents." },
  { name: "Cross Creek", description: "Professional HVAC services in the Cross Creek area." },
];

function ServiceAreaPage() {
  return (
    <>
      <section className="hvac-gradient section-padding">
        <div className="container-narrow text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">Service Area</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Areas We Serve</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Based in Micanopy, FL, Browning HVAC Service provides expert heating and cooling services throughout North Central Florida.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">North Central Florida HVAC Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located at 17509 Co Rd 234, Micanopy, FL 32667 and serve homeowners within a wide radius. Whether you need AC repair, installation, or maintenance, we're just a call away.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.name} className={`rounded-xl p-6 border ${area.primary ? "border-primary bg-accent" : "border-border bg-card"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-foreground">{area.name}, FL</h3>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Don't See Your Area?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We may still be able to help! Give us a call to discuss your HVAC needs and we'll let you know if we can serve your location.
            </p>
            <a href="tel:3526709160">
              <Button variant="default" size="lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (352) 670-9160
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
