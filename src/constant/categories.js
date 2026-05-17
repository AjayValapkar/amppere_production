export const CATEGORIES = [
  {
    name: "Fire Safety",
    products: [
      ["Fire Alarm Cables",    "/product/Fire Alarm Cables"],
      ["Fire Survival Cables", "/product/Fire Survival Cables"],
      ["Fire Resistant Cables",       "/product/Screened Cable"],
      ["Smoke Detection Cables",        "/product/Signal Cables"],
    ],
  },
  {
    name: "Industrial Cables",
    products: [
      ["Instrumentation Signal Cables", "/product/Instrumentation Cables"],
      ["Control Cables",        "/product/Flexible Cables"],
      ["RTD / Thermocouple Cables",         "/product/Co Axial Cable"],
      ["Power LT Cables",         "/product/Power LT Cable"],
    ],
  },
];

export const getCategoryForProduct = (productName) => {
  for (const cat of CATEGORIES) {
    if (cat.products.some(([name]) => name === productName)) return cat.name;
  }
  return "Products";
};