import React from 'react';
import UserAddressCard from './UserAddressCard';
import { Link } from 'react-router-dom';

const UserAllAddress = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Address Book</div>
            <UserAddressCard />
            <UserAddressCard />
             

            <div className="row justify-content-center">
                <div className="col-sm-5 d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: 'none' }}>
                        <button className="btn-add-address">Add New Address</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserAllAddress;
