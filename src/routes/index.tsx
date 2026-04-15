import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import heroImage from "@/assets/hero-hvac.jpg";
import acUnitImage from "@/assets/ac-unit.jpg";
import thermostatImage from "@/assets/thermostat.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Browning HVAC Service | Reliable HVAC Services in Micanopy, FL" },
      { name: "description", content: "Browning HVAC Service offers expert AC repair, installation, and HVAC maintenance in Micanopy, FL. Call (352) 670-9160 for reliable heating and cooling services." },
      { property: "og:title", content: "Browning HVAC Service | Reliable HVAC Services in Micanopy, FL" },
      { property: "og:description", content: "Expert AC repair, installation, and HVAC maintenance in Micanopy, FL. Call (352) 670-9160." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M20 4l-6.38 6.38M14.5 3l.5 5 5 .5M4 20l6.38-6.38" />
      </svg>
    ),
    title: "AC Repair",
    description: "Fast, reliable AC repair services. We diagnose and fix all makes and models to restore your comfort quickly.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "AC Installation",
    description: "Professional AC installation with energy-efficient systems. We help you choose the right unit for your home.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "HVAC Maintenance",
    description: "Preventive maintenance plans to keep your system running efficiently and extend its lifespan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Air Duct Cleaning",
    description: "Thorough duct cleaning to improve air quality and system efficiency in your home.",
  },
];

const testimonials = [
  { name: "Sarah M.", text: "Our AC works great! Browning HVAC did an amazing job with the installation. Highly recommend their services.", rating: 5 },
  { name: "James T.", text: "Amazing attention to detail. The technician was professional, on time, and explained everything clearly.", rating: 5 },
  { name: "Linda R.", text: "Very professional and reliable. They've been maintaining our HVAC system for years. Wouldn't go anywhere else.", rating: 5 },
];

const whyChooseUs = [
  { title: "Local Expertise", description: "Proudly serving Micanopy, FL and surrounding communities with deep local knowledge.", icon: "🏡" },
  { title: "Attention to Detail", description: "We take pride in thorough, meticulous work that ensures lasting results.", icon: "🔍" },
  { title: "Reliability You Can Trust", description: "On-time service, honest pricing, and dependable results every time.", icon: "🤝" },
  { title: "Licensed & Insured", description: "Fully licensed HVAC contractor with comprehensive insurance coverage.", icon: "✅" },
];

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional HVAC technician servicing an air conditioning unit in Micanopy, Florida" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container-narrow py-20">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-4">Trusted HVAC Contractor in Micanopy, FL</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Reliable HVAC Services in Micanopy, FL
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Expert heating, ventilation, and air conditioning services you can depend on. Keeping your home comfortable year-round with quality workmanship and honest service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:3526709160">
                <Button variant="hero" size="xl">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground font-normal opacity-100 shadow-none">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our HVAC Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From routine maintenance to emergency repairs, Browning HVAC Service has you covered with comprehensive heating and cooling solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="default" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding hvac-gradient-light">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Trusted Local HVAC Experts</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Browning HVAC Service has built a reputation for quality workmanship, honest pricing, and exceptional customer care in Micanopy and throughout North Central Florida.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={acUnitImage} alt="Modern AC unit installed at a Florida home" className="rounded-xl shadow-lg w-full h-56 object-cover" loading="lazy" width={800} height={600} />
              <img src={thermostatImage} alt="HVAC technician adjusting a smart thermostat" className="rounded-xl shadow-lg w-full h-56 object-cover mt-8" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-hvac-warm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="text-sm font-semibold text-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">Read More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Service Area</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proudly Serving North Central Florida</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Based in Micanopy, FL, we provide HVAC services to homeowners throughout the region including Gainesville, Ocala, Alachua, Newberry, and surrounding communities.
          </p>
          <Link to="/service-area">
            <Button variant="default" size="lg">View Service Areas</Button>
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
