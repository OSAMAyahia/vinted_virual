import React from 'react';
import UserAllOrderItem from './UserAllOrderItem';
 
const UserAllOrder = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Welcome Osama Eldemerdash</div>
            <div className="row justify-content-between">
                <UserAllOrderItem />
                <UserAllOrderItem />
                <UserAllOrderItem />
            </div>
        </div>
    );
}

export default UserAllOrder;
