import React, { useEffect } from 'react';
import ProductsDetailstexts from './../Home/Products/ProductsDetailstexts';
import CategoryHeader from './../Home/Category/CategoryHeader';
import RateContainer from './../Rate/RateContainer';
import ProductsCategory from './ProductsCategory';
import Subtitle from './../utilities/Subtitle2';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GetDetailsOneProductHooks from './../../Hooks/Product/GetDetailsOneProductHooks';
import { getproductsDependoncategory } from './../../Redux/Actions/ProductAction';

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // جلب تفاصيل المنتج بناءً على الـ id
  const [item] = GetDetailsOneProductHooks(id);
  const category = item?.category; // تحقق من وجود الفئة

  // جلب المنتجات من حالة الريدوكس
  const productsByCategory = useSelector((state) => state.allproduct.productsByCategory.data
  );

  const productsByCategorys=productsByCategory?.products
console.log("productsByCategoryyyyyy" , productsByCategorys)
  // استخدام useEffect لتحميل المنتجات بناءً على الفئة
  useEffect(() => {
    if (category) {
      dispatch(getproductsDependoncategory(category));
    }
  }, [dispatch, category]);

  return (
    <div className=''>
      <CategoryHeader />
      <div className='container my-1'>
        <ProductsDetailstexts className="mb-4" />
        <RateContainer className="mb-4" />
        <Subtitle name={'Latest Fashion'} />

        <div className='row my-4' style={{ minHeight: '360px' }}>
          {productsByCategorys && productsByCategorys.length > 0 ? (
            productsByCategorys.map((product) => (
              <div key={product._id} className='col-6 col-sm-6 col-md-3 col-lg-2'>
                <ProductsCategory product={product} />
              </div>
            ))
          ) : (
            <p className="text-center">لا توجد منتجات.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
