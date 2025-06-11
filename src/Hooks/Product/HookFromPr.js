import { useDispatch, useSelector } from 'react-redux';
import { getallproduct } from './../../Redux/Actions/ProductAction';
import { useEffect, useState } from 'react';
const HookFromPr = () => {
    const dispatch = useDispatch();
    // const [item, setItem] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          // انتظار إتمام عملية جلب البيانات
          await dispatch(getallproduct());
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, [dispatch]);
  
    // استرجاع البيانات من Redux store
    const products = useSelector((state) => state.allproduct || {});

    console.log("products:", products);
  
    // إعداد البيانات للعرض
    let item = [];
    if (products.productsByCategory&& products.productsByCategory.data && products.productsByCategory.data.Data) {
      item = products.productsByCategory.data.Data;
    }
  
    return [item];
}

export default HookFromPr
