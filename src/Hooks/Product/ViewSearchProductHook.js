import { useDispatch, useSelector } from 'react-redux';
import { getallproduct } from './../../Redux/Actions/ProductAction';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ViewSearchProductHook = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(getallproduct());
    };

    fetchProducts();
  }, [dispatch]);

  // جلب البيانات من الـ Redux store
  const products = useSelector((state) => state.allproduct || {});

  console.log("products:", products);

  // إعداد البيانات للعرض
  let item = [];
  if (products.allProducts&& products.allProducts.data && products.allProducts.data.Data) {
    item = products.allProducts.data.Data;
  }

  // Filter products based on URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const categories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
    const brands = searchParams.get('brands')?.split(',').filter(Boolean) || [];
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const search = searchParams.get('search');
    
    let filtered = [...item];
    
    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(product => 
        product.title?.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.category?.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by navbar category
    if (category && category !== 'all') {
      filtered = filtered.filter(product => 
        product.category?.toLowerCase().includes(category.toLowerCase()) ||
        product.title?.toLowerCase().includes(category.toLowerCase())
      );
    }
    
    // Filter by sidebar categories
    if (categories.length > 0) {
      filtered = filtered.filter(product => 
        categories.some(cat => 
          product.category?.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }
    
    // Filter by brands
    if (brands.length > 0) {
      filtered = filtered.filter(product => 
        brands.some(brand => 
          product.brand?.toLowerCase().includes(brand.toLowerCase()) ||
          product.title?.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }
    
    // Filter by price range
    if (minPrice || maxPrice) {
      filtered = filtered.filter(product => {
        const price = product.price || 0;
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Infinity;
        return price >= min && price <= max;
      });
    }
    
    setFilteredItems(filtered);
  }, [item, location.search]);

  console.log('المنتجات: المنتجات', filteredItems);

  return [filteredItems];
};

export default ViewSearchProductHook;
