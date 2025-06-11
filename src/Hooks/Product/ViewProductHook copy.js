import { useDispatch, useSelector } from 'react-redux';
import { getallproduct } from './../../Redux/Actions/ProductAction';
import { useEffect, useState } from 'react';

const ViewProductHookRecommended = () => {
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

  console.log("productsss:", products);

  // إعداد البيانات للعرض
  let item = [];
  if (products.allProducts
&& products.allProducts
.data && products.allProducts
.data.Data) {
    item = products.allProducts
.data.Data;
  }
item=item.slice(0,4)
  return [item];
};

export default ViewProductHookRecommended  ;
