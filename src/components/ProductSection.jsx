import React, { useEffect } from 'react';
import imagePath from '../constant/imagePath';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const ProductSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200, // Adjust offset to start the animation at the right scroll position
        });
    }, []);

    return (
        < div className="bg-[#09103D] pt-1 md:p-12">
            <div className="md:flex md:flex-row m-10 md:m-0 justify-evenly items-center p-4 md:p-12 mb-12 bg-[#09103D]">
                {/* Mobile view */}
                <div className="contents md:hidden">
                    <div data-aos="fade-up" className="flex flex-row justify-center items-center mb-8">
                        <p className="text-[#E82637] font-bold text-3xl md:text-lg mr-2 font-inter">OUR</p>
                        <p className="text-[#E82637] font-bold text-3xl md:text-lg font-inter" >PRODUCT</p>
                    </div>
                </div>

                {/* Product Images with Scroll Animation */}
                <div className="sm:flex sm:flex-col sm:justify-center">
                    <div className="flex flex-row sm:w-full sm:flex justify-center items-center">
                        <div data-aos="fade-right" className="relative w-[100px] h-[120px] m-2 lg:w-[190px] lg:h-[220px] md:w-[170px] md:h-[200px] md:m-5 md:mb-0 md:mr-4 flex justify-center items-center rounded-br-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_1} alt="Product 1" className="transition-all duration-300 ease-in-out group-hover:opacity-40" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Co-Axial Cable</span>
                        </div>
                        <div data-aos="fade-left" className="relative w-[100px] h-[130px] mt-2.5 md:mt-0 md:w-[195px] md:mb-4 md:h-[240px] flex justify-center items-center rounded-bl-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_2} alt="Product 2" className="transition-all duration-300 ease-in-out group-hover:opacity-40 h-[110px] md:h-[240px]" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Fire Alarm Cable</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div data-aos="fade-up" className="relative w-[120px] h-[160px] md:w-[200px] mr-2 md:mr-4 md:h-[270px] flex justify-center items-center rounded-tr-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_3} alt="Product 3" className="transition-all duration-300 ease-in-out group-hover:opacity-40 h-[160px] md:w-[190px] md:h-[265px]" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Flexible Cables</span>
                        </div>
                        <div data-aos="fade-down" className="relative w-[120px] h-[170px] mt-2 md:mt-0 md:w-[210px] md:h-[320px] flex justify-center items-center rounded-tl-2xl bg-gradient-to-r from-[#253466] to-[#4A67CC] group">
                            <img src={imagePath.productComp_4} alt="Product 4" className="transition-all duration-300 ease-in-out group-hover:opacity-40 h-[170px] md:h-[320px]" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-in-out text-sm md:text-lg font-bold">Fire Survival Cables</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-[40%]">
                    <div>
                        {/* Desktop view */}
                        <div className="hidden md:contents">
                            <p className="text-[#E82637] font-bold text-5xl mb-3 font-inter">OUR</p>
                            <p className="text-[#E82637] font-bold text-5xl mb-8 font-inter">PRODUCT</p>
                        </div>
                        <p className="text-sm mt-5 md:text-lg text-[#FFFFFF] font-inter">
                            Our comprehensive range of cables, including coaxial, fire alarm safety, instrumentation, braided multicore, CCTV, and control cables, caters to diverse industrial and commercial applications. Each type is meticulously designed for optimal performance, durability, and safety.
                        </p>
                        <div className="flex ml-24 mb-24 bg-[#09103D] ">
                            <button className="font-inter p-2 md:p-2 border-[2px] mt-8 md:mt-10 md:border-[1px] bg-white text-[#AE1B1B] rounded-lg text-sm font-bold hover:bg-[#880000] hover:text-white hover:border-white hover:rounded-lg transition-all duration-300">

                                <Link to="/products">View More</Link>

                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductSection;
