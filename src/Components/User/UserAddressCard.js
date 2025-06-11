import React from 'react';
import { Link } from 'react-router-dom';
const deleteicon="https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/delete.png"
const update="https://th.bing.com/th/id/R.828af64b04a12519cd196d44a89e959d?rik=JEf8dfpnMZIhZQ&pid=ImgRaw&r=0"

const UserAddressCard = () => {
    return (
        <div className="user-address-card my-3 px-2">
            <div className="row d-flex justify-content-between">
                <div className="col-1">
                    <div className="p-2">Home</div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">
                            <img
                                alt="delete icon"
                                className="ms-1 mt-2"
                                src={update}
                                height="18px"
                                width="28px"
                            />
                            <Link to="/user/edit-address" style={{ textDecoration: 'none' }}>
                                <p className="item-delete-edit">Edit</p>
                            </Link>
                        </div>
                        <div className="d-flex">
                            <img
                                alt="delete icon"
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit">Remove</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div style={{ color: '#555550',   fontSize: '14px' ,textAlign:"left" }}>
                        Cairo, Nasr City, 90th Street, Building 14
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 d-flex">
                    <div style={{ color: '#555550',  fontSize: '16px' }}>
                        Phone Number:
                    </div>
                    <div
                        style={{ color: '#979797',   fontSize: '16px' }}
                        className="mx-2"
                    >
                        0021313432423
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddressCard;
