// src/Clients.jsx
import React from 'react';
import imagePath from '../constant/imagePath';

const clients = [
  imagePath.comany1,  imagePath.comany2,  imagePath.comany3,
  imagePath.comany4,  imagePath.comany5,  imagePath.comany6,
  imagePath.comany9,  imagePath.comany10, imagePath.comany11,
  imagePath.comany12, imagePath.comany13, imagePath.review1,
  imagePath.review3,
];

const Clients = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .cl-root { font-family:'Outfit',sans-serif; }
        .cl-head { font-family:'Barlow Condensed',sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .au { animation:fadeUp .6s cubic-bezier(.22,1,.36,1) both; }
        .d1 { animation-delay:.07s; } .d2 { animation-delay:.14s; }
        .d3 { animation-delay:.21s; }

        /* client card */
        .cl-card {
          background:#1c1c1c;
          border:1px solid rgba(255,255,255,0.07);
          border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          padding:24px 20px;
          transition:border-color .25s, background .25s, transform .25s, box-shadow .25s;
          cursor:default;
        }
        .cl-card:hover {
          background:#242424;
          border-color:rgba(220,0,0,0.4);
          transform:translateY(-3px);
          box-shadow:0 8px 28px rgba(0,0,0,0.4), 0 0 0 1px rgba(220,0,0,0.15);
        }
        .cl-card img {
          max-width:100%; max-height:70px; object-fit:contain;
          transition:transform .25s;
        }
        .cl-card:hover img {
          transform:scale(1.06);
        }

        /* stagger grid children */
        .cl-grid > *:nth-child(1)  { animation-delay:.05s; }
        .cl-grid > *:nth-child(2)  { animation-delay:.10s; }
        .cl-grid > *:nth-child(3)  { animation-delay:.15s; }
        .cl-grid > *:nth-child(4)  { animation-delay:.20s; }
        .cl-grid > *:nth-child(5)  { animation-delay:.25s; }
        .cl-grid > *:nth-child(6)  { animation-delay:.30s; }
        .cl-grid > *:nth-child(7)  { animation-delay:.35s; }
        .cl-grid > *:nth-child(8)  { animation-delay:.40s; }
        .cl-grid > *:nth-child(9)  { animation-delay:.45s; }
        .cl-grid > *:nth-child(10) { animation-delay:.50s; }
        .cl-grid > *:nth-child(11) { animation-delay:.55s; }
        .cl-grid > *:nth-child(12) { animation-delay:.60s; }
        .cl-grid > *:nth-child(13) { animation-delay:.65s; }
      `}</style>

      <div className="cl-root" style={{ background:'#111', color:'#fff', minHeight:'100vh' }}>

        {/* ── HERO HEADER ── */}
        <div style={{
          background:'linear-gradient(135deg,#0f0f0f 0%,#1a0000 55%,#0f0f0f 100%)',
          borderBottom:'1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{
            maxWidth:1100, margin:'0 auto',
            padding:'clamp(44px,5vw,76px) clamp(16px,4vw,40px) clamp(36px,4vw,64px)',
          }}>
            <p className="au cl-head"
               style={{ color:'#e00', fontSize:11, letterSpacing:'.32em',
                        textTransform:'uppercase', margin:'0 0 12px', fontWeight:600 }}>
              Trusted By
            </p>

            <h1 className="au d1 cl-head"
                style={{ fontSize:'clamp(2.6rem,5.5vw,4.8rem)', fontWeight:800,
                         lineHeight:1, color:'#fff', margin:'0 0 8px',
                         letterSpacing:'-0.01em' }}>
              OUR
              <br />
              <span style={{ WebkitTextStroke:'2px rgba(255,255,255,0.18)',
                             color:'transparent' }}>
                CLIENTS
              </span>
            </h1>

            {/* red rule */}
            <div className="au d2"
                 style={{ width:48, height:3, background:'#e00',
                          borderRadius:2, margin:'18px 0 18px' }} />

            <p className="au d2"
               style={{ color:'rgba(255,255,255,0.45)', fontSize:'clamp(13px,1.6vw,15px)',
                        maxWidth:440, lineHeight:1.75, margin:0 }}>
              Proudly serving leading industrial houses across India and beyond.
            </p>
          </div>
        </div>

        {/* ── CLIENTS GRID ── */}
        <div style={{ maxWidth:1100, margin:'0 auto',
                      padding:'clamp(36px,5vw,64px) clamp(16px,4vw,40px)' }}>

          {/* count badge */}
          <div className="au d3"
               style={{ display:'flex', alignItems:'center', gap:10, marginBottom:28 }}>
            <div style={{ width:3, height:20, background:'#e00', borderRadius:2 }} />
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13, margin:0, fontWeight:500 }}>
              <span style={{ color:'#fff', fontWeight:700 }}>{clients.length}+</span> clients
              &nbsp;&amp; growing
            </p>
          </div>

          {/* grid */}
          <div
            className="cl-grid"
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(clamp(120px,18vw,200px), 1fr))',
              gap:14,
            }}
          >
            {clients.map((src, i) => (
              <div key={i} className="cl-card au">
                <img src={src} alt={`Client ${i + 1}`} />
              </div>
            ))}
          </div>

          {/* ── AND MANY MORE ── */}
          <div style={{
            marginTop:32, display:'flex', alignItems:'center',
            justifyContent:'center', gap:14,
          }}>
            <div style={{ flex:1, height:1,
                          background:'linear-gradient(to right, transparent, rgba(255,255,255,0.1))' }} />
            <p style={{
              color:'rgba(255,255,255,0.35)', fontSize:13, fontWeight:600,
              letterSpacing:'.14em', textTransform:'uppercase', margin:0,
              whiteSpace:'nowrap',
            }}>
              And Many More
            </p>
            <div style={{ flex:1, height:1,
                          background:'linear-gradient(to left, transparent, rgba(255,255,255,0.1))' }} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Clients;