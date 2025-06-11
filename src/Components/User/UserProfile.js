import React from 'react';
const deleteicon="https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/delete.png"

const UserProfile = () => {
    return (
        <div className='container'>
            <div className="admin-content-text">Profile Page</div>
            <div className="user-address-card my-3 px-2">
                <div className="d-flex justify-content-between pt-2">
                    <div className='d-flex'>

                         <div className="p-2">Name:</div>
                         <div className="p-1 item-delete-edit">Ahmed Abdullah</div>
                    </div>
                        <div className="d-flex mx-2  ">
                            <img
                                alt="delete icon"
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> Edit</p>
                        </div>
                   
                </div>

                <div className="row">
                    <div className="col-xs-12 d-flex">
                        <div className="p-2">Phone Number:</div>
                        <div className="p-1 item-delete-edit">0122314324</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 d-flex">
                        <div className="p-2">Email:</div>
                        <div className="p-1 item-delete-edit">ahmed@gmail.com</div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-xs-10 col-sm-8 col-md-6">
                        <div className="admin-content-text">Change Password</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Enter old password"
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter new password"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-sm-8 col-md-6 d-flex justify-content-end">
                        <button className="btn-save d-inline mt-2">Save Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
