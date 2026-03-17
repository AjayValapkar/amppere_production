// src/EnquiryPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imagePath from '../constant/imagePath';

/* ── Sun Icon ── */
const SunIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>   <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>     <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

/* ── Moon Icon ── */
const MoonIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
  </svg>
);

/* ── Floating Label Field ── */
const Field = ({ label, type = 'text', name, value, onChange, required, textarea, dark }) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div style={{ position: 'relative' }}>
      {/* animated border ring */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 8, pointerEvents: 'none',
        transition: 'all 0.25s',
        boxShadow: focused
          ? '0 0 0 1.5px #e00, inset 0 0 20px rgba(255,0,0,0.04)'
          : `0 0 0 1.5px ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.13)'}`,
        background: focused
          ? dark ? 'rgba(255,0,0,0.04)' : 'rgba(255,0,0,0.02)'
          : 'transparent',
      }} />

      <Tag
        name={name}
        type={!textarea ? type : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={textarea ? 5 : undefined}
        style={{
          width: '100%', boxSizing: 'border-box',
          background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
          border: 'none', borderRadius: 8, outline: 'none',
          color: dark ? '#fff' : '#111',
          fontFamily: "'Outfit', sans-serif", fontSize: 14,
          paddingTop: 24, paddingBottom: 10, paddingLeft: 14, paddingRight: 14,
          resize: textarea ? 'vertical' : undefined,
          caretColor: '#e00',
          transition: 'background 0.2s',
          minHeight: textarea ? 110 : undefined,
        }}
      />

      <label style={{
        position: 'absolute', left: 14, pointerEvents: 'none',
        top: active ? 8 : textarea ? 18 : '50%',
        transform: active ? 'none' : textarea ? 'none' : 'translateY(-50%)',
        fontSize: active ? 9 : 11,
        color: focused ? '#e00' : dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.38)',
        letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
        fontFamily: "'Outfit', sans-serif",
        transition: 'all 0.2s',
      }}>
        {label}{required && <span style={{ color: '#e00' }}> *</span>}
      </label>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════ */
export default function EnquiryPage() {
  const [dark, setDark] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading]   = useState(false);
  const [error,   setError]     = useState('');
  const [success, setSuccess]   = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('eq-theme');
    if (saved) setDark(saved === 'dark');
  }, []);

  const toggleTheme = () =>
    setDark(p => { localStorage.setItem('eq-theme', !p ? 'dark' : 'light'); return !p; });

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleClear = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setError(''); setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setSuccess('');
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/sendMail', formData, { headers: { 'Content-Type': 'application/json' } });
      setSuccess("Your enquiry has been sent. We'll get back to you shortly.");
      handleClear();
    } catch {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  /* ── theme tokens ── */
  const pageBg     = dark ? '#111' : '#f2f2f2';
  const heroBg     = dark
    ? 'linear-gradient(135deg,#0f0f0f 0%,#1a0000 55%,#0f0f0f 100%)'
    : 'linear-gradient(135deg,#1D102F 0%,#3d0000 55%,#1D102F 100%)';
  const cardBg     = dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.92)';
  const cardBorder = dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.10)';
  const textMain   = dark ? '#fff' : '#fff';          // hero always white
  const mapBorder  = dark ? '#222' : '#ddd';
  const mapShadow  = dark ? '0 12px 40px rgba(0,0,0,0.55)' : '0 6px 28px rgba(0,0,0,0.1)';

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .eq-root { font-family:'Outfit',sans-serif; }
        .eq-head { font-family:'Barlow Condensed',sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .au { animation:fadeUp .6s cubic-bezier(.22,1,.36,1) both; }
        .d1 { animation-delay:.08s; } .d2 { animation-delay:.16s; }
        .d3 { animation-delay:.24s; } .d4 { animation-delay:.32s; }
        .d5 { animation-delay:.40s; }

        @keyframes spin { to { transform:rotate(360deg); } }

        .send-btn {
          position:relative; overflow:hidden;
          background:linear-gradient(135deg,#cc0000,#ff2222);
          border:none; cursor:pointer; border-radius:8px;
          color:#fff; font-family:'Outfit',sans-serif;
          font-weight:700; font-size:14px; letter-spacing:.07em;
          padding:13px 36px;
          transition:all .3s ease;
        }
        .send-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
          transform:translateX(-100%); transition:transform .5s ease;
        }
        .send-btn:hover:not(:disabled)::before { transform:translateX(100%); }
        .send-btn:hover:not(:disabled) {
          box-shadow:0 8px 28px rgba(220,0,0,.4);
          transform:translateY(-1px);
        }
        .send-btn:disabled { opacity:.55; cursor:not-allowed; }

        .clear-btn {
          background:transparent; cursor:pointer; border-radius:8px;
          font-family:'Outfit',sans-serif; font-weight:500; font-size:14px;
          padding:13px 28px;
          transition:all .25s;
        }
        .clear-btn:hover { opacity:.7; }

        .map-img  { display:block; width:100%; transition:transform .55s ease; }
        .map-link:hover .map-img { transform:scale(1.015); }

        .toggle-btn {
          display:flex; align-items:center; gap:7px;
          border:none; cursor:pointer; border-radius:20px;
          font-family:'Outfit',sans-serif; font-weight:600;
          font-size:12px; letter-spacing:.06em;
          padding:8px 16px;
          transition:all .25s ease;
        }
        .toggle-btn:hover { opacity:.85; }

        /* smooth theme switch */
        .eq-root, .eq-root * {
          transition: background-color .3s ease, border-color .25s ease, color .2s ease,
                      box-shadow .3s ease !important;
        }
        input, textarea {
          transition: background .25s ease !important;
        }
      `}</style>

      <div className="eq-root" style={{ background: pageBg, minHeight: '100vh' }}>

        {/* ══════════════════════════════════════════
            HERO — left text | right form — side by side
        ══════════════════════════════════════════ */}
        <div style={{ background: heroBg, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>

          {/* ── top bar: toggle ── */}
          <div style={{ maxWidth: 1100, margin: '0 auto',
                        padding: '14px clamp(16px,4vw,40px) 0',
                        display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={toggleTheme}
              className="toggle-btn"
              style={{
                background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.18)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* ── hero content grid ── */}
          <div style={{
            maxWidth: 1100, margin: '0 auto',
            padding: 'clamp(28px,4vw,52px) clamp(16px,4vw,40px) clamp(32px,4vw,56px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(28px,4vw,56px)',
            alignItems: 'center',
          }}>

            {/* LEFT — text block */}
            <div>
              <p className="au eq-head"
                 style={{ color: '#e00', fontSize: 11, letterSpacing: '.32em',
                          textTransform: 'uppercase', margin: '0 0 12px', fontWeight: 600 }}>
                Get In Touch
              </p>

              <h1 className="au d1 eq-head"
                  style={{
                    fontSize: 'clamp(2.6rem,5.5vw,4.8rem)', fontWeight: 800,
                    lineHeight: 1, color: '#fff', margin: '0 0 8px',
                    letterSpacing: '-0.01em',
                  }}>
                SEND AN
                <br />
                <span style={{
                  WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                  color: 'transparent',
                }}>
                  ENQUIRY
                </span>
              </h1>

              {/* red rule */}
              <div className="au d2"
                   style={{ width: 48, height: 3, background: '#e00',
                            borderRadius: 2, margin: '18px 0 18px' }} />

              <p className="au d2"
                 style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px,1.6vw,15px)',
                          maxWidth: 400, lineHeight: 1.75, margin: 0 }}>
                Our team will respond within 24&nbsp;hours. Fill in the details and we'll get back to you with the best solution.
              </p>
            </div>

            {/* RIGHT — form card */}
            <div className="au d3"
                 style={{
                   background: cardBg,
                   border: `1px solid ${cardBorder}`,
                   backdropFilter: 'blur(16px)',
                   WebkitBackdropFilter: 'blur(16px)',
                   borderRadius: 14,
                   padding: 'clamp(20px,3vw,32px)',
                   boxShadow: dark
                     ? '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)'
                     : '0 12px 40px rgba(0,0,0,0.12)',
                 }}>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

                {/* name + email row */}
                <div style={{ display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
                  <Field label="Full Name"     name="name"  value={formData.name}
                         onChange={handleChange} required dark={dark} />
                  <Field label="Email Address" name="email" value={formData.email}
                         onChange={handleChange} type="email" required dark={dark} />
                </div>

                <Field label="Phone Number" name="phone" value={formData.phone}
                       onChange={handleChange} type="tel" dark={dark} />

                <Field label="Your Message" name="message" value={formData.message}
                       onChange={handleChange} textarea required dark={dark} />

                {/* feedback */}
                {error && (
                  <div style={{
                    background: dark ? '#1e0000' : '#fff0f0',
                    border: `1px solid ${dark ? '#5a0000' : '#fca5a5'}`,
                    borderRadius: 8, padding: '10px 14px',
                    color: dark ? '#f87171' : '#cc0000',
                    fontSize: 13, display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span>⚠</span> {error}
                  </div>
                )}
                {success && (
                  <div style={{
                    background: dark ? '#001a0a' : '#f0fdf4',
                    border: `1px solid ${dark ? '#0a5a2a' : '#86efac'}`,
                    borderRadius: 8, padding: '10px 14px',
                    color: dark ? '#4ade80' : '#166534',
                    fontSize: 13, display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span>✓</span> {success}
                  </div>
                )}

                {/* buttons */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 2 }}>
                  <button type="submit" className="send-btn" disabled={loading}>
                    {loading
                      ? <span style={{ display:'flex', alignItems:'center', gap:8 }}>
                          <svg style={{ animation:'spin 1s linear infinite' }} width="14" height="14"
                               fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                            <path fill="white" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"/>
                          </svg>
                          Sending…
                        </span>
                      : 'Send Enquiry →'
                    }
                  </button>
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={handleClear}
                    style={{
                      color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
                      border: `1.5px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.14)'}`,
                    }}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════
            MAP SECTION
        ══════════════════════════════════════════ */}
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          padding: 'clamp(32px,4vw,56px) clamp(16px,4vw,40px) clamp(36px,5vw,64px)',
        }}>

          {/* map header */}
          <div className="au d4"
               style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#e00',
                 letterSpacing: '.28em', textTransform: 'uppercase', margin: '0 0 4px' }}>
                Find Us
              </p>
              <h2 className="eq-head"
                  style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700,
                           color: dark ? '#fff' : '#111', margin: 0 }}>
                Our Location
              </h2>
            </div>

            <a href="https://maps.app.goo.gl/DP5cXrrRg5Awmg2a8?g_st=iw"
               target="_blank" rel="noopener noreferrer"
               style={{
                 color: '#e00', fontSize: 12, fontWeight: 600, letterSpacing: '.08em',
                 textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5,
                 border: `1.5px solid ${dark ? '#3a0000' : '#fca5a5'}`,
                 borderRadius: 6, padding: '8px 16px',
                 background: 'transparent',
                 transition: 'background .2s',
               }}
               onMouseEnter={e => e.currentTarget.style.background = dark ? '#1a0000' : '#fff5f5'}
               onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              Open in Maps ↗
            </a>
          </div>

          {/* address strip above map */}
          <div className="au d4"
               style={{
                 background: dark ? '#1a1a1a' : '#fff',
                 border: `1px solid ${dark ? '#2a2a2a' : '#e4e4e4'}`,
                 borderBottom: 'none',
                 borderRadius: '10px 10px 0 0',
                 padding: '12px 18px',
                 display: 'flex', alignItems: 'center', gap: 10,
               }}>
            <svg width="14" height="14" fill="#e00" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p style={{ color: dark ? '#999' : '#555', fontSize: 13, margin: 0, lineHeight: 1.5 }}>
              Shed no. 28/A, Survey no. 47, Hi-Tech Industrial Area,
              Alyali, Palghar 401404, Maharashtra, India
            </p>
          </div>

          {/* map image */}
          <div className="au d5"
               style={{
                 borderRadius: '0 0 12px 12px', overflow: 'hidden',
                 border: `1px solid ${mapBorder}`,
                 boxShadow: mapShadow,
               }}>
            <a href="https://maps.app.goo.gl/DP5cXrrRg5Awmg2a8?g_st=iw"
               target="_blank" rel="noopener noreferrer"
               className="map-link"
               style={{ display: 'block', overflow: 'hidden', position: 'relative' }}>
              <img
                src={imagePath.map}
                alt="Amppere Cable Location"
                className="map-img"
                style={{ maxHeight: 420, objectFit: 'cover' }}
              />
              {/* hover overlay */}
              <div className="map-overlay"
                   style={{
                     position: 'absolute', inset: 0,
                     background: 'rgba(180,0,0,0)',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     transition: 'background .4s',
                   }}
                   onMouseEnter={e => {
                     e.currentTarget.style.background = 'rgba(180,0,0,0.08)';
                     e.currentTarget.querySelector('.map-pill').style.opacity = '1';
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.background = 'rgba(180,0,0,0)';
                     e.currentTarget.querySelector('.map-pill').style.opacity = '0';
                   }}>
                <div className="map-pill"
                     style={{
                       opacity: 0, transition: 'opacity .3s',
                       background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)',
                       border: '1px solid rgba(255,255,255,0.2)',
                       borderRadius: 40, padding: '10px 22px',
                       color: '#fff', fontSize: 13, fontWeight: 600,
                       display: 'flex', alignItems: 'center', gap: 8,
                       fontFamily: "'Outfit',sans-serif",
                     }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor"
                       strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  View on Google Maps
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}