// src/Founder.jsx
import React from 'react';
import imagePath from '../constant/imagePath';

const Founder = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .fn-root { font-family:'Outfit',sans-serif; }
        .fn-head { font-family:'Barlow Condensed',sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .au  { animation:fadeUp .6s cubic-bezier(.22,1,.36,1) both; }
        .d1  { animation-delay:.08s; } .d2 { animation-delay:.16s; }
        .d3  { animation-delay:.24s; } .d4 { animation-delay:.32s; }
        .d5  { animation-delay:.40s; } .d6 { animation-delay:.48s; }

        /* profile ring pulse */
        @keyframes ringPulse {
          0%   { transform:scale(1);   opacity:.5; }
          100% { transform:scale(1.12); opacity:0; }
        }
        .profile-ring::after {
          content:''; position:absolute; inset:-6px; border-radius:50%;
          border:2px solid rgba(220,0,0,.5);
          animation:ringPulse 2.4s ease-out infinite;
        }

        /* quote mark */
        .quote-mark {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(60px,10vw,100px); font-weight:800;
          color:rgba(220,0,0,0.15); line-height:1;
          position:absolute; top:-10px; left:-6px;
          pointer-events:none; user-select:none;
        }

        /* badge */
        .badge {
          display:inline-flex; align-items:center; gap:6px;
          border-radius:20px; padding:5px 12px;
          font-family:'Outfit',sans-serif; font-size:11px;
          font-weight:600; letter-spacing:.1em; text-transform:uppercase;
          border:1px solid rgba(220,0,0,.35);
          background:rgba(220,0,0,.08); color:#ff6060;
        }

        /* highlight text */
        .hl { color:#ff5050; font-weight:500; }
      `}</style>

      <div className="fn-root" style={{ background:'#111', color:'#fff' }}>

        {/* ══════════════════════════════════════
            HERO — name + profile side by side
        ══════════════════════════════════════ */}
        <div style={{
          background:'linear-gradient(135deg,#0f0f0f 0%,#1a0000 55%,#0f0f0f 100%)',
          borderBottom:'1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{
            maxWidth:1100, margin:'0 auto',
            padding:'clamp(40px,5vw,72px) clamp(16px,4vw,40px)',
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',
            gap:'clamp(32px,5vw,64px)',
            alignItems:'center',
          }}>

            {/* LEFT — text */}
            <div>
              <p className="au fn-head"
                 style={{ color:'#e00', fontSize:11, letterSpacing:'.32em',
                          textTransform:'uppercase', margin:'0 0 14px', fontWeight:600 }}>
                Leadership
              </p>

              <h1 className="au d1 fn-head"
                  style={{ fontSize:'clamp(2.4rem,5vw,4.4rem)', fontWeight:800,
                           lineHeight:1.02, color:'#fff', margin:'0 0 8px',
                           letterSpacing:'-0.01em' }}>
                MR. SANDEEP
                <br />
                <span style={{ WebkitTextStroke:'2px rgba(255,255,255,0.18)',
                               color:'transparent' }}>
                  SAWANT
                </span>
              </h1>

              {/* red rule */}
              <div className="au d2"
                   style={{ width:48, height:3, background:'#e00',
                            borderRadius:2, margin:'18px 0 18px' }} />

              <p className="au d2"
                 style={{ color:'rgba(255,255,255,0.5)', fontSize:'clamp(13px,1.6vw,15px)',
                          lineHeight:1.7, margin:'0 0 20px' }}>
                Founder &amp; Managing Director, Amppere Cable
              </p>

              {/* badges */}
              <div className="au d3"
                   style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {['ISO 9001:2008', 'CE Certified', 'RoHS Certified'].map(b => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </div>

            {/* RIGHT — profile image */}
            <div className="au d2"
                 style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
              <div style={{ position:'relative', display:'inline-block' }}>

                {/* outer decorative ring */}
                <div className="profile-ring" style={{ position:'relative', display:'inline-block' }}>
                  <div style={{
                    position:'absolute', inset:-12, borderRadius:'50%',
                    border:'1px solid rgba(220,0,0,0.2)',
                  }} />
                  <div style={{
                    position:'absolute', inset:-24, borderRadius:'50%',
                    border:'1px dashed rgba(220,0,0,0.1)',
                  }} />

                  {/* profile photo */}
                  <div style={{
                    width:'clamp(160px,22vw,240px)',
                    height:'clamp(160px,22vw,240px)',
                    borderRadius:'50%',
                    border:'3px solid #e00',
                    boxShadow:'0 0 0 6px rgba(220,0,0,0.12), 0 20px 60px rgba(0,0,0,0.6)',
                    overflow:'hidden',
                    background:'#1a1a1a',
                    position:'relative', zIndex:1,
                  }}>
                    <img
                      src={imagePath.profile}
                      alt="Mr. Sandeep Sawant"
                      style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                    />
                  </div>
                </div>

                {/* floating experience tag */}
                <div style={{
                  position:'absolute', bottom:-8, right:-8, zIndex:10,
                  background:'#e00', borderRadius:8,
                  padding:'8px 14px',
                  boxShadow:'0 6px 20px rgba(220,0,0,0.4)',
                  fontFamily:"'Outfit',sans-serif",
                  textAlign:'center',
                }}>
                  <p style={{ fontSize:18, fontWeight:800, color:'#fff',
                              margin:0, lineHeight:1, fontFamily:"'Barlow Condensed',sans-serif" }}>
                    20+
                  </p>
                  <p style={{ fontSize:9, fontWeight:600, color:'rgba(255,255,255,0.8)',
                              margin:0, letterSpacing:'.1em', textTransform:'uppercase' }}>
                    Years Exp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CONTENT SECTION
        ══════════════════════════════════════ */}
        <div style={{ maxWidth:1100, margin:'0 auto',
                      padding:'clamp(40px,5vw,72px) clamp(16px,4vw,40px)' }}>

          <div style={{ display:'grid',
                        gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
                        gap:'clamp(20px,3vw,32px)' }}>

            {/* card 1 */}
            <div className="au d3"
                 style={{
                   background:'rgba(255,255,255,0.03)',
                   border:'1px solid rgba(255,255,255,0.08)',
                   borderTop:'3px solid #e00',
                   borderRadius:12,
                   padding:'clamp(20px,2.5vw,28px)',
                   position:'relative', overflow:'hidden',
                 }}>
              <span className="quote-mark">"</span>
              <p className="fn-head"
                 style={{ fontSize:15, fontWeight:700, color:'#fff',
                          letterSpacing:'.05em', textTransform:'uppercase',
                          margin:'0 0 12px', position:'relative', zIndex:1 }}>
                The Vision
              </p>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:14,
                          lineHeight:1.85, margin:0, position:'relative', zIndex:1 }}>
                Sandeep Sawant, armed with a diploma in Electrical Engineering and driven by a
                passion for innovation, founded Amppere Cable with a vision to{' '}
                <span className="hl">revolutionize the wire and cable industry.</span>
              </p>
            </div>

            {/* card 2 */}
            <div className="au d4"
                 style={{
                   background:'rgba(255,255,255,0.03)',
                   border:'1px solid rgba(255,255,255,0.08)',
                   borderTop:'3px solid #e00',
                   borderRadius:12,
                   padding:'clamp(20px,2.5vw,28px)',
                   position:'relative', overflow:'hidden',
                 }}>
              <span className="quote-mark">"</span>
              <p className="fn-head"
                 style={{ fontSize:15, fontWeight:700, color:'#fff',
                          letterSpacing:'.05em', textTransform:'uppercase',
                          margin:'0 0 12px', position:'relative', zIndex:1 }}>
                The Journey
              </p>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:14,
                          lineHeight:1.85, margin:0, position:'relative', zIndex:1 }}>
                Despite the challenges of entering a competitive market, Amppere Cable quickly
                gained traction under Sandeep's astute leadership. Over{' '}
                <span className="hl">four years of independent production</span>, his technical
                expertise and unwavering commitment have guided the company through various
                obstacles, fostering resilience and adaptability.
              </p>
            </div>

            {/* card 3 */}
            <div className="au d5"
                 style={{
                   background:'rgba(255,255,255,0.03)',
                   border:'1px solid rgba(255,255,255,0.08)',
                   borderTop:'3px solid #e00',
                   borderRadius:12,
                   padding:'clamp(20px,2.5vw,28px)',
                   position:'relative', overflow:'hidden',
                 }}>
              <span className="quote-mark">"</span>
              <p className="fn-head"
                 style={{ fontSize:15, fontWeight:700, color:'#fff',
                          letterSpacing:'.05em', textTransform:'uppercase',
                          margin:'0 0 12px', position:'relative', zIndex:1 }}>
                The Achievement
              </p>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:14,
                          lineHeight:1.85, margin:0, position:'relative', zIndex:1 }}>
                Today, Amppere Cable is recognized for its{' '}
                <span className="hl">high-quality, specialized cables</span> — Instrumentation,
                Fire Alarm, and Fire Survival Cables. Sandeep's vision is poised to elevate
                Amppere Cable to new heights in national and international markets.
              </p>
            </div>
          </div>

          {/* ── FULL-WIDTH QUOTE BLOCK ── */}
          <div className="au d6"
               style={{
                 marginTop:'clamp(24px,3vw,40px)',
                 background:'linear-gradient(135deg,rgba(220,0,0,0.08),rgba(220,0,0,0.03))',
                 border:'1px solid rgba(220,0,0,0.2)',
                 borderLeft:'4px solid #e00',
                 borderRadius:'0 12px 12px 0',
                 padding:'clamp(18px,2.5vw,28px) clamp(20px,3vw,36px)',
                 display:'flex', alignItems:'flex-start', gap:16, flexWrap:'wrap',
               }}>
            <svg style={{ flexShrink:0, marginTop:2 }} width="20" height="20"
                 fill="#e00" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'clamp(13px,1.6vw,15px)',
                        lineHeight:1.8, margin:0, flex:1, minWidth:220 }}>
              His leadership has not only earned the trust of leading industrial houses but has also
              positioned Amppere Cable as an{' '}
              <strong style={{ color:'#fff' }}>ISO-9001:2008 accredited organization</strong> with
              CE and RoHS certified products —{' '}
              <span className="hl">setting new standards in the industry.</span>
            </p>
          </div>
        </div>

       

      </div>
    </>
  );
};

export default Founder;