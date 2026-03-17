// src/AboutUs.jsx
import React, { useState, useRef } from 'react';
import imagePath from '../constant/imagePath';

const videos = [
  { name: 'Insulation',     videoPath: imagePath.video3 },
  { name: 'Laying',         videoPath: imagePath.video4 },
  { name: 'Shielding',      videoPath: imagePath.frame  },
  { name: 'Armouring',      videoPath: imagePath.video2 },
  { name: 'Outer Sheathing',videoPath: imagePath.video5 },
];

export default function AboutUs() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].videoPath);
  const [activeIdx,    setActiveIdx]    = useState(0);
  const scrollRef   = useRef(null);
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const scrollLeft  = useRef(0);

  /* ── drag-to-scroll ── */
  const onMouseDown  = (e) => {
    isDragging.current  = true;
    startX.current      = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current  = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };
  const stopDrag = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.6;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const selectVideo = (idx) => {
    setCurrentVideo(videos[idx].videoPath);
    setActiveIdx(idx);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .ab-root { font-family:'Outfit',sans-serif; }
        .ab-head { font-family:'Barlow Condensed',sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .au  { animation:fadeUp .6s cubic-bezier(.22,1,.36,1) both; }
        .d1  { animation-delay:.08s; } .d2 { animation-delay:.16s; }
        .d3  { animation-delay:.24s; } .d4 { animation-delay:.32s; }
        .d5  { animation-delay:.40s; } .d6 { animation-delay:.48s; }

        /* thumb strip scrollbar hidden */
        .thumb-strip::-webkit-scrollbar { display:none; }
        .thumb-strip { -ms-overflow-style:none; scrollbar-width:none; }

        /* thumb hover */
        .thumb-item { transition:transform .2s ease, opacity .2s ease; }
        .thumb-item:hover { transform:translateY(-2px); opacity:1 !important; }

        /* video ring glow on active */
        .thumb-active { box-shadow:0 0 0 2px #e00, 0 4px 16px rgba(220,0,0,.35) !important; }

        /* stat card hover */
        .stat-card { transition:background .25s, transform .2s; }
        .stat-card:hover { background:rgba(255,255,255,0.07) !important; transform:translateY(-2px); }

        /* play ring animation */
        @keyframes ring {
          0%   { transform:scale(1);   opacity:.6; }
          100% { transform:scale(1.7); opacity:0; }
        }
      `}</style>

      <div className="ab-root" style={{ background:'#111', color:'#fff' }}>

        {/* ══════════════════════════════════════
            HERO — About Us header
        ══════════════════════════════════════ */}
        <div style={{
          background:'linear-gradient(135deg,#0f0f0f 0%,#1a0000 55%,#0f0f0f 100%)',
          borderBottom:'1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{ maxWidth:1100, margin:'0 auto',
                        padding:'clamp(40px,5vw,72px) clamp(16px,4vw,40px)' }}>

            <p className="au ab-head"
               style={{ color:'#e00', fontSize:11, letterSpacing:'.32em',
                        textTransform:'uppercase', margin:'0 0 12px', fontWeight:600 }}>
              Who We Are
            </p>

            <h1 className="au d1 ab-head"
                style={{ fontSize:'clamp(2.8rem,5.5vw,4.8rem)', fontWeight:800,
                         lineHeight:1, color:'#fff', margin:'0 0 8px',
                         letterSpacing:'-0.01em' }}>
              ABOUT
              <br />
              <span style={{ WebkitTextStroke:'2px rgba(255,255,255,0.18)',
                             color:'transparent' }}>
                AMPPERE CABLE
              </span>
            </h1>

            {/* red rule */}
            <div className="au d2"
                 style={{ width:48, height:3, background:'#e00',
                          borderRadius:2, margin:'20px 0 22px' }} />

            <p className="au d2"
               style={{ color:'rgba(255,255,255,0.55)', fontSize:'clamp(13px,1.7vw,15px)',
                        maxWidth:560, lineHeight:1.8, margin:0 }}>
              Our products, certified by <strong style={{ color:'#fff' }}>CE</strong> and{' '}
              <strong style={{ color:'#fff' }}>RoHS</strong>, are crafted by a team of experienced
              professionals with more than 20 years of expertise in Instrumentation, Fire Alarm,
              and Fire Survival Cables.
            </p>
          </div>
        </div>

  
        {/* ══════════════════════════════════════
            ABOUT CONTENT — two column
        ══════════════════════════════════════ */}
        <div style={{ maxWidth:1100, margin:'0 auto',
                      padding:'clamp(40px,5vw,72px) clamp(16px,4vw,40px)' }}>

          <div style={{ display:'grid',
                        gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
                        gap:'clamp(28px,4vw,56px)', alignItems:'start' }}>

            {/* left card */}
            <div className="au d3"
                 style={{
                   background:'rgba(255,255,255,0.03)',
                   border:'1px solid rgba(255,255,255,0.08)',
                   borderRadius:12,
                   padding:'clamp(20px,3vw,32px)',
                   borderLeft:'3px solid #e00',
                 }}>
              <p className="ab-head"
                 style={{ fontSize:18, fontWeight:700, color:'#fff',
                          letterSpacing:'.04em', margin:'0 0 14px' }}>
                Leading Manufacturer
              </p>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:14,
                          lineHeight:1.85, margin:0 }}>
                Amppere Cable is a leading manufacturer of Low Tension Copper Conductor
                Wires and Cables, offering a comprehensive range of solutions from our
                state-of-the-art facility in Maharashtra, India.
              </p>
            </div>

            {/* middle card */}
            <div className="au d4"
                 style={{
                   background:'rgba(255,255,255,0.03)',
                   border:'1px solid rgba(255,255,255,0.08)',
                   borderRadius:12,
                   padding:'clamp(20px,3vw,32px)',
                   borderLeft:'3px solid #e00',
                 }}>
              <p className="ab-head"
                 style={{ fontSize:18, fontWeight:700, color:'#fff',
                          letterSpacing:'.04em', margin:'0 0 14px' }}>
                World-Class Infrastructure
              </p>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:14,
                          lineHeight:1.85, margin:0 }}>
                Equipped with international standard equipment and comprehensive in-house
                testing facilities, we pride ourselves on being a well-knitted team that
                delivers high-quality, reliable products.
              </p>
            </div>

            {/* right card */}
            <div className="au d5"
                 style={{
                   background:'rgba(255,255,255,0.03)',
                   border:'1px solid rgba(255,255,255,0.08)',
                   borderRadius:12,
                   padding:'clamp(20px,3vw,32px)',
                   borderLeft:'3px solid #e00',
                 }}>
              <p className="ab-head"
                 style={{ fontSize:18, fontWeight:700, color:'#fff',
                          letterSpacing:'.04em', margin:'0 0 14px' }}>
                One-Stop Solution
              </p>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:14,
                          lineHeight:1.85, margin:0 }}>
                As a one-stop shop for all wire and cable needs, Amppere Cable combines
                technical prowess with a commitment to meeting our customers' unique
                requirements, ensuring we remain at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MANUFACTURING PROCESS — VIDEO SECTION
        ══════════════════════════════════════ */}
        <div style={{ background:'#0d0d0d', borderTop:'1px solid #1a1a1a',
                      borderBottom:'1px solid #1a1a1a' }}>
          <div style={{ maxWidth:1100, margin:'0 auto',
                        padding:'clamp(40px,5vw,72px) clamp(16px,4vw,40px)' }}>

            {/* section header */}
            <div className="au d3"
                 style={{ display:'flex', alignItems:'flex-end',
                          justifyContent:'space-between', flexWrap:'wrap',
                          gap:12, marginBottom:'clamp(24px,3vw,40px)' }}>
              <div>
                <p style={{ fontSize:10, fontWeight:600, color:'#e00',
                   letterSpacing:'.3em', textTransform:'uppercase',
                   margin:'0 0 6px' }}>
                  How We Make It
                </p>
                <h2 className="ab-head"
                    style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:800,
                             color:'#fff', margin:0, letterSpacing:'-0.01em' }}>
                  Manufacturing Process
                </h2>
              </div>
              {/* active step label */}
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:8, height:8, borderRadius:'50%',
                              background:'#e00', flexShrink:0,
                              boxShadow:'0 0 8px #e00' }} />
                <span style={{ color:'rgba(255,255,255,0.5)', fontSize:13, fontWeight:500 }}>
                  Now viewing: <span style={{ color:'#fff', fontWeight:600 }}>
                    {videos[activeIdx].name}
                  </span>
                </span>
              </div>
            </div>

            {/* ── MAIN VIDEO PLAYER ── */}
            <div className="au d4"
                 style={{
                   position:'relative', borderRadius:12, overflow:'hidden',
                   background:'#000',
                   border:'1px solid rgba(255,255,255,0.08)',
                   boxShadow:'0 20px 60px rgba(0,0,0,0.6)',
                   marginBottom:'clamp(16px,2vw,24px)',
                   aspectRatio:'16/7',
                   maxHeight:480,
                 }}>
              <video
                key={currentVideo}
                src={currentVideo}
                controls
                autoPlay
                loop
                muted
                style={{ width:'100%', height:'100%', objectFit:'contain',
                         background:'#000', display:'block' }}
              />
              {/* corner accent */}
              <div style={{ position:'absolute', top:0, left:0,
                            width:48, height:3, background:'#e00' }} />
              <div style={{ position:'absolute', top:0, left:0,
                            width:3, height:48, background:'#e00' }} />
            </div>

            {/* ── THUMBNAIL STRIP ── */}
            <div
              ref={scrollRef}
              className="thumb-strip au d5"
              onMouseDown={onMouseDown}
              onMouseLeave={stopDrag}
              onMouseUp={stopDrag}
              onMouseMove={onMouseMove}
              style={{
                display:'flex', gap:12, overflowX:'auto',
                cursor:'grab', paddingBottom:4, userSelect:'none',
              }}
            >
              {videos.map((v, i) => (
                <div
                  key={i}
                  className={`thumb-item`}
                  onClick={() => selectVideo(i)}
                  style={{
                    flexShrink:0, cursor:'pointer',
                    opacity: i === activeIdx ? 1 : 0.5,
                  }}
                >
                  {/* thumb wrapper */}
                  <div style={{
                    position:'relative', borderRadius:8, overflow:'hidden',
                    border: i === activeIdx
                      ? '2px solid #e00'
                      : '2px solid rgba(255,255,255,0.1)',
                    boxShadow: i === activeIdx
                      ? '0 0 0 1px #e00, 0 4px 16px rgba(220,0,0,.3)'
                      : 'none',
                    transition:'border .2s, box-shadow .2s',
                    width: 'clamp(90px,12vw,130px)',
                  }}>
                    <video
                      src={v.videoPath}
                      muted
                      loop
                      autoPlay
                      style={{ width:'100%', aspectRatio:'16/10',
                               objectFit:'cover', display:'block',
                               pointerEvents:'none' }}
                    />
                    {/* active overlay */}
                    {i === activeIdx && (
                      <div style={{
                        position:'absolute', inset:0,
                        background:'rgba(220,0,0,0.12)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                      }}>
                        <div style={{
                          width:24, height:24, borderRadius:'50%',
                          background:'rgba(220,0,0,0.85)',
                          display:'flex', alignItems:'center', justifyContent:'center',
                        }}>
                          <svg width="8" height="10" viewBox="0 0 8 10" fill="white">
                            <path d="M0 0l8 5-8 5V0z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* label */}
                  <p style={{
                    color: i === activeIdx ? '#fff' : 'rgba(255,255,255,0.4)',
                    fontSize:11, fontWeight: i === activeIdx ? 600 : 400,
                    textAlign:'center', margin:'8px 0 0',
                    letterSpacing:'.06em', textTransform:'uppercase',
                    fontFamily:"'Outfit',sans-serif",
                    transition:'color .2s',
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