import { useDispatch, useSelector } from 'react-redux';
import { getallproduct } from './../../Redux/Actions/ProductAction';
import { useEffect } from 'react';

const ViewSearchProductHook = () => {
  const dispatch = useDispatch();

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

  console.log('المنتجات: المنتجات', item);

  return [item];
};

export default ViewSearchProductHook;
