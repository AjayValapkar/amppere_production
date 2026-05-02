import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import imagePath from "../constant/imagePath";

const Footer = React.memo(() => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const socialLinks = [
        {
            label: "Twitter",
            href: "https://twitter.com",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/people/Amppere-Cable/61566408188370/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/ampperecable",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/channel/UCUpTOAVXEGQzM34Eke8kNRA",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/amppere-cable",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    // Reusable Follow Us block
    const FollowUs = ({ className = "", centered = false }) => (
        <div className={className}>
            <h4
                className={`font-bold mb-4 ${centered ? "text-center" : ""}`}
                style={{ color: "#ffffff", fontSize: "20px", letterSpacing: "0.04em" }}
            >
                Follow Us:
            </h4>
            <div className={`flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
                {socialLinks.map(({ label, href, icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:brightness-125"
                        style={{
                            width: "34px",
                            height: "34px",
                            backgroundColor: "white",
                            border: "1px solid rgba(255,255,255,0.13)",
                            color: "#AE1B1B",
                            flexShrink: 0,
                        }}
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <footer
            className="relative text-white overflow-hidden"
            style={{
                backgroundImage: "url('/src/assets/foot.png')",
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* ── Inner content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-14 pb-6">

                {/* ═══ MAIN CONTENT ROW ═══ */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-10">

                    {/* ── LEFT: Logo ── */}
                    <div
                        className="lg:w-[40%] flex flex-col justify-center items-center m-auto"
                        data-aos="fade-right"
                        data-aos-duration="900"
                    >
                        <img
                            src={imagePath.logo1}
                            alt="Amppere Cable Logo"
                            className="w-auto object-contain h-26 w-full"
                        />
                    </div>

                    {/* ── RIGHT: 3 columns ── */}
                    <div className="lg:w-[64%] grid grid-cols-1 sm:grid-cols-3 gap-4">

                        {/* ─ Col 1: Company + Follow Us (desktop only) ─ */}
                        <div data-aos="fade-up" data-aos-delay="80">
                            <h4
                                className="font-bold mb-2"
                                style={{ color: "#ffffff", fontSize: "20px", letterSpacing: "0.04em" }}
                            >
                                Company
                            </h4>
                            <div className="mb-4 w-1/2 h-[2px] bg-red-600"></div>
                            <ul className="space-y-[9px]">
                                {[
                                    { label: "Home", to: "/" },
                                    { label: "About Us", to: "/about" },
                                    { label: "Our Products", to: "/products" },
                                    { label: "Download Brochure", to: "/brochure" },
                                ].map(({ label, to }) => (
                                    <li key={label}>
                                        <Link
                                            to={to}
                                            style={{ color: "#e4e4e7", fontSize: "18px" }}
                                            className="transition-colors duration-200 hover:text-white"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Follow Us — visible only on sm and above (desktop/tablet) */}
                            <FollowUs className="mt-7 hidden sm:block" centered={false} />
                        </div>

                        {/* ─ Col 2: Links ─ */}
                        <div data-aos="fade-up" data-aos-delay="160">
                            <h4
                                className="font-bold mb-2"
                                style={{ color: "#ffffff", fontSize: "20px", letterSpacing: "0.04em" }}
                            >
                                Links
                            </h4>
                            <div className="mb-4 w-1/2 h-[2px] bg-red-600"></div>
                            <ul className="space-y-[9px]">
                                {[
                                    { label: "Clients", to: "/clients" },
                                    { label: "Social Media", to: "/" },
                                    { label: "Enquiry", to: "/contact" },
                                ].map(({ label, to }) => (
                                    <li key={label}>
                                        <Link
                                            to={to}
                                            style={{ color: "#e4e4e7", fontSize: "18px" }}
                                            className="transition-colors duration-200 hover:text-white"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ─ Col 3: Contact ─ */}
                        <div data-aos="fade-up" data-aos-delay="240">
                            <h4
                                className="font-bold mb-2"
                                style={{ color: "#ffffff", fontSize: "20px", letterSpacing: "0.01em" }}
                            >
                                Contact
                            </h4>
                            <div className="mb-4 w-1/2 h-[2px] bg-red-600"></div>
                            <ul className="space-y-3">
                                {/* Phone */}
                                <li className="flex items-center gap-2">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ width: "13px", height: "13px", color: "#e4e4e7", flexShrink: 0 }}
                                    >
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <a
                                        href="tel:+919370946510"
                                        style={{ color: "#e4e4e7", fontSize: "18px" }}
                                        className="transition-colors duration-200 hover:text-white"
                                    >
                                        +91 9370946510
                                    </a>
                                </li>

                                {/* Email */}
                                <li className="flex items-center gap-2">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ width: "13px", height: "13px", color: "#e4e4e7", flexShrink: 0 }}
                                    >
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <a
                                        href="mailto:infoampperecable@gmail.com"
                                        style={{ color: "#e4e4e7", fontSize: "18px" }}
                                        className="transition-colors duration-200 hover:text-white break-all"
                                    >
                                        infoampperecable@gmail.com
                                    </a>
                                </li>

                                {/* Address */}
                                <li className="flex items-start gap-2">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{
                                            width: "13px",
                                            height: "13px",
                                            color: "#cc2222",
                                            flexShrink: 0,
                                            marginTop: "2px",
                                        }}
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <address
                                        className="not-italic leading-[1.65]"
                                        style={{ color: "#e4e4e7", fontSize: "18px" }}
                                    >
                                        Shed no. 28 / A, 1&amp;2, Survey no. 47, Hi-Tech
                                        Industrial Area, Village Alyali, Tal-Dist.Palghar,
                                        Palghar 401404, Maharashtra, India
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── Follow Us — mobile only, centered, below all columns ── */}
                <FollowUs
                    className="mt-8 sm:hidden"
                    centered={true}
                />

                {/* ═══ DIVIDER ═══ */}
                <div
                    className="mt-10 mb-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                />

                {/* ═══ COPYRIGHT ═══ */}
                <p
                    className="text-center flex flex-wrap items-center justify-center gap-1"
                    style={{ color: "#55556e", fontSize: "12px" }}
                >
                    &copy; 2025 Developed &amp; Maintained By
                    <a
                        href="https://haloxion.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity duration-200 ml-1"
                    >
                        <img
                            src={imagePath.haloxion}
                            alt="Haloxion Logo"
                            style={{ height: "18px" }}
                            className="object-contain inline-block"
                        />
                    </a>
                </p>
            </div>
        </footer>
    );
});

export default Footer;