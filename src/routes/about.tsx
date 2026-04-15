import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import serviceVanImage from "@/assets/service-van.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Browning HVAC Service | HVAC Contractor Micanopy, FL" },
      { name: "description", content: "Learn about Browning HVAC Service — your trusted local HVAC contractor in Micanopy, FL. Quality workmanship, honest service, and community-focused values." },
      { property: "og:title", content: "About Browning HVAC Service | HVAC Contractor Micanopy, FL" },
      { property: "og:description", content: "Your trusted local HVAC contractor in Micanopy, FL. Quality workmanship and honest service." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Quality First", description: "We never cut corners. Every job is done right the first time with premium materials and expert craftsmanship.", icon: "⭐" },
  { title: "Honest & Transparent", description: "Clear, upfront pricing with no hidden fees. We explain what needs to be done and why before starting any work.", icon: "💎" },
  { title: "Customer-Focused", description: "Your comfort and satisfaction are our top priorities. We treat every home like our own.", icon: "❤️" },
  { title: "Community Committed", description: "As a local Micanopy business, we're invested in our community and the families we serve.", icon: "🏘️" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hvac-gradient section-padding">
        <div className="container-narrow text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Your Local HVAC Experts</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Browning HVAC Service is a trusted heating and cooling contractor proudly serving Micanopy, FL and the surrounding North Central Florida communities.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Browning HVAC Service was founded with a simple mission: to provide the highest quality heating, ventilation, and air conditioning services to our neighbors in Micanopy, FL and the greater North Central Florida area.
                </p>
                <p>
                  As a locally owned and operated business, we understand the unique climate challenges that Florida homeowners face. From the intense summer heat to the occasional cold snap in winter, we're here to make sure your home stays comfortable year-round.
                </p>
                <p>
                  What sets us apart is our unwavering attention to detail. We believe that great HVAC service isn't just about fixing a problem — it's about doing the job thoroughly, explaining what we did, and ensuring lasting results. Our customers are our neighbors, and we treat every home with the care and respect it deserves.
                </p>
              </div>
            </div>
            <div>
              <img src={serviceVanImage} alt="Browning HVAC Service van ready for a service call in Florida" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To deliver dependable, high-quality HVAC services with honesty and integrity. We strive to keep every home in our community comfortable, safe, and energy-efficient — one customer at a time.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
