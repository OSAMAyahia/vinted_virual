import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    const categories = [
        { id: 'electronics', name: 'Electronics' },
        { id: 'fashion', name: 'Fashion' },
        { id: 'home', name: 'Home Appliances' },
        { id: 'sports', name: 'Sports' },
        { id: 'books', name: 'Books' }
    ];

    const brands = [
        { id: 'nike', name: 'Nike' },
        { id: 'adidas', name: 'Adidas' },
        { id: 'apple', name: 'Apple' },
        { id: 'samsung', name: 'Samsung' },
        { id: 'sony', name: 'Sony' }
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
        <div className="container row mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0">Filters</h6>
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={clearAllFilters}
                >
                    Clear All
                </button>
            </div>
            {/* Category Filter */}
            <div className="d-flex flex-column mt-2">
                <div className="filter-title fw-bold">Category</div>
                {categories.map((category) => (
                    <div key={category.id} className="d-flex mt-2 align-items-center">
                        <input 
                            type="checkbox" 
                            id={`category-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryChange(category.id)}
                            className="me-2"
                        />
                        <label htmlFor={`category-${category.id}`} className="filter-sub mb-0">
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>

            {/* Brand Filter */}
            <div className="d-flex flex-column mt-3">
                <div className="filter-title fw-bold">Brand</div>
                {brands.map((brand) => (
                    <div key={brand.id} className="d-flex mt-2 align-items-center">
                        <input 
                            type="checkbox" 
                            id={`brand-${brand.id}`}
                            checked={selectedBrands.includes(brand.id)}
                            onChange={() => handleBrandChange(brand.id)}
                            className="me-2"
                        />
                        <label htmlFor={`brand-${brand.id}`} className="filter-sub mb-0">
                            {brand.name}
                        </label>
                    </div>
                ))}
            </div>

            {/* Price Filter */}
            <div className="filter-title fw-bold my-3">Price Range</div>
            <div className="d-flex align-items-center mb-2">
                <label className="filter-sub me-2 mb-0" style={{ minWidth: '40px' }}>Min:</label>
                <input
                    className="form-control form-control-sm"
                    type="number"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange('min', e.target.value)}
                />
            </div>
            <div className="d-flex align-items-center">
                <label className="filter-sub me-2 mb-0" style={{ minWidth: '40px' }}>Max:</label>
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
