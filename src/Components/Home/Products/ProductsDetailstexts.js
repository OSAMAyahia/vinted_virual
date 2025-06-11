import React from 'react';
import ProductGallery from './ProductGalllery';
import ProductText from './PorductTexts';

const ProductsDetailstexts = ( ) => {
  
  return (
    <div className='row'>
      <div className='col-lg-4 col-md-6 mb-4'>
        <ProductGallery />
      </div>
      <div className='col-lg-8 col-md-6 mb-4'>
        <ProductText />
      </div>
    </div>
  );
};

export default ProductsDetailstexts;
