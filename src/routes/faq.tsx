import { createFileRoute } from "@tanstack/react-router";
import { CTABanner } from "@/components/CTABanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "HVAC FAQ | Common Questions | Browning HVAC Service Micanopy, FL" },
      { name: "description", content: "Answers to common HVAC questions from Browning HVAC Service in Micanopy, FL. Learn about AC maintenance, repair signs, system lifespan, and more." },
      { property: "og:title", content: "HVAC FAQ | Common Questions | Browning HVAC Service" },
      { property: "og:description", content: "Answers to common HVAC questions — maintenance, repair signs, costs, and more." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    question: "How often should I service my HVAC system?",
    answer: "We recommend having your HVAC system professionally serviced at least twice a year — once in the spring before cooling season and once in the fall before heating season. Regular maintenance helps prevent breakdowns, improves efficiency, and extends the life of your system. In Florida's climate, where AC runs heavily, more frequent check-ups may be beneficial.",
  },
  {
    question: "How long do AC units typically last?",
    answer: "A well-maintained air conditioning system typically lasts 15 to 20 years. However, factors like usage, maintenance frequency, and local climate can affect lifespan. In Florida, AC systems work harder due to the heat and humidity, which can slightly reduce their lifespan. Regular maintenance is key to getting the most years out of your investment.",
  },
  {
    question: "What are the signs I need HVAC repair?",
    answer: "Common signs include: unusual noises (grinding, squealing, banging), weak or inconsistent airflow, warm air coming from vents when cooling is on, frequent cycling on and off, unexplained increases in energy bills, strange odors from vents, and excess humidity in your home. If you notice any of these, call us for a professional diagnosis.",
  },
  {
    question: "How much does AC repair typically cost?",
    answer: "AC repair costs vary depending on the issue. Minor repairs like capacitor replacement or thermostat fixes may cost a few hundred dollars, while major repairs like compressor replacement can be more significant. We always provide a clear diagnosis and upfront pricing before performing any work — no surprises.",
  },
  {
    question: "Do you offer emergency HVAC services?",
    answer: "Yes! We understand that HVAC emergencies don't wait for business hours, especially in Florida's heat. Contact us at (352) 670-9160 and we'll do our best to respond to your emergency as quickly as possible.",
  },
  {
    question: "How can I improve my home's energy efficiency?",
    answer: "Several steps can help: schedule regular HVAC maintenance, replace air filters monthly, seal duct leaks, use a programmable thermostat, ensure proper insulation, and keep vents unobstructed. We can also assess your system's efficiency and recommend upgrades that will save you money on energy bills.",
  },
  {
    question: "What size AC system do I need for my home?",
    answer: "AC sizing depends on multiple factors including your home's square footage, insulation, number of windows, ceiling height, and local climate. An oversized or undersized system will be inefficient and won't keep you comfortable. We perform a thorough load calculation to recommend the right size system for your specific home.",
  },
  {
    question: "Do you service all HVAC brands?",
    answer: "Yes, our experienced technicians are trained to service, repair, and install all major HVAC brands. Whether you have a Carrier, Trane, Lennox, Rheem, Goodman, or any other brand, we have the expertise to keep your system running smoothly.",
  },
  {
    question: "What areas do you serve?",
    answer: "We're based in Micanopy, FL and serve the surrounding North Central Florida area, including Gainesville, Ocala, Alachua, Newberry, Archer, Hawthorne, Williston, High Springs, and more. Contact us to confirm service availability in your area.",
  },
];

function FAQPage() {
  return (
    <>
      <section className="hvac-gradient section-padding">
        <div className="container-narrow text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about HVAC services, maintenance, and repairs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner title="Still Have Questions?" subtitle="Our team is happy to help. Contact us for expert HVAC advice." />
    </>
  );
}
