import React, { useState, useRef } from 'react';
import imagePath from '../constant/imagePath';

export default function AboutUs() {
  // State to track the selected video
  const [currentVideo, setCurrentVideo] = useState(imagePath.video3); // Default video
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Array of video data
  const videos = [
    {
     
      name: 'Insulation',
      videoPath: imagePath.video3,// Replace with actual video path
    },
    {
      
      name: 'Laying',
      videoPath: imagePath.video4, // Replace with actual video path
    },
    {
      name: 'Shielding',
      videoPath: imagePath.frame,  // Replace with actual video path
    },
    {
      name: 'Armouring',
      videoPath: imagePath.video2, // Replace with actual video path
    },
    {
      name: 'Outer Sheating',
      videoPath: imagePath.video5, // Replace with actual video path
    },
  ];

  // Functions to handle dragging for scroll effect
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Controls the scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className="relative w-full h-[800px] md:h-[900px] flex flex-col bg-[#000000] items-center ">
        {/* Main Section */}
        <div className="absolute top-0 w-full flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          <div className="bg-gradient-to-t from-black to-gray-800 text-white pt-10 pb-14 px-4 md:px-6">
            <p className="text-2xl md:text-4xl font-bold mb-6">About Us</p>
            <p className="text-sm md:text-xl">
              Our products, certified by CE and RoHS, are crafted by a team of experienced professionals with more than 20 years of expertise in Instrumentation, Fire Alarm, and Fire Survival Cables.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#763232] to-[#000000] via-[#000000] m-6 p-5 md:m-20 md:p-14 mt-6 md:mt-12 text-white space-y-4">
            <p className="text-[#F4ACAC] text-sm md:text-xl">
              Amppere Cable is a leading manufacturer of Low Tension Copper Conductor Wires and Cables, offering a comprehensive range of solutions from our state-of-the-art facility in Maharashtra, India.
            </p>
            <p className="font-bold text-sm md:text-xl">
              Equipped with international standard equipment and comprehensive in-house testing facilities, we pride ourselves on being a well-knitted team that delivers high-quality, reliable products.
            </p>
            <p className="text-[#F4ACAC] text-sm md:text-xl">
              As a one-stop shop for all wire and cable needs, Amppere Cable combines technical prowess with a commitment to meeting our customers' unique requirements, ensuring we remain at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Owner Section */}
        <div className="relative bg-black w-full flex flex-col items-center justify-center">
          <div className="md:bg-white w-[300px] h-[150px] md:w-[700px] md:h-[400px] flex justify-center items-center -mt-36">
            <video
              src={currentVideo} // Updated video based on state
              controls
              autoPlay
              loop
              muted
              className="w-[300px] h-[150px] md:w-[700px] md:h-[400px] object-contain p-2"
            />
          </div>

          {/* Small Video Selection with drag-to-scroll */}
          <div
            ref={scrollRef}
            className="flex space-x-4 mt-6 overflow-x-auto whitespace-nowrap p-4 cursor-grab active:cursor-grabbing"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer flex-shrink-0"
                onClick={() => setCurrentVideo(video.videoPath)}
              >
                <video
                  src={video.videoPath}
                  className="w-[80px] h-[60px] md:h-[80px] md:w-[100px] object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                />
                <p className="text-white text-sm mt-2">{video.name}</p>
              </div>
            ))}
          </div>
        </div>

        <img
          src={imagePath.union}
          alt=""
          className="bg-black w-full h-2/3 object-contain -mb-12 md:-mb-52"
        />
      </div>
    </>
  );
}
