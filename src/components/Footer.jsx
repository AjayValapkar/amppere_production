// src/Footer.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imagePath from "../constant/imagePath";

const Footer = React.memo(() => {

  const quickLinks = [
    { label: 'Home',     to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Founder',  to: '/founder' },
    { label: 'Clients',  to: '/clients' },
    { label: 'Enquiry',  to: '/contact' },
  ];

  const products = [
    { label: 'Instrumentation Cables', to: '/product/Instrumentation Cables' },
    { label: 'Fire Alarm Cables',      to: '/product/Fire Alarm Cables' },
    { label: 'Fire Survival Cables',   to: '/product/Fire Survival Cables' },
    { label: 'Flexible Cables',        to: '/product/Flexible Cables' },
    { label: 'Power LT Cables',        to: '/product/Power LT Cable' },
  ];

  const socials = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/people/Amppere-Cable/61566408188370/',
      icon: imagePath.fb,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/amppere-cable',
      icon: imagePath.linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ampperecable',
      icon: imagePath.insta,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCUpTOAVXEGQzM34Eke8kNRA',
      icon: imagePath.youtube,
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .ft-root { font-family:'Outfit',sans-serif; }
        .ft-head { font-family:'Barlow Condensed',sans-serif; }

        .ft-link {
          color:rgba(255,255,255,0.5);
          text-decoration:none; font-size:14px;
          display:flex; align-items:center; gap:7px;
          padding:4px 0;
          transition:color .2s, padding-left .2s;
        }
        .ft-link:hover { color:#fff; padding-left:4px; }
        .ft-link::before {
          content:''; width:4px; height:4px; border-radius:50%;
          background:#e00; flex-shrink:0;
          opacity:0; transition:opacity .2s;
        }
        .ft-link:hover::before { opacity:1; }

        .ft-col-title {
          font-family:'Barlow Condensed',sans-serif;
          font-size:16px; font-weight:700; color:#fff;
          letter-spacing:.08em; text-transform:uppercase;
          margin:0 0 12px;
        }

        .ft-social {
          display:flex; align-items:center; gap:8px;
          color:rgba(255,255,255,0.5); text-decoration:none;
          font-size:13px; font-weight:500;
          border:1px solid rgba(255,255,255,0.1);
          border-radius:8px; padding:8px 14px;
          background:rgba(255,255,255,0.03);
          transition:all .25s;
        }
        .ft-social:hover {
          color:#fff; border-color:rgba(220,0,0,0.5);
          background:rgba(220,0,0,0.08);
          transform:translateY(-2px);
        }
        .ft-social img { width:16px; height:16px; object-fit:contain; flex-shrink:0; }

        .ft-contact-row {
          display:flex; gap:10px; align-items:flex-start;
          margin-bottom:14px;
        }
        .ft-contact-icon {
          width:32px; height:32px; border-radius:7px; flex-shrink:0;
          background:rgba(220,0,0,0.1); border:1px solid rgba(220,0,0,0.2);
          display:flex; align-items:center; justify-content:center;
          margin-top:1px;
        }
      `}</style>

      <footer className="ft-root"
              style={{ background:'#0d0d0d', borderTop:'1px solid #1e1e1e', color:'#fff' }}>

        {/* ── MAIN FOOTER BODY ── */}
        <div style={{ maxWidth:1100, margin:'0 auto',
                      padding:'clamp(40px,5vw,72px) clamp(16px,4vw,40px) 0' }}>

          {/* top grid */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
            gap:'clamp(28px,4vw,48px)',
            paddingBottom:'clamp(32px,4vw,52px)',
          }}>

            {/* ── COL 1: Brand ── */}
            <div style={{ gridColumn:'span 1' }}>
              <img src={imagePath.logo} alt="Amppere Cable"
                   style={{ height:'clamp(48px,8vw,72px)', width:'auto',
                            marginBottom:16, display:'block' }} />

              <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13,
                          lineHeight:1.8, marginBottom:20, maxWidth:260 }}>
                Leading manufacturer of Low Tension Copper Conductor Wires &amp; Cables.
                CE &amp; RoHS certified, made in Maharashtra, India.
              </p>

              {/* contact info */}
              <div>
                {/* email */}
                <div className="ft-contact-row">
                  <div className="ft-contact-icon">
                    <svg width="14" height="14" fill="none" stroke="#e00"
                         strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize:10, color:'#e00', letterSpacing:'.15em',
                                textTransform:'uppercase', fontWeight:600, margin:'0 0 2px' }}>
                      Email
                    </p>
                    <a href="mailto:infoampperecable@gmail.com"
                       style={{ color:'rgba(255,255,255,0.6)', fontSize:13,
                                textDecoration:'none', wordBreak:'break-all',
                                transition:'color .2s' }}
                       onMouseEnter={e => e.target.style.color='#fff'}
                       onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}>
                      infoampperecable@gmail.com
                    </a>
                  </div>
                </div>

                {/* phone */}
                <div className="ft-contact-row">
                  <div className="ft-contact-icon">
                    <svg width="14" height="14" fill="none" stroke="#e00"
                         strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.395-.03.75-.253.965-.598l1.93-3.112a1.1 1.1 0 00-.164-1.354l-2.52-2.52a1.1 1.1 0 00-1.43-.09l-1.42 1.065a9.04 9.04 0 01-4.357-4.357l1.065-1.42a1.1 1.1 0 00-.09-1.43L11.107 4.62a1.1 1.1 0 00-1.354-.164L6.64 6.387A1.6 1.6 0 006.042 7.352 15.96 15.96 0 003 5.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize:10, color:'#e00', letterSpacing:'.15em',
                                textTransform:'uppercase', fontWeight:600, margin:'0 0 2px' }}>
                      Phone
                    </p>
                    <a href="tel:+919370946510"
                       style={{ color:'rgba(255,255,255,0.6)', fontSize:13,
                                textDecoration:'none', transition:'color .2s' }}
                       onMouseEnter={e => e.target.style.color='#fff'}
                       onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}>
                      +91 9370946510
                    </a>
                  </div>
                </div>

                {/* address */}
                <div className="ft-contact-row">
                  <div className="ft-contact-icon">
                    <svg width="14" height="14" fill="#e00" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize:10, color:'#e00', letterSpacing:'.15em',
                                textTransform:'uppercase', fontWeight:600, margin:'0 0 2px' }}>
                      Address
                    </p>
                    <address style={{ color:'rgba(255,255,255,0.5)', fontSize:13,
                                      fontStyle:'normal', lineHeight:1.65 }}>
                      Shed no. 28/A, Survey no. 47,<br/>
                      Hi-Tech Industrial Area, Alyali,<br/>
                      Palghar 401404, Maharashtra, India
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* ── COL 2: Quick Links ── */}
            <div>
              <p className="ft-col-title">Quick Links</p>
              <div style={{ width:32, height:2, background:'#e00',
                            borderRadius:2, marginBottom:16 }} />
              <ul style={{ listStyle:'none', margin:0, padding:0 }}>
                {quickLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="ft-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 3: Products ── */}
            <div>
              <p className="ft-col-title">Our Products</p>
              <div style={{ width:32, height:2, background:'#e00',
                            borderRadius:2, marginBottom:16 }} />
              <ul style={{ listStyle:'none', margin:0, padding:0 }}>
                {products.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="ft-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── DIVIDER ── */}
          <div style={{ height:1,
                        background:'linear-gradient(to right,#e00,rgba(220,0,0,0.2),transparent)' }} />

          {/* ── BOTTOM BAR ── */}
          <div style={{
            padding:'clamp(18px,2.5vw,28px) 0',
            display:'flex', alignItems:'center',
            justifyContent:'space-between',
            flexWrap:'wrap', gap:16,
          }}>

            {/* social icons */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {socials.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="ft-social" aria-label={label}>
                  <img src={icon} alt={label} />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* copyright */}
            <p style={{ color:'rgba(255,255,255,0.3)', fontSize:12,
                        margin:0, display:'flex', alignItems:'center',
                        gap:6, flexWrap:'wrap', justifyContent:'center' }}>
              © 2025 Amppere Cable. Developed &amp; maintained by
              <a href="https://haloxion.com/" target="_blank" rel="noopener noreferrer"
                 style={{ display:'inline-flex', alignItems:'center' }}>
                <img src={imagePath.haloxion} alt="Haloxion"
                     style={{ height:20, width:'auto' }} />
              </a>
            </p>

          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;