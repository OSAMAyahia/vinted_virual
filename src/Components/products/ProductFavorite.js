import React from 'react';
import { Link } from 'react-router-dom';
import { createfavorite } from './../../Redux/Actions/FavoriteAction';
import { useDispatch } from 'react-redux';

const ProductsFavorite = ({ product }) => {
    const dispatch = useDispatch();

    if (!product) {
        return null; // Ensure product is defined
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    const addFavorite = async (productID) => {
        await dispatch(createfavorite({
            userId: userId,
            productId: productID,
        }));
    };

    return (
        <div className="card h-100">
            <Link to={`/products/${product._id}`}>
                <img
                    onClick={scrollToTop}
                    src={product.imageCover}
                    className="card-img-top"
                    alt={product.title || 'Product Image'}
                />
            </Link>
            <div className="d-flex justify-content-start ms-3 mt-2">
                <img
                    style={{ width: '29px', height: '28px', cursor: 'pointer' }}
                    src="https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/fav-off.png"
                    alt="favorite"
                    onClick={() => addFavorite(product._id)}
                />
            </div>
            <div className="card-body">
                <p className="card-text">{product.title}</p>
                <div className="d-flex justify-content-between">
                    <p>
                        <strong>{product.price}</strong> EG
                    </p>
                    <div>
                        <span style={{ color: 'gold', marginLeft: '5px' }}>
                            {product.ratingsQuantity}
                        </span>
                        <img
                            src="https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/rate.png"
                            style={{ width: '23px', height: '20px' }}
                            alt="rating"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsFavorite;
