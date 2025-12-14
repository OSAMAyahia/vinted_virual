import React from 'react';
import ImageGallery from "react-image-gallery";
import RightButton from './RightB';
import LeftButton from './LeftB';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useParams } from 'react-router-dom';
import GetDetailsOneProductHooks from './../../../Hooks/Product/GetDetailsOneProductHooks';

const ProductGallery = () => {
  const { id } = useParams();
  const [item] = GetDetailsOneProductHooks(id);

  let image = [];
  if (item && item.images) {
    image = item.images.map((i) => ({ 
      original: i || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      thumbnail: i || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    }));
  } else if (item && item.imageCover) {
    image = [{
      original: item.imageCover || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      thumbnail: item.imageCover || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    }];
  } else {
    image = [{
      original: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    }];
  }

  return (
    <div>
      <ImageGallery
        items={image}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
