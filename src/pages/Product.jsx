import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import imagePath from '../constant/imagePath';
import { productData } from '../constant/productData';
import ProductSlider from '../components/ProductSlider';

/* ── Breadcrumb bar ── */
const Breadcrumb = ({ productName }) => (
  <div className="w-full bg-[#cc1111] px-4 sm:px-8 py-2.5">
    <div className="max-w-screen-xl mx-auto flex items-center gap-1.5 flex-wrap">
      <Link to="/products"
        className="text-white text-xs sm:text-sm font-semibold hover:underline whitespace-nowrap">
        Products
      </Link>
      <svg className="w-3 h-3 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-white/80 text-xs sm:text-sm whitespace-nowrap">Fire Safety</span>
      <svg className="w-3 h-3 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{productName}</span>
    </div>
  </div>
);

/* ── Section block ── */
const Section = ({ title, children }) => (
  <div className="py-5 border-b border-[#cc1111] last:border-b-0">
    <p className="text-[#cc1111] font-bold text-sm sm:text-base mb-2">{title} :</p>
    {children}
  </div>
);

const Product = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => productData.find(item => item.productName === productName),
    [productName]
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-500">
        <p className="text-xl font-semibold">Product not found</p>
        <Link to="/products" className="mt-4 text-[#880000] underline text-sm">← Back to Products</Link>
      </div>
    );
  }

  const { data, headerImg, detailsImg, description } = product;

  /* Split data into sections */
  const intro = data.find(d => d.title?.toLowerCase().includes('intro'));
  const applications = data.find(d => d.title?.toLowerCase().includes('applic'));
  const features = data.find(d => d.title?.toLowerCase().includes('feature'));
  const whyCables = data.find(d => d.title?.toLowerCase().includes('why'));
  /* Any remaining sections */
  const others = data.filter(d => ![intro, applications, features, whyCables].includes(d));

  /* Helper: render description — if array show bullets, else plain text */
  const renderDesc = (desc) => {
    if (!desc) return null;
    if (Array.isArray(desc)) {
      return (
        <ul className="space-y-1 text-gray-700 text-sm sm:text-base leading-relaxed">
          {desc.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">{desc}</p>
    );
  };

  return (
    <div className="w-full">

      {/* ── BREADCRUMB ── */}
      <Breadcrumb productName={productName} />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-screen-xl mx-auto px-0">
        <div className="flex flex-col md:flex-row items-stretch">

          {/* ── LEFT: Product image on blue-gradient background ── */}
          <div
            className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0 overflow-hidden
                       flex items-end justify-center min-h-[260px] sm:min-h-[340px] md:min-h-0"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #c5d8ee 50%, #3d6bb5 100%)',
            }}
          >
            <img
              src={headerImg}
              alt={productName}
              draggable={false}
              className="w-auto h-[230px] sm:h-[300px] md:h-[380px] lg:h-[440px]
                         object-contain object-bottom"
            />
          </div>

          {/* ── RIGHT: Content card ── */}
          <div
            style={{
            background: 'linear-gradient(165deg, #ffffff 0%, #ffffff 35%, #c5d8ee 60%, #9cacc5 100%)'

            }}
            className="flex-1 overflow-hidden flex flex-col pl-4">

            {/* Card header row */}
            <div className="relative flex items-start px-5 sm:px-8 pt-6 pb-4 border-b border-gray-100">
              <div className="flex-1 pr-8 text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold
                               text-[#1a1a6e] leading-tight">
                  {productName}
                </h1>
                {description && (
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-2xl mx-auto">
                    {description}
                  </p>
                )}
              </div>

              {/* Close / back button */}
              <button
                onClick={() => navigate(-1)}
                aria-label="Go back"
                className="absolute top-5 right-4 sm:right-6
                           w-8 h-8 flex items-center justify-center
                           text-gray-500 hover:text-red-600
                           text-xl font-bold leading-none
                           rounded hover:bg-gray-100
                           transition-colors focus:outline-none flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 pb-6"
              style={{ maxHeight: '520px' }}>

              {/* Introduction */}
              {intro && (
                <Section title={intro.title}>
                  {renderDesc(intro.description)}
                </Section>
              )}

              {/* Applications */}
              {applications && (
                <Section title={applications.title}>
                  {renderDesc(applications.description)}
                </Section>
              )}

              {/* Features */}
              {features && (
                <Section title={features.title}>
                  {renderDesc(
                    Array.isArray(features.description)
                      ? features.description
                      : features.description?.split(/[,;]\s*|\n/).filter(Boolean)
                  )}
                </Section>
              )}

              {/* Why our Cables */}
              {whyCables && (
                <Section title={whyCables.title}>
                  {renderDesc(whyCables.description)}
                </Section>
              )}

              {/* Any other sections */}
              {others.map(item => (
                <Section key={item.id} title={item.title}>
                  {renderDesc(item.description)}
                </Section>
              ))}

              {/* Enquiry CTA */}
              <div className="pt-5">
                <Link to="/contact">
                  <button className="px-6 py-2.5 border-2 border-[#880000] text-[#880000]
                                     rounded-lg text-sm font-bold
                                     hover:bg-[#880000] hover:text-white
                                     active:scale-95
                                     transition-all duration-300">
                    Send Enquiry
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── RED DIVIDER ── */}
      <div className="h-2 sm:h-3 w-full bg-[#880000]" />

      {/* ── RELATED PRODUCTS ── */}
      <ProductSlider />
    </div>
  );
};

export default Product;
