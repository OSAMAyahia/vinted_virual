import React from 'react';
import CategoryHeader from './../Category/CategoryHeader';
import Pagination from '../../utilities/Pagination';
import SearchCountResult from './../../utilities/SearchCountResults';
import SideFilter from '../../utilities/SideFilter';
import ProductsCategory from '../../products/ProductsCategory';
import ViewSearchProductHook from './../../../Hooks/Product/ViewSearchProductHook';

const ShopProduct = () => {
  const [item] = ViewSearchProductHook();

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <SearchCountResult />
      <div className='container'>
        <div className='row'>
          <div className='col-4 col-md-4 col-lg-2'>
            <SideFilter />
          </div>
          <div className='col-8 col-md-8 col-lg-10'>
            <div className='row my-3 g-3'>
              {item && item.length > 0 ? (
                item.map((i) => (
                  <div key={i._id} className='col-6 col-sm-6 col-md-4 col-lg-3'>
                    <ProductsCategory product={i} />
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ShopProduct;
