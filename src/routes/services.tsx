import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import acUnitImage from "@/assets/ac-unit.jpg";
import ductCleaningImage from "@/assets/duct-cleaning.jpg";
import thermostatImage from "@/assets/thermostat.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "HVAC Services | AC Repair & Installation Micanopy, FL | Browning HVAC" },
      { name: "description", content: "Professional HVAC services in Micanopy, FL: AC repair, installation, maintenance, air duct cleaning, and system inspections. Call (352) 670-9160." },
      { property: "og:title", content: "HVAC Services | AC Repair & Installation Micanopy, FL" },
      { property: "og:description", content: "Professional AC repair, installation, maintenance, and duct cleaning in Micanopy, FL." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "ac-repair",
    title: "AC Repair",
    image: acUnitImage,
    description: "When your air conditioning system breaks down, you need fast, reliable repair service. Browning HVAC Service provides expert AC repair for all makes and models, getting your system back up and running quickly.",
    benefits: [
      "Same-day service available for urgent repairs",
      "Diagnosis and repair of all AC brands and models",
      "Transparent pricing with no hidden fees",
      "Experienced, licensed technicians",
      "Parts and labor warranty on all repairs",
    ],
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    image: thermostatImage,
    description: "Whether you're replacing an old system or installing AC in a new home, we provide professional air conditioning installation services. We help you select the right energy-efficient system for your home's size and your budget.",
    benefits: [
      "Expert sizing and system selection",
      "Energy-efficient equipment options",
      "Professional installation by certified technicians",
      "Full system testing and calibration",
      "Manufacturer warranty support",
    ],
  },
  {
    id: "hvac-maintenance",
    title: "HVAC Maintenance",
    image: null,
    description: "Regular HVAC maintenance is the key to keeping your system running efficiently, preventing costly breakdowns, and extending the life of your equipment. Our comprehensive maintenance plans keep your system in peak condition.",
    benefits: [
      "Comprehensive system inspection and tune-up",
      "Filter replacement and coil cleaning",
      "Refrigerant level checks",
      "Electrical connection inspection",
      "Priority scheduling for maintenance plan members",
    ],
  },
  {
    id: "air-duct-cleaning",
    title: "Air Duct Cleaning",
    image: ductCleaningImage,
    description: "Clean air ducts mean better indoor air quality and improved HVAC efficiency. Our thorough duct cleaning service removes dust, allergens, and debris from your ductwork, helping your family breathe easier.",
    benefits: [
      "Improved indoor air quality",
      "Reduced allergens and dust",
      "Better HVAC system efficiency",
      "Lower energy costs",
      "Thorough cleaning of all supply and return ducts",
    ],
  },
  {
    id: "system-inspections",
    title: "System Inspections",
    image: null,
    description: "Comprehensive HVAC system inspections help identify potential problems before they become costly repairs. Whether you're buying a home or want a thorough check of your existing system, we provide detailed inspection reports.",
    benefits: [
      "Detailed system condition report",
      "Identification of potential issues",
      "Energy efficiency assessment",
      "Safety checks for gas connections and electrical",
      "Recommendations for improvements",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hvac-gradient section-padding">
        <div className="container-narrow text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Professional HVAC Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From AC repair and installation to duct cleaning and maintenance — we provide comprehensive heating and cooling solutions in Micanopy, FL.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-20">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a href="tel:3526709160">
                    <Button variant="default" size="lg">Call Now</Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">Get a Quote</Button>
                  </Link>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {service.image ? (
                  <img src={service.image} alt={`${service.title} service by Browning HVAC in Micanopy, FL`} className="rounded-xl shadow-lg w-full h-80 object-cover" loading="lazy" width={800} height={600} />
                ) : (
                  <div className="rounded-xl hvac-gradient-light h-80 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Expert service you can trust</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
