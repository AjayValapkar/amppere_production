import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";// Importing Link from react-router-dom
import imagePath from "../constant/imagePath";

const Footer = React.memo(() => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="relative bg-[url('/src/assets/foot.png')] bg-cover bg-bottom filter text-white p-6 md:p-28">
            {/* Overlay with shadow */}
            <div className="absolute inset-0 z-[-1] bg-black bg-opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <img src={imagePath.logo} alt="Amppere Cable Logo" className="h-28 sm:h-20 md:h-26 lg:h-40" />
                {/* <p className="text-white text-sm mb-4 ">Where Quality Meets Reliability</p> */}

                <div className="flex flex-wrap justify-between my-0 md:my-6">
                    {/* Left Column */}
                    <div className="font-inter w-full md:w-1/3 mb-8 md:mb-0" data-aos="fade-up">
                        <div className="mt-4">
                            <div className="flex items-center mb-2">
                                <span className="mr-2">📧</span>
                                <a href="mailto:infoampperecable@gmail.com">infoampperecable@gmail.com</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-2">📍</span>
                                <address>
                                    Shed no. 28 / A, 1&2, Survey no. 47, Hi-Tech Industrial Area, Village Alyali, Tal-Dist.Palghar, Palghar 401404, Maharashtra, India
                                </address>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">📞</span>
                                <a href="tel:+919370946510">+91 9370946510</a>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="font-inter w-full md:w-1/3 mb-8 md:mb-0 pl-0 md:pl-16" data-aos="fade-up">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <div className="w-1/3 border-t-4 border-red-600 my-3"></div>

                        <ul>
                            <li><Link to="/" className="text-2sm font-bold hover:underline">Home</Link></li>
                            <li><Link to="/about" className="text-2sm hover:underline">About Us</Link></li>
                            <li><Link to="/clients" className="text-2sm hover:underline">Clients</Link></li>
                            <li><Link to="/contact" className="text-2sm hover:underline">Enquiry</Link></li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="font-inter w-full md:w-1/3" data-aos="fade-up">
                        <h3 className="text-2xl font-bold mb-4">Our Products</h3>
                        <div className="w-1/3 border-t-4 border-red-600 my-3"></div>

                        <ul>
                            <li><Link to="/product/Instrumentation Cables" className="text-2sm hover:underline">Instrumentation Cables</Link></li>
                            <li><Link to="/product/Fire Alarm Cables" className="text-2sm hover:underline">Fire Alarm Cables</Link></li>
                            <li><Link to="/product/Fire Survival Cables" className="text-2sm hover:underline">Fire Survival Cables</Link></li>
                            <li><Link to="/product/Flexible Cables" className="text-2sm hover:underline">Flexible Cables</Link></li>
                            <li><Link to="/product/Power LT Cable" className="text-2sm hover:underline">Power LT Cables</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full border-t-8 border-red-600 my-5"></div>

                <div className="font-inter flex flex-wrap justify-center mt-8 space-x-4" data-aos="fade-up">

                    <a href="https://www.facebook.com/people/Amppere-Cable/61566408188370/?mibextid=wwXIfr&rdid=XLGD1PzpJoTNGQ5s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Q9t9PgS4S%2F%3Fmibextid%3DwwXIfr" target="_blank"
                        rel="noopener noreferrer" className="flex items-center text-2xl hover:text-red-500">
                        <img src={imagePath.fb} className="w-6 h-6 mr-2" alt="" srcSet="" />
                        Facebook
                    </a>
                    <a href="https://www.linkedin.com/company/amppere-cable" target="_blank"
                        rel="noopener noreferrer" className="flex items-center text-2xl hover:text-red-500">
                        <img src={imagePath.linkedin} className="w-6 h-6 mr-2" alt="" srcSet="" />
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/ampperecable?igsh=MWYyazE1ZDhwYTd0NQ%3D%3D&utm_source=qr" target="_blank"
                        rel="noopener noreferrer" className="flex items-center text-2xl hover:text-red-500">
                        <img src={imagePath.insta} className="w-6 h-6 mr-2" alt="" srcSet="" />
                        Instagram
                    </a>
                      <a href="https://www.youtube.com/channel/UCUpTOAVXEGQzM34Eke8kNRA" target="_blank"
                        rel="noopener noreferrer" className="flex items-center text-2xl hover:text-red-500">
                        <img src={imagePath.youtube} className="w-8 h-6 mr-2" alt="" srcSet="" />
                        YouTube
                    </a>
                </div>
               <p className="text-center text-white flex items-center justify-center mt-8">
                    &copy; 2025 Developed & Maintained By
                    <a
                        href="https://haloxion.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 flex items-center ml-2"
                    >
                        <img
                            src={imagePath.haloxion}
                            className="w-30 h-6 md:h-8"
                            alt="Haloxion Logo"
                        />
                    </a>
                </p>


            </div>
        </footer>
    );
});

export default Footer;
