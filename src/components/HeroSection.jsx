// src/components/HeroSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imagePath from '../constant/imagePath';


const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 200, // Try increasing the offset
    });

    AOS.refreshHard(); // Ensure animations are refreshed

    return () => {
      AOS.refresh(); // Clean up and refresh
    };
  }, []);


  return (
    <section className="text-white relative flex flex-col items-center justify-center h-screen -mt-16 md:mt-6">
      <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-x-0 md:space-y-0 w-full max-w-screen-lg p-0">
        <div className="relative w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
          <img
            src={imagePath.commit} // Replace with the actual path to the image
            alt="Hand Holding Heart"
            className="h-auto w-3/5 md:w-4/5 relative z-36 md:-mb-14 p-0" // Apply negative margin for overlap
            data-aos="fade-down"
          />
        </div>
        <div className="relative text-center md:text-left -pl-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 flex flex-col md:flex-row md:items-center">

            <span className="text-red-600 font-inter"> <span className="text-black md:mr-2 font-inter">WE</span> COMMIT</span>
          </h1>
          <h3 className="text-base md:text-lg p-4 text-black font-inter">
            At Amppere Cable, we commit to providing top-quality, reliable products backed by over 30 years of expertise and international certifications. Our state-of-the-art facility and skilled team ensure excellence in every cable we manufacture.
          </h3>
        </div>
      </div>

      <div className="bg-custom-blue w-full py-10 md:py-16 mb-2 md:mb-8 flex flex-wrap justify-center gap-1 md:gap-[40px] items-center">
        {[imagePath.icon1, imagePath.icon2, imagePath.icon3, imagePath.icon4].map((icon, index) => {
          // Array of text descriptions for each icon
          const descriptions = [
            "Proven Durability",
            "Unyielding Quality",
            "Customer Satisfaction",
            "Quality Product",
          ];

          return (
            <div
              key={index}
              className="group relative bg-icon-color p-2 md:p-4 rounded-full overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Adds a delay for staggered animations
            > 
              <img
                src={`${icon}`}
                alt={`Icon ${index + 1}`}
                className="w-16 md:w-24 h-16 md:h-24 transition-transform duration-300 group-hover:scale-90"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm md:text-lg p-8">{descriptions[index]}</p>
              </div>
            </div>
          );
        })}
      </div>


    </section>

  );
};

export default HeroSection;
