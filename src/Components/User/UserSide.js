import React from 'react';
import { Link } from 'react-router-dom';

const UserSide = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/user/orders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        Manage Orders
                    </div>
                </Link>
                <Link to="/user/favorite" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Favorite Things                    </div>
                </Link>
                <Link to="/user/personal" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Personal Addresses
                    </div>
                </Link>
                <Link to="/user/Page" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                       User-Profile Page
                    </div>
                </Link>
                
            </div>
        </div>
    );
}

 

export default UserSide
