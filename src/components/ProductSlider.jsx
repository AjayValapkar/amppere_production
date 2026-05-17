import React, { useState, useEffect, useRef } from 'react';
import { productData } from '../constant/productData';
import { Link } from 'react-router-dom';

const EXCLUDE = 'Fire Alarm Cables';

/* ── Arrow buttons ── */
const Arrow = ({ dir, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === 'prev' ? 'Previous' : 'Next'}
    className={`
      flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2
      transition-all duration-200 focus:outline-none flex-shrink-0 bg-[#E91F1F]
      ${disabled
        ? 'border-gray-600 text-gray-600 cursor-not-allowed opacity-40'
        : 'border-white text-white hover:bg-white hover:text-[#6b0f0f] cursor-pointer'}
    `}
  >
    {dir === 'prev'
      ? <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7" /></svg>
      : <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
    }
  </button>
);

/* ── Single product card — matches image exactly ── */
const ProductCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '16px',
        padding: '20px 20px 24px 20px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'box-shadow 0.4s ease',
        minHeight: '420px',
        userSelect: 'none',
      }}
    >
      {/* ── Image tile — blue-gradient bg with rounded corners ── */}
      <div
        style={{
          borderRadius: '1px',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #b0c8e8 0%, #2a4a8a 55%, #1a2f6a 100%)',
          flex: '0 0 auto',
          height: '260px',
          position: 'relative',
        }}
      >
        <img
          src={item.headerImg}
          alt={item.productName}
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center bottom',
            display: 'block',
            transformOrigin: 'center bottom',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(.22,1,.36,1)',
          }}
        />
      </div>

      {/* ── Description text ── */}
      <p
        style={{
          color: '#000000',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          margin: '20px 0 0 0',
          flexGrow: 1,
          fontFamily: 'sans-serif',
          fontWeight: 400,
        }}
      >
        {item.description
          ? item.description.length > 100
            ? item.description.slice(0, 100) + '…'
            : item.description
          : `${item.productName} engineered for optimal performance, durability, and safety in demanding environments.`
        }
      </p>

      {/* ── Divider ── */}
      <div
        style={{
          height: '1px',
          background: '#010000',
          margin: '20px 0 16px',
          flexShrink: 0,
        }}
      />

      {/* ── "View More →" footer ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: '#E91F1F',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.01em',
            transform: hovered ? 'translateX(10px)' : 'translateX(0)',
            transition: 'transform 0.35s cubic-bezier(.22,1,.36,1), color 0.25s',
          }}
        >
          View More
        </span>

        {/* Long arrow — exactly like the image */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            opacity: hovered ? 1 : 0.75,
            transform: hovered ? 'translateX(-10px)' : 'translateX(0)',
            transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(.22,1,.36,1)',
          }}
        >
          {/* long line */}
          <div style={{ width: '36px', height: '2px', background: '#E91F1F', borderRadius: '2px' }} />
          {/* arrowhead */}
          <svg viewBox="0 0 12 12" width="10" height="10" fill="none"
               stroke="#E91F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6h8M6 2l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   MAIN SLIDER
════════════════════════════════════════════ */
const ProductSlider = ({ items = null, title = 'OUR PRODUCTS' }) => {
  const [products, setProducts]   = useState([]);
  const [index, setIndex]         = useState(0);
  const [perView, setPerView]     = useState(4);
  const [dragging, setDragging]   = useState(false);
  const [dragStart, setDragStart] = useState(null);

  /* use provided items or fallback to random selection */
  useEffect(() => {
    if (Array.isArray(items)) {
      setProducts(items);
      setIndex(0);
      return;
    }

    const pool   = productData.filter(p => p.productName !== EXCLUDE);
    const picked = [];
    const used   = new Set();
    while (picked.length < Math.min(8, pool.length) && used.size < pool.length) {
      const i = Math.floor(Math.random() * pool.length);
      if (!used.has(i)) { used.add(i); picked.push(pool[i]); }
    }
    setProducts(picked);
  }, [items]);

  /* responsive perView */
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024)     setPerView(4);
      else if (w >= 768) setPerView(3);
      else if (w >= 540) setPerView(2);
      else               setPerView(1);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex = Math.max(0, products.length - perView);
  const canPrev  = index > 0;
  const canNext  = index < maxIndex;
  const prev     = () => setIndex(i => Math.max(0, i - 1));
  const next     = () => setIndex(i => Math.min(maxIndex, i + 1));

  /* drag / swipe */
  const onDragStart = (x) => { setDragging(true); setDragStart(x); };
  const onDragEnd   = (x) => {
    if (!dragging || dragStart === null) return;
    const diff = dragStart - x;
    if (diff > 40)       next();
    else if (diff < -40) prev();
    setDragging(false); setDragStart(null);
  };

  const cardPct = 100 / perView;

  if (products.length === 0) {
    return (
      <section
        style={{
          width: '100%',
          background: '#f6f4f4',
          padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,3.5rem)',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '4rem 0',
          }}
        >
          <h2 style={{ color: '#000000', fontWeight: 800, margin: 0,
                       fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', lineHeight: 1.1 }}>
            {title.split(' ')[0]} <span style={{ color: '#E91F1F' }}>{title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p style={{ color: '#4a4a4a', marginTop: '1rem', fontSize: '1rem', lineHeight: '1.7' }}>
            No products found for this category. Please choose another category.
          </p>
        </div>
      </section>
    );
  }

  return (
    /* ── full-width dark maroon background ── */
    <section
      style={{
        width: '100%',
        background: '#f6f4f4',
        padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,3.5rem)',
        boxSizing: 'border-box',
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 'clamp(1.5rem,3vw,2.5rem)',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2 style={{ color: '#000000', fontWeight: 800, margin: 0,
                       fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', lineHeight: 1.1 }}>
            {title.split(' ')[0]} <span style={{ color: '#E91F1F' }}>{title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Arrow dir="prev" onClick={prev} disabled={!canPrev} />
          <Arrow dir="next" onClick={next} disabled={!canNext} />
        </div>
      </div>

      {/* ── TRACK ── */}
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', overflow: 'hidden' }}
        onMouseDown={e => onDragStart(e.clientX)}
        onMouseUp={e => onDragEnd(e.clientX)}
        onMouseLeave={() => { setDragging(false); setDragStart(null); }}
        onTouchStart={e => onDragStart(e.touches[0].clientX)}
        onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
      >
        <div
          style={{
            display: 'flex',
            transform: `translateX(-${index * cardPct}%)`,
            transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(.22,1,.36,1)',
            willChange: 'transform',
          }}
        >
          {products.map((item, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: `${cardPct}%`,
                padding: '0 8px',
              }}
            >
              <Link
                to={`/product/${encodeURIComponent(item.productName)}`}
                style={{ textDecoration: 'none' }}
                tabIndex={-1}
              >
                <ProductCard item={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── DOTS ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              height: '7px',
              width: i === index ? '28px' : '7px',
              borderRadius: '100px',
              background: i === index ? '#E91F1F' : 'rgba(255,255,255,0.30)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* ── VIEW ALL ── */}
      {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <button
            style={{
              border: '2px solid rgba(255,255,255,0.6)',
              background: 'transparent',
              color: '#fff',
              borderRadius: '8px',
              padding: '10px 36px',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'background 0.25s, border-color 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#6b0f0f';
              e.currentTarget.style.borderColor = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
            }}
          >
            View All Products
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default ProductSlider;
