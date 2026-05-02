export const CATEGORIES = [
  {
    name: "Fire Safety",
    products: [
      ["Fire Alarm Cables",    "/product/Fire Alarm Cables"],
      ["Fire Survival Cables", "/product/Fire Survival Cables"],
      ["Screened Cable",       "/product/Screened Cable"],
      ["Signal Cables",        "/product/Signal Cables"],
    ],
  },
  {
    name: "Industrial Cables",
    products: [
      ["Instrumentation Cables", "/product/Instrumentation Cables"],
      ["Flexible Cables",        "/product/Flexible Cables"],
      ["Co Axial Cable",         "/product/Co Axial Cable"],
      ["Power LT Cable",         "/product/Power LT Cable"],
    ],
  },
];

export const getCategoryForProduct = (productName) => {
  for (const cat of CATEGORIES) {
    if (cat.products.some(([name]) => name === productName)) return cat.name;
  }
  return "Products";
};