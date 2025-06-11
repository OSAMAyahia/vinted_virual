import React, { useEffect } from 'react';
import Pagination from './../utilities/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getallfavorite } from '../../Redux/Actions/FavoriteAction';
// import ProductsFavorite from './../products/ProductsFavorite';
import ProductsFavorite from './../products/ProductFavorite';

const UserFavorite = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    useEffect(() => {
      const fetchData = async () => {
          await dispatch(getallfavorite(userId));
      };
      fetchData();
  }, [dispatch, userId]);
  
    const favoriteData = useSelector((state) => state.Favorite.
    allfavorite[0]);
console.log("favoriteDatafavoriteData",favoriteData)
    if (!favoriteData || favoriteData.length === 0) {
        return <p>No favorites available.</p>;
    }

    return (
        <div>
            <div className="admin-content-text my-2">Favorite List</div>
            <div className="row justify-content-start">
                {favoriteData.map((favoriteItem, index) => (
   <div className="col-12 col-md-6 col-lg-3 my-3 mb-4" key={index}>
   <ProductsFavorite product={favoriteItem.productId} />
</div>                ))}

            </div>
            <Pagination />
        </div>
    );
};

export default UserFavorite;
