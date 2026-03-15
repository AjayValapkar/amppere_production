import React, { useState, useEffect } from "react";
import logo from '/src/assets/amplogo.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

/* ── SVG ICONS ─────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.395-.03.75-.253.965-.598l1.93-3.112a1.1 1.1 0 00-.164-1.354l-2.52-2.52a1.1 1.1 0 00-1.43-.09l-1.42 1.065a9.04 9.04 0 01-4.357-4.357l1.065-1.42a1.1 1.1 0 00-.09-1.43L11.107 4.62a1.1 1.1 0 00-1.354-.164L6.64 6.387A1.6 1.6 0 006.042 7.352 15.96 15.96 0 003 5.5z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.58C5.12 20.04 12 20.04 12 20.04s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ── PRODUCT LINKS ─────────────────────────────────────────── */
const PRODUCT_LINKS = [
  ["Instrumentation Cables", "/product/Instrumentation Cables"],
  ["Fire Alarm Cables",      "/product/Fire Alarm Cables"],
  ["Flexible Cables",        "/product/Flexible Cables"],
  ["Fire Survival Cables",   "/product/Fire Survival Cables"],
  ["Co Axial Cable",         "/product/Co Axial Cable"],
  ["Power LT Cable",         "/product/Power LT Cable"],
  ["Screened Cable",         "/product/Screened Cable"],
  ["Signal Cable",           "/product/Signal Cables"],
];

/* ════════════════════════════════════════════════════════════ */
const Header = React.memo(() => {
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [prodOpen,    setProdOpen]    = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => { AOS.init({ duration: 1200 }); }, []);

  const closeMobile = () => { setMobileOpen(false); setProdOpen(false); setCompanyOpen(false); };

  const handleDownloadPDF = () => {
    const a = document.createElement("a");
    a.href = "/amppere_brochure.pdf";
    a.download = "AmppereCable_Brochure.pdf";
    a.click();
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          TOP CONTACT BAR
          • Mobile  (<640 px) : icons-only on left, social pill on right
          • Tablet+ (≥640 px) : full text on left, social pill on right
      ══════════════════════════════════════════ */}
      <div className="w-full bg-black text-white p-0 ">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between height-[40px]
                        pl-6">

          {/* ── LEFT: contact info ── */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10 min-w-0">

            {/* Phone */}
            <a href="tel:+919370946510"
               className="flex items-center gap-1.5 sm:gap-2 hover:text-red-400 transition-colors min-w-0">
              <PhoneIcon />
              {/* Full number on sm+, just icon on xs */}
              <span className="hidden sm:inline text-xs sm:text-sm font-medium whitespace-nowrap">
                +91 9370946510
              </span>
            </a>

            {/* Email */}
            <a href="mailto:infoampperecable@gmail.com"
               className="flex items-center gap-1.5 sm:gap-2 hover:text-red-400 transition-colors min-w-0">
              <MailIcon />
              {/* Full address on md+, truncated on sm, icon-only on xs */}
              <span className="hidden sm:inline md:hidden text-xs font-medium whitespace-nowrap">
                infoampperecable@gmail.com
              </span>
              <span className="hidden md:inline text-sm font-medium whitespace-nowrap">
                infoampperecable@gmail.com
              </span>
            </a>
          </div>

          {/* ── RIGHT: social icons in white pill ── */}
          <div className="flex-shrink-0 bg-white rounded-tl-[90px] rounded-bl-[10px]
                          px-6 py-2
                          flex items-center gap-6">
            <a href="#" aria-label="Facebook"
               className="text-gray-800 hover:text-red-600 transition-colors flex items-center">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram"
               className="text-gray-800 hover:text-red-600 transition-colors flex items-center">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="YouTube"
               className="text-gray-800 hover:text-red-600 transition-colors flex items-center">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN NAVBAR
      ══════════════════════════════════════════ */}
      <header className="w-full bg-[#1a1a3e] text-white shadow-lg sticky top-0 z-40">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between
                        px-3 py-2
                        sm:px-6 sm:py-3
                        md:px-8">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMobile}>
            <img src={logo} alt="Amppere Cable"
                 className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto" />
          </Link>

          {/* ── DESKTOP NAV LINKS (hidden on mobile) ── */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10">

            <li>
              <Link to="/"
                className="text-sm lg:text-base font-semibold tracking-wide
                           hover:text-red-500 transition-colors whitespace-nowrap">
                Home
              </Link>
            </li>

            {/* Company */}
            <li className="relative">
              <button
                onClick={() => { setCompanyOpen(p => !p); setProdOpen(false); }}
                onBlur={() => setTimeout(() => setCompanyOpen(false), 160)}
                className="flex items-center gap-1 text-sm lg:text-base font-semibold
                           tracking-wide hover:text-red-500 transition-colors focus:outline-none">
                About <ChevronDown open={companyOpen} />
              </button>
              <div className={`absolute left-0 top-full mt-2 w-52 bg-white text-gray-900
                              rounded-lg shadow-xl overflow-hidden
                              transition-all duration-200 origin-top z-50
                              ${companyOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <Link to="/about" onClick={() => setCompanyOpen(false)}
                  className="block px-4 py-3 text-sm font-medium
                             hover:bg-red-600 hover:text-white transition-colors border-b border-gray-100">
                  Company Overview
                </Link>
                <Link to="/founder" onClick={() => setCompanyOpen(false)}
                  className="block px-4 py-3 text-sm font-medium
                             hover:bg-red-600 hover:text-white transition-colors">
                  Founder &amp; MD
                </Link>
              </div>
            </li>

            {/* Products */}
            <li className="relative">
              <button
                onClick={() => { setProdOpen(p => !p); setCompanyOpen(false); }}
                onBlur={() => setTimeout(() => setProdOpen(false), 160)}
                className="flex items-center gap-1 text-sm lg:text-base font-semibold
                           tracking-wide hover:text-red-500 transition-colors focus:outline-none">
                Product <ChevronDown open={prodOpen} />
              </button>
              <div className={`absolute left-0 top-full mt-2 w-60 bg-white text-gray-900
                              rounded-lg shadow-xl overflow-hidden
                              transition-all duration-200 origin-top z-50
                              ${prodOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                {PRODUCT_LINKS.map(([label, path], i) => (
                  <Link key={label} to={path} onClick={() => setProdOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium
                                hover:bg-red-600 hover:text-white transition-colors
                                ${i < PRODUCT_LINKS.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    {label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link to="/clients"
                className="text-sm lg:text-base font-semibold tracking-wide
                           hover:text-red-500 transition-colors whitespace-nowrap">
                Client
              </Link>
            </li>

            <li>
              <Link to="/contact"
                className="text-sm lg:text-base font-semibold tracking-wide
                           hover:text-red-500 transition-colors whitespace-nowrap">
                Enquiry
              </Link>
            </li>
          </ul>

          {/* Download Brochure — desktop */}
          <button
            onClick={handleDownloadPDF}
            className="hidden md:inline-flex items-center gap-2
                       bg-red-600 hover:bg-red-700 active:bg-red-800
                       text-white text-xs lg:text-sm font-semibold
                       px-3 lg:px-5 py-2 lg:py-2.5
                       rounded-lg transition-colors shadow-md shadow-red-900/30
                       whitespace-nowrap flex-shrink-0">
            Download Brochure
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle menu"
            className="md:hidden text-white focus:outline-none p-1.5 rounded-md
                       hover:bg-white/10 transition-colors">
            {mobileOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            }
          </button>
        </nav>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE DRAWER OVERLAY
      ══════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 bg-black/60 z-50 md:hidden
                    transition-opacity duration-300
                    ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#12123a] z-50
                    md:hidden shadow-2xl flex flex-col
                    transition-transform duration-300 ease-in-out
                    ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <img src={logo} alt="Amppere Cable" className="h-10 w-auto" />
          <button onClick={closeMobile}
                  className="text-white p-1 rounded-md hover:bg-white/10 transition-colors focus:outline-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav list */}
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-0.5">

            <li>
              <Link to="/" onClick={closeMobile}
                className="flex items-center py-3 px-2 text-white text-sm font-semibold
                           border-b border-white/10 hover:text-red-400 transition-colors rounded-md
                           hover:bg-white/5">
                Home
              </Link>
            </li>

            {/* Company accordion */}
            <li className="border-b border-white/10">
              <button
                onClick={() => setCompanyOpen(p => !p)}
                className="w-full flex items-center justify-between py-3 px-2 text-white text-sm font-semibold
                           hover:text-red-400 transition-colors focus:outline-none rounded-md hover:bg-white/5">
                About
                <ChevronDown open={companyOpen} />
              </button>
              <div className={`overflow-hidden transition-all duration-300
                              ${companyOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="pl-4 pb-2 space-y-0.5">
                  <li>
                    <Link to="/about" onClick={closeMobile}
                      className="block py-2 px-2 text-gray-300 text-sm hover:text-red-400
                                 rounded-md hover:bg-white/5 transition-colors">
                      Company Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/founder" onClick={closeMobile}
                      className="block py-2 px-2 text-gray-300 text-sm hover:text-red-400
                                 rounded-md hover:bg-white/5 transition-colors">
                      Founder &amp; MD
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Products accordion */}
            <li className="border-b border-white/10">
              <button
                onClick={() => setProdOpen(p => !p)}
                className="w-full flex items-center justify-between py-3 px-2 text-white text-sm font-semibold
                           hover:text-red-400 transition-colors focus:outline-none rounded-md hover:bg-white/5">
                Products
                <ChevronDown open={prodOpen} />
              </button>
              <div className={`overflow-hidden transition-all duration-300
                              ${prodOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="pl-4 pb-2 space-y-0.5">
                  {PRODUCT_LINKS.map(([label, path]) => (
                    <li key={label}>
                      <Link to={path} onClick={closeMobile}
                        className="block py-2 px-2 text-gray-300 text-sm hover:text-red-400
                                   rounded-md hover:bg-white/5 transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link to="/clients" onClick={closeMobile}
                className="flex items-center py-3 px-2 text-white text-sm font-semibold
                           border-b border-white/10 hover:text-red-400 transition-colors
                           rounded-md hover:bg-white/5">
                Clients
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMobile}
                className="flex items-center py-3 px-2 text-white text-sm font-semibold
                           border-b border-white/10 hover:text-red-400 transition-colors
                           rounded-md hover:bg-white/5">
                Enquiry
              </Link>
            </li>

            <li className="pt-4">
              <button
                onClick={() => { handleDownloadPDF(); closeMobile(); }}
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800
                           text-white text-sm font-semibold px-4 py-3
                           rounded-lg transition-colors shadow-md">
                Download Brochure
              </button>
            </li>

          </ul>
        </nav>

        {/* Contact info pinned to drawer bottom */}
        <div className="flex-shrink-0 border-t border-white/10 px-5 py-4 space-y-2.5 bg-[#0d0d20]">
          <a href="tel:+919370946510"
             className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors">
            <PhoneIcon /> +91 9370946510
          </a>
          <a href="mailto:infoampperecable@gmail.com"
             className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors">
            <MailIcon /> infoampperecable@gmail.com
          </a>
          {/* Social in drawer too */}
          <div className="flex items-center gap-3 pt-1">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors"><YoutubeIcon /></a>
          </div>
        </div>
      </aside>
    </>
  );
});

export default Header;
