import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const CategoryHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', label: 'الكل' },
    { id: 'electronics', name: 'Electronics', label: 'الإلكترونيات' },
    { id: 'fashion', name: 'Fashion', label: 'الموضة' },
    { id: 'home', name: 'Home Appliances', label: 'الأجهزة المنزلية' },
    { id: 'sports', name: 'Sports', label: 'الرياضة' },
    { id: 'books', name: 'Books', label: 'الكتب' }
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    
    // Navigate to products page with category filter
    if (categoryId === 'all') {
      navigate('/products')
    } else {
      navigate(`/products?category=${categoryId}`)
    }
  }

  return (
    <div className="container-fluid bg-light border-bottom">
      <div className="container">
        <ul className="nav nav-tabs border-0">
          {categories.map((category) => (
            <li key={category.id} className="nav-item">
              <button
                className={`nav-link text-dark border-0 bg-transparent ${
                  activeCategory === category.id ? 'active fw-bold' : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
                style={{ cursor: 'pointer' }}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryHeader
 