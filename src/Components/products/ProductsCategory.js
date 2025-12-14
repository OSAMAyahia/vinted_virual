
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createfavorite, Deletefavorite } from './../../Redux/Actions/FavoriteAction';
import CartAction from './../../Redux/Actions/CartAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductsCategory = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false); 

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user && user._id ? user._id : null;

  if (!product) {
    return null; // Ensure product is defined
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const addfavorite = async (productID) => {
    if (!userId) {
      toast.error('يرجى تسجيل الدخول أولاً');
      return;
    }
    try {
      await dispatch(createfavorite({ userId, productId: productID }));
      setIsFavorited(true);
      toast.success('تمت إضافة المنتج إلى المفضلة بنجاح!');
    } catch (error) {
      toast.error('حدث خطأ أثناء إضافة المنتج إلى المفضلة');
    }
  };

  const deletefromfavorites = async(productID) => {
    if (!userId) {
      toast.error('يرجى تسجيل الدخول أولاً');
      return;
    }
    try {
      await dispatch(Deletefavorite({ userId:userId, productId: productID }))
      setIsFavorited(false);
      toast.success('تمت إزالة المنتج من المفضلة بنجاح!');
    } catch (error) {
      toast.error('حدث خطأ أثناء إزالة المنتج من المفضلة');
    }
  }

  const addToCart = async (productID) => {
    if (!userId) {
      toast.error('يرجى تسجيل الدخول أولاً');
      return;
    }
    try {
      await dispatch(CartAction(productID, { color: product.colors?.[0] || '#000000' }))
      toast.success('تمت إضافة المنتج إلى السلة بنجاح!');
    } catch (error) {
      toast.error('حدث خطأ أثناء إضافة المنتج إلى السلة');
    }
  }
  
  return (
    <div style={{
      position: 'relative',
      height: '100%',
      boxShadow: 'none',
      border: 'none',
      borderRadius: '0',
      marginBottom: '8px', // Reduced margin to fit more cards
      padding: '0',
      overflow: 'hidden', // Prevent content from spilling out
      maxWidth: '100%',
    }} className='card h-100'>
      {/* Image container with fixed proportions */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '100%', // Create a square container for the image
        overflow: 'hidden'
      }}>
        <Link 
          to={`/products/${product._id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          <img
            onClick={scrollToTop}
            src={product.imageCover || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'}
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' }}
            style={{
              position: 'absolute',
              top: '0',
              left: '10%', // Center the 80% width image
              width: '80%', // Width at 80% as requested
              height: '100%', // Height fills container
              objectFit: 'cover', // Ensures image covers area without distortion
              objectPosition: 'center' // Centers the image in the container
            }}
            alt={product.title || 'Product Image'}
          />
        </Link>
        
        {/* Heart icon positioned correctly on image */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '15%', // Aligned based on the 80% width image
          zIndex: '10'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}
          onClick={() => {
            if (isFavorited) {
              deletefromfavorites(product._id);
            } else {
              addfavorite(product._id);
            }
            setIsFavorited(!isFavorited);
          }}>
            <img
              style={{ width: '18px', height: '18px' }}
              src={isFavorited
                ? 'https://raw.githubusercontent.com/bakrgit/16-Ecommerse-Review-CRUD---Wishlist-Products-/refs/heads/master/src/images/fav-on.png' 
                : 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/fav-off.png'}
              alt='favorite'
            />
            {isFavorited && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                5
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Product Details - Contained within boundaries */}
      <div style={{
        padding: '8px 5px',
        textAlign: 'left',
        width: '80%', // Match image width
        margin: '0 auto', // Center in container like the image
        overflow: 'hidden' // Prevent text overflow
      }}>
        {/* Brand/Seller Name */}
        <p style={{
          fontSize: '14px',
          fontWeight: '500',
          margin: '0 0 2px 0',
          color: '#333',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis' // Show ellipsis for overflow text
        }}>
          {product.title}
        </p>
        
        {/* Size and Condition */}
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: '0 0 4px 0',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.size || "22"} / {product.condition || "Good"}
        </p>
        
        {/* Price Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <div style={{ 
            maxWidth: '70%',
            overflow: 'hidden' 
          }}>
            <p style={{
              margin: '0',
              fontSize: '12px',
              textDecoration: 'line-through',
              color: '#888'
            }}>
              {product.originalPrice || product.price} EG
            </p>
            <p style={{
              margin: '0',
              fontSize: '14px',
              fontWeight: '600',
              color: '#16a085',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              <strong>{product.discountedPrice || product.price}</strong> EG
              <span style={{ fontSize: '10px', color: '#666', marginLeft: '2px' }}>incl.</span>
            </p>
          </div>
          
          {/* Ratings (smaller to fit) */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            maxWidth: '30%' 
          }}>
            <span style={{ color: 'gold', marginLeft: '2px', fontSize: '12px' }}>
              {product.ratingsQuantity}
            </span>
            <img
              src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/rate.png'
              style={{ width: '18px', height: '16px', marginLeft: '2px' }}
              alt='rating'
            />
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <div style={{
          padding: '8px 5px 12px',
          width: '80%',
          margin: '0 auto'
        }}>
          <button
            onClick={() => addToCart(product._id)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#16a085',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#138a72'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#16a085'}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
