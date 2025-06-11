import React from 'react';

const UserAddAddress = () => {
    return (
        <div className='container' style={{minHeight:"670px"}}> 
            <div className="row justify-content-start">
                <div className="admin-content-text pb-2">Add New Address</div>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Address label (e.g., Home - Work)"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Detailed address"
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Phone number"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 d-flex justify-content-end">
                    <button className="btn-save d-inline mt-2">Add Address</button>
                </div>
            </div>
        </div>
    );
};

export default UserAddAddress;
