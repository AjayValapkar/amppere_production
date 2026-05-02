import React, { useState, useRef } from 'react';
import imagePath from '../constant/imagePath';

export default function AboutUs() {
  const videos = [
    { name: 'Insulation',     videoPath: imagePath.video3 },
    { name: 'Laying',         videoPath: imagePath.video4 },
    { name: 'Shielding',      videoPath: imagePath.frame  },
    { name: 'Armouring',      videoPath: imagePath.video2 },
    { name: 'Outer Sheating', videoPath: imagePath.video5 },
  ];

  // ── FIX 1: use activeIdx as the single source of truth ──
  const [activeIdx, setActiveIdx] = useState(0);
  const currentVideo = videos[activeIdx].videoPath;

  // ── FIX 2: unified drag state ──
  const scrollRef   = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart   = useRef({ x: 0, scrollLeft: 0 });

  // ── FIX 3: selectVideo handler ──
  const selectVideo = (i) => {
    if (!isDragging) setActiveIdx(i);
  };

  // ── FIX 4: stopDrag defined ──
  const stopDrag = () => setIsDragging(false);

  const onMouseDown = (e) => {
    setIsDragging(false); // reset click-guard
    dragStart.current = {
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    };
    // use a small timeout so single clicks still register
    scrollRef.current._dragMoved = false;
    setIsDragging(false);
    scrollRef.current.addEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current._dragMoved = true;
    setIsDragging(true);
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStart.current.x) * 2;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk;
  };

  const onMouseUp = () => {
    if (scrollRef.current) {
      scrollRef.current.removeEventListener('mousemove', onMouseMove);
    }
    // small delay so click fires before isDragging resets
    setTimeout(() => setIsDragging(false), 50);
  };

  const onMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.removeEventListener('mousemove', onMouseMove);
    }
    stopDrag();
  };

  return (
    <>
      <div className="relative w-full h-[800px] md:h-[700px] flex flex-col bg-[#000000] items-center">
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
        <div style={{ background: '#000000', borderBottom: '1px solid #1a1a1a' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,40px)' }}>

            {/* section header */}
            <div
              className="au d3"
              style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 'clamp(24px,3vw,40px)' }}
            >
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, color: '#e00', letterSpacing: '.3em', textTransform: 'uppercase', margin: '0 0 6px' }}>
                  How We Make It
                </p>
                <h2
                  className="ab-head"
                  style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.01em' }}
                >
                  Manufacturing Process
                </h2>
              </div>
              {/* active step label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#e00', flexShrink: 0, boxShadow: '0 0 8px #e00' }} />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 500 }}>
                  Now viewing:{' '}
                  <span style={{ color: '#fff', fontWeight: 600 }}>
                    {videos[activeIdx].name}
                  </span>
                </span>
              </div>
            </div>

            {/* ── MAIN VIDEO PLAYER ── */}
            <div
              className="au d4"
              style={{
                position: 'relative', borderRadius: 12, overflow: 'hidden',
                background: '#000', border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                marginBottom: 'clamp(16px,2vw,24px)',
                aspectRatio: '16/7', maxHeight: 480,
              }}
            >
              <video
                key={currentVideo}
                src={currentVideo}
                controls
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}
              />
              {/* corner accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 48, height: 3, background: '#e00' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: 48, background: '#e00' }} />
            </div>

            {/* ── THUMBNAIL STRIP ── */}
            <div
              ref={scrollRef}
              className="thumb-strip au d5 justify-center item-center"
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              style={{ display: 'flex', gap: 12, overflowX: 'auto', cursor: 'grab', paddingBottom: 4, userSelect: 'none' }}
            >
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="thumb-item"
                  onClick={() => selectVideo(i)}
                  style={{ flexShrink: 0, cursor: 'pointer', opacity: i === activeIdx ? 1 : 0.5 }}
                >
                  {/* thumb wrapper */}
                  <div style={{
                    position: 'relative', borderRadius: 8, overflow: 'hidden',
                    border: i === activeIdx ? '2px solid #e00' : '2px solid rgba(255,255,255,0.1)',
                    boxShadow: i === activeIdx ? '0 0 0 1px #e00, 0 4px 16px rgba(220,0,0,.3)' : 'none',
                    transition: 'border .2s, box-shadow .2s',
                    width: 'clamp(90px,12vw,130px)',
                  }}>
                    <video
                      src={v.videoPath}
                      muted
                      loop
                      autoPlay
                      style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
                    />
                    {/* active overlay */}
                    {i === activeIdx && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(220,0,0,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: '50%',
                          background: 'rgba(220,0,0,0.85)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <svg width="8" height="10" viewBox="0 0 8 10" fill="white">
                            <path d="M0 0l8 5-8 5V0z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* label */}
                  <p style={{
                    color: i === activeIdx ? '#fff' : 'rgba(255,255,255,0.4)',
                    fontSize: 11, fontWeight: i === activeIdx ? 600 : 400,
                    textAlign: 'center', margin: '8px 0 0',
                    letterSpacing: '.06em', textTransform: 'uppercase',
                    fontFamily: "'Outfit',sans-serif",
                    transition: 'color .2s',
                  }}>
                    {v.name}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}