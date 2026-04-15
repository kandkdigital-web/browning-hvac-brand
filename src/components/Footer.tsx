import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="font-bold text-lg">Browning HVAC Service</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Your trusted HVAC contractor in Micanopy, FL. Providing reliable heating, ventilation, and air conditioning services to North Central Florida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Services</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-70">
              <li>AC Repair</li>
              <li>AC Installation</li>
              <li>HVAC Maintenance</li>
              <li>Air Duct Cleaning</li>
              <li>System Inspections</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:3526709160" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (352) 670-9160
              </a>
              <div className="flex items-start gap-2 opacity-70">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                17509 Co Rd 234, Micanopy, FL 32667
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-10 pt-8 border-t border-background/10">
          <p className="text-xs opacity-50 text-center">
            Serving Micanopy, Gainesville, Ocala, Alachua, Newberry, Archer, Hawthorne, Williston, and surrounding areas in North Central Florida.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-background/10 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Browning HVAC Service. All rights reserved. HVAC Contractor in Micanopy, FL.
          </p>
        </div>
      </div>
    </footer>
  );
}
