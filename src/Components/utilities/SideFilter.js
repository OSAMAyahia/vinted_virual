import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    // Available categories based on actual products
    const categories = [
        { id: 'men', name: 'رجالي' },
        { id: 'women', name: 'نسائي' },
        { id: 'kids', name: 'أطفال' },
        { id: 'shoes', name: 'أحذية' },
        { id: 'accessories', name: 'إكسسوارات' },
        { id: 'electronics', name: 'إلكترونيات' }
    ];

    // Available brands based on actual products
    const brands = [
        { id: 'nike', name: 'Nike' },
        { id: 'adidas', name: 'Adidas' },
        { id: 'levi\'s', name: 'Levi\'s' },
        { id: 'zara', name: 'Zara' },
        { id: 'h&m', name: 'H&M' },
        { id: 'converse', name: 'Converse' },
        { id: 'vans', name: 'Vans' }
    ];

    const handleCategoryChange = (categoryId) => {
        const newCategories = selectedCategories.includes(categoryId)
            ? selectedCategories.filter(id => id !== categoryId)
            : [...selectedCategories, categoryId];
        
        setSelectedCategories(newCategories);
        updateURL(newCategories, selectedBrands, priceRange);
    };

    const handleBrandChange = (brandId) => {
        const newBrands = selectedBrands.includes(brandId)
            ? selectedBrands.filter(id => id !== brandId)
            : [...selectedBrands, brandId];
        
        setSelectedBrands(newBrands);
        updateURL(selectedCategories, newBrands, priceRange);
    };

    const handlePriceChange = (type, value) => {
        const newPriceRange = { ...priceRange, [type]: value };
        setPriceRange(newPriceRange);
        updateURL(selectedCategories, selectedBrands, newPriceRange);
    };

    const updateURL = (categories, brands, prices) => {
        const params = new URLSearchParams();
        
        if (categories.length > 0) {
            params.append('categories', categories.join(','));
        }
        if (brands.length > 0) {
            params.append('brands', brands.join(','));
        }
        if (prices.min) {
            params.append('minPrice', prices.min);
        }
        if (prices.max) {
            params.append('maxPrice', prices.max);
        }

        const queryString = params.toString();
        navigate(`${location.pathname}${queryString ? '?' + queryString : ''}`);
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setPriceRange({ min: '', max: '' });
        navigate(location.pathname);
    };

    return (
        <div className="container-fluid mt-3 px-2">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 fw-bold">فلترة النتائج</h6>
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={clearAllFilters}
                >
                    مسح الكل
                </button>
            </div>
            {/* Category Filter */}
            <div className="d-flex flex-column mt-3">
                <div className="filter-title fw-bold mb-2" style={{ color: '#8B4513', fontSize: '1rem' }}>الفئة</div>
                {categories.map((category) => (
                    <div key={category.id} className="d-flex mt-2 align-items-center">
                        <input 
                            type="checkbox" 
                            id={`category-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryChange(category.id)}
                            className="me-2 form-check-input"
                            style={{ accentColor: '#8B4513' }}
                        />
                        <label htmlFor={`category-${category.id}`} className="filter-sub mb-0" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>

            {/* Brand Filter */}
            <div className="d-flex flex-column mt-4">
                <div className="filter-title fw-bold mb-2" style={{ color: '#8B4513', fontSize: '1rem' }}>الماركة</div>
                {brands.map((brand) => (
                    <div key={brand.id} className="d-flex mt-2 align-items-center">
                        <input 
                            type="checkbox" 
                            id={`brand-${brand.id}`}
                            checked={selectedBrands.includes(brand.id)}
                            onChange={() => handleBrandChange(brand.id)}
                            className="me-2 form-check-input"
                            style={{ accentColor: '#8B4513' }}
                        />
                        <label htmlFor={`brand-${brand.id}`} className="filter-sub mb-0" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
                            {brand.name}
                        </label>
                    </div>
                ))}
            </div>

            {/* Price Filter */}
            <div className="filter-title fw-bold my-4" style={{ color: '#8B4513', fontSize: '1rem' }}>نطاق السعر</div>
            <div className="d-flex align-items-center mb-3">
                <label className="filter-sub me-2 mb-0" style={{ minWidth: '50px', fontSize: '0.9rem' }}>من:</label>
                <input
                    className="form-control form-control-sm"
                    type="number"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange('min', e.target.value)}
                    style={{ borderColor: '#8B4513' }}
                />
            </div>
            <div className="d-flex align-items-center">
                <label className="filter-sub me-2 mb-0" style={{ minWidth: '50px', fontSize: '0.9rem' }}>إلى:</label>
                <input
                    className="form-control form-control-sm"
                    type="number"
                    placeholder="1000"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                />
            </div>
        </div>
    );
};

export default SideFilter;
