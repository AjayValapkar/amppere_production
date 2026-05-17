import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';
import Breadcrumb from '../components/Breadcrumb';
import { CATEGORIES } from '../constant/categories';
import { productData } from '../constant/productData';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultCategory = CATEGORIES[0]?.name || '';
  const initialCategory = searchParams.get('category') || defaultCategory;
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && category !== activeCategory) {
      setActiveCategory(category);
    }
  }, [searchParams, activeCategory]);

  useEffect(() => {
    if (!activeCategory) {
      setActiveCategory(defaultCategory);
    }
  }, [activeCategory, defaultCategory]);

  const selectedCategory = useMemo(
    () => CATEGORIES.find(cat => cat.name === activeCategory) ?? CATEGORIES[0],
    [activeCategory]
  );

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return productData;
    return selectedCategory.products
      .map(([name]) => productData.find(prod => prod.productName === name))
      .filter(Boolean);
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setSearchParams({ category: categoryName });
  };

  return (
    <div className="min-h-screen bg-[#f5f3f3]">
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: activeCategory || 'Products', path: null }
        ]}
      />
      <ProductSlider items={filteredProducts} title={ 'Our Products'} />
    </div>
  );
};

export default Products;
