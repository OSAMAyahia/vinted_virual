import React from 'react';
const mobile ="https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/mobile.png"

const UserAllOrderCard = () => {
    return (
        <div>
            <div className="row d-flex mb-2">
                <div className="col-3 col-md-2 d-flex justify-content-start">
                    <img width="93px" height="120px" src={mobile} alt="" />
                </div>
                <div className="col-8 col-md-6">
                    <div className="d-inline pt-2 product-title">
                        iPhone XR with 128GB storage, supporting 4G LTE with FaceTime app (PRODUCT) Red
                    </div>
                    <div className="d-inline pt-2 product-rate me-2">4.5</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 reviews)</div>
                    <div className="mt-3">
                        <div className="product-text d-inline">Quantity</div>
                        <input
                            className="mx-2"
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAllOrderCard;
