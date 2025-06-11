import React from 'react';
import NavBarLogin from './../../Components/Home/NavBarLogin';
import Slider from '../../Components/Home/Slider';
import Categorycard from '../../Components/Home/Category/Categorycard';
import Subtitle from './../../Components/utilities/Subtitle';
import Subtitle2 from './../../Components/utilities/Subtitle2';
import SubtitleBrand from './../../Components/utilities/SubtitleBrand';
import ProductsCategory from './../../Components/products/ProductsCategory';
import DiscountCard from './../../Components/Home/DiscountCard';
import BrandsCard from './../../Components/brands/BrandsCard';
import Footer from './../../Components/utilities/Foooter';
import ViewProductHook from './../../Hooks/Product/ViewProductHook';
import ViewProductHookRecommended from '../../Hooks/Product/ViewProductHook copy';

const HomePage = () => {
  const [item] = ViewProductHook();
  const [itemRecommended] = ViewProductHookRecommended();

  return (
    <div>
      <Slider />
      <div className='container'>
        {/* <Subtitle   /> */}
        {/* <Categorycard /> */}
        <Subtitle2 name={"Recommended for you"}/>
        <div className='row my-3 g-3'>
          {itemRecommended && itemRecommended.length > 0 ? (
            itemRecommended.map((i) => (
              <div key={i._id} className='col-6 col-sm-6 col-md-4 col-lg-3'>
                <ProductsCategory product={i} />
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
                <DiscountCard />

        <Subtitle2 name={"products"} />
        <div className='row my-3 g-3'>
          {item && item.length > 0 ? (
            item.map((i) => (
              <div key={i._id} className='col-6 col-sm-6 col-md-3 col-lg-2'>
                <ProductsCategory product={i} />
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
        {/* <SubtitleBrand/> */}
        {/* <BrandsCard /> */}
      </div>
    </div>
  );
};

export default HomePage;
