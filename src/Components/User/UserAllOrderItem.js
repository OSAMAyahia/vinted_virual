import React from 'react';
 import UserAllOrderCard from './UserAllOrderCard';
 
const UserAllOrderItem = () => {
    return (
        <div className="user-order mt-2" style={{textAlign:"left"}}>
            <div className="row">
                <div className="py-2 order-title">Order #234556</div>
            </div>
            <UserAllOrderCard />
            <UserAllOrderCard />
            <div className="row d-flex justify-content-between">
                <div className="col-6">
                    <div>
                        <div className="d-inline">Status</div>
                        <div className="d-inline mx-2 stat">In Progress</div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <div>
                        <div className="brand-text">4000 EGP</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAllOrderItem;
