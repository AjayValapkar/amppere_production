import{r as n,j as e,R as y,i as o}from"./index-DToIeF2P.js";const s=[{id:1,title:"Fire Survival Cable",description:"Our extensive cable product line is engineered to meet the highest standards in the industry.",imageUrl:o.banner1},{id:2,title:"Optical Fiber",description:"Delivering high-performance optical fiber cables for fast and reliable data transmission.",imageUrl:o.banner2},{id:3,title:"Power Cables",description:"Durable power cables designed to meet diverse industrial needs with the utmost reliability.",imageUrl:o.banner3},{id:4,title:"Instrumentation Cables",description:"Precision instrumentation cables engineered for accuracy in the most demanding environments.",imageUrl:o.banner4},{id:5,title:"Flexible Cables",description:"Highly flexible cables crafted to withstand continuous movement and mechanical stress.",imageUrl:o.banner5}],f=[{value:"30+",label:`Years Of
Experience`},{value:"100+",label:`Number Of
Clients`},{value:"3500K+",label:`Total Cable Length
Manufactured (Mtr)`}],v=5e3;function R(){const[r,w]=n.useState(0),[d,x]=n.useState(!0),[j,p]=n.useState(0),l=n.useRef(null),a=n.useRef(null),u=n.useRef(null),h=n.useRef(r);h.current=r;const b=()=>{cancelAnimationFrame(a.current),p(0),u.current=performance.now();const t=i=>{const g=Math.min((i-u.current)/v*100,100);p(g),g<100&&(a.current=requestAnimationFrame(t))};a.current=requestAnimationFrame(t)},c=t=>{x(!1),setTimeout(()=>{w(t),x(!0),b()},400)},m=()=>{clearInterval(l.current),l.current=setInterval(()=>{c((h.current+1)%s.length)},v)};n.useEffect(()=>(b(),m(),()=>{clearInterval(l.current),cancelAnimationFrame(a.current)}),[]);const N=()=>{clearInterval(l.current),cancelAnimationFrame(a.current);const t=(r-1+s.length)%s.length;c(t),m()},k=()=>{clearInterval(l.current),cancelAnimationFrame(a.current);const t=(r+1)%s.length;c(t),m()};return e.jsxs("div",{className:"relative w-full h-[40vw] min-h-[220px] max-h-[92vh] overflow-hidden bg-black select-none",children:[s.map((t,i)=>e.jsxs("div",{className:"absolute inset-0 transition-opacity duration-700 ease-in-out",style:{opacity:i===r?1:0},children:[e.jsx("img",{src:t.imageUrl,alt:t.title,draggable:!1,className:"w-full h-full object-cover object-center block"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"})]},t.id)),e.jsx("div",{className:`absolute inset-0 z-10 flex items-center pointer-events-none\r
                      px-4 pb-4\r
                      sm:px-10 sm:pb-0\r
                      md:px-10 md:pb-0\r
                      lg:px-10 lg:pb-0`,children:e.jsx("div",{className:"max-w-lg transition-all duration-[400ms] ease-out",style:{opacity:d?1:0,transform:d?"translateY(0px)":"translateY(20px)"},children:e.jsx("p",{className:`hidden sm:block text-white leading-relaxed\r
                        text-sm sm:text-md md:text-lg\r
                        drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] max-w-sm md:max-w-md`,children:s[r].description})})}),e.jsxs("div",{className:`absolute z-20 flex items-end justify-between flex-wrap gap-2 -pb-4 md:pb-8\r
                      bottom-4 left-2 right-2\r
                      sm:bottom-8 sm:left-6 sm:right-6\r
                      md:bottom-8 md:left-8 md:right-8\r
                      lg:bottom-8 lg:left-10 lg:right-10`,children:[e.jsxs("div",{className:`relative flex items-stretch\r
                        md:bg-white/10 backdrop-blur-md\r
                        border border-white/30\r
                        rounded-2xl\r
                        overflow-hidden\r
                        shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)]`,children:[e.jsx("div",{className:`pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full\r
                          md:bg-white/5 blur-2xl`}),e.jsx("div",{className:`pointer-events-none absolute inset-0\r
                          bg-gradient-to-br from-white/20 via-white/5 to-transparent`}),f.map((t,i)=>e.jsxs(y.Fragment,{children:[e.jsxs("div",{className:`flex flex-col justify-center\r
                              px-3 py-2\r
                              sm:px-5 sm:py-3\r
                              md:px-7 md:py-4\r
                              lg:px-9 lg:py-5\r
                              gap-0.5 sm:gap-1`,children:[e.jsx("span",{className:`text-white font-black leading-none whitespace-nowrap\r
                                 text-base sm:text-xl md:text-2xl lg:text-[2rem]`,children:t.value}),e.jsx("span",{className:`text-gray-300 whitespace-pre-line leading-snug\r
                                 text-[9px] sm:text-[11px] md:text-xs`,children:t.label})]}),i<f.length-1&&e.jsx("div",{className:"self-center h-[30px] md:h-[50px] w-[3px] my-2 sm:my-3 bg-white/90 flex-shrink-0"})]},t.value))]}),e.jsxs("div",{className:`flex flex-col items-center sm:items-stretch\r
                        bg-transparent sm:bg-white/10\r
                        border-transparent sm:border-l sm:border-r sm:border-b/10 sm:border-white/30\r
                        shadow-none sm:shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)]\r
                        rounded-none sm:rounded-xl\r
                        px-0 py-0\r
                        sm:px-6 sm:py-2.5\r
                        md:px-7 md:py-3\r
                        gap-2\r
                        flex-shrink-0\r
                        w-full sm:w-auto`,children:[e.jsxs("div",{className:"hidden sm:flex items-center gap-1 sm:gap-1",children:[e.jsx("button",{onClick:N,"aria-label":"Previous slide",className:`bg-transparent border-0 p-0 cursor-pointer\r
                         text-white hover:text-red-400\r
                         transition-all duration-200 \r
                         hover:-translate-x-0.5\r
                         focus:outline-none flex items-center`,children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4 sm:w-[18px] sm:h-[18px]",children:e.jsx("path",{d:"M19 12H5M5 12l7-7M5 12l7 7"})})}),e.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 h-[18px] min-w-[120px] sm:min-w-[150px]",children:[e.jsx("span",{className:"h-px flex-1 bg-white/60"}),e.jsxs("span",{className:`text-white font-semibold leading-none whitespace-nowrap\r
                               text-xs sm:text-sm tracking-wide`,children:[r+1,"/",s.length]}),e.jsx("span",{className:"h-px flex-1 bg-white/60"})]}),e.jsx("button",{onClick:k,"aria-label":"Next slide",className:`bg-transparent border-0 p-0 cursor-pointer\r
                         text-white hover:text-red-400\r
                         transition-all duration-200\r
                         hover:translate-x-0.5\r
                         focus:outline-none flex items-center`,children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4 sm:w-[18px] sm:h-[18px]",children:e.jsx("path",{d:"M5 12h14M14 5l7 7-7 7"})})})]}),e.jsx("div",{className:"w-20 md:w-40 mt-2 md:mt-0 sm:w-full h-[2px] sm:h-[3px] bg-transparent sm:bg-white/15 rounded-full overflow-hidden mx-auto",children:e.jsx("div",{className:"h-full  bg-red-500 rounded-full transition-[width] duration-[50ms] ease-linear",style:{width:`${j}%`}})})]})]})]})}export{R as default};
