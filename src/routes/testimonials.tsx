import { createFileRoute } from "@tanstack/react-router";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Browning HVAC Service Micanopy, FL" },
      { name: "description", content: "Read what our customers say about Browning HVAC Service in Micanopy, FL. Trusted, professional, and reliable HVAC services with 5-star reviews." },
      { property: "og:title", content: "Customer Reviews | Browning HVAC Service Micanopy, FL" },
      { property: "og:description", content: "5-star reviews from satisfied customers. Trusted HVAC service in Micanopy, FL." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  { name: "Sarah M.", location: "Micanopy, FL", text: "Our AC works great! Browning HVAC did an amazing job with the installation. The technician was friendly, knowledgeable, and took the time to explain everything. Our energy bills have actually gone down since the new system was installed. Highly recommend!", rating: 5, service: "AC Installation" },
  { name: "James T.", location: "Gainesville, FL", text: "Amazing attention to detail. The technician arrived on time, was very professional, and explained every step of the repair process. They even pointed out some maintenance tips to help extend the life of our system. Outstanding service!", rating: 5, service: "AC Repair" },
  { name: "Linda R.", location: "Ocala, FL", text: "Very professional and reliable. Browning HVAC has been maintaining our system for years and we wouldn't go anywhere else. They always show up when they say they will and do thorough work. It's rare to find this level of consistency.", rating: 5, service: "HVAC Maintenance" },
  { name: "Michael D.", location: "Micanopy, FL", text: "Called them for an emergency repair on the hottest day of summer. They came out within a couple of hours and had our AC running again quickly. Fair pricing and excellent work. So grateful for their quick response!", rating: 5, service: "Emergency Repair" },
  { name: "Patricia K.", location: "Alachua, FL", text: "Had our air ducts cleaned and the difference is incredible. Less dust, better airflow, and our allergies have improved. The team was careful with our home and cleaned up everything when they were done. Great experience!", rating: 5, service: "Air Duct Cleaning" },
  { name: "Robert H.", location: "Newberry, FL", text: "Browning HVAC inspected our system before we purchased our home. Their detailed report gave us peace of mind and helped us negotiate with the seller. Professional, honest, and thorough — exactly what you want in an HVAC company.", rating: 5, service: "System Inspection" },
  { name: "Karen W.", location: "Archer, FL", text: "We've tried other HVAC companies in the area but Browning is by far the best. They actually care about doing the job right. No upselling, no pressure — just honest, quality work. They've earned a customer for life.", rating: 5, service: "AC Repair" },
  { name: "David S.", location: "Hawthorne, FL", text: "Fantastic service from start to finish. The team helped us choose the right system for our home, handled the installation efficiently, and followed up to make sure everything was working perfectly. True professionals!", rating: 5, service: "AC Installation" },
  { name: "Nancy L.", location: "Gainesville, FL", text: "I signed up for their maintenance plan and it's been worth every penny. My system runs more efficiently, my bills are lower, and I have peace of mind knowing it's being taken care of by experts. Highly recommended!", rating: 5, service: "HVAC Maintenance" },
];

function TestimonialsPage() {
  return (
    <>
      <section className="hvac-gradient section-padding">
        <div className="container-narrow text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">What Our Customers Say</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it — hear from homeowners who trust Browning HVAC Service for their heating and cooling needs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-hvac-warm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1 self-start mb-3">{t.service}</span>
                <p className="text-sm text-muted-foreground italic flex-1 leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Experience the Browning Difference" subtitle="Join our family of satisfied customers. Contact us today for reliable HVAC service." />
    </>
  );
}
