import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ViewAllCoupon from './../../Hooks/Coupon/ViewAllCoupon';
import DeleteCoupon from './../../Hooks/Coupon/DeleteCoupon';
import { useDispatch } from 'react-redux';
 const deleteicon="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-512.png"
const update="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_update-512.png"

const AdminViewCoupon = () => {

  

        // <div className="container mt-4">
        //     <div className="row">
        //         {/* {coupons.map((coupon, index) => ( */}
        //             <div   className="col-md-4 mb-4">
        //                 <div className="card h-100">
        //                     <div className="card-body">
        //                         {/* <h5 className="card-title">{coupon.name}</h5> */}
        //                         <p className="card-text">
        //                             {/* <strong>Expiration Date:</strong> {coupon.expire} */}
        //                         </p>
        //                         <p className="card-text">
        //                             {/* <strong>Discount:</strong> {coupon.discount}% */}
        //                         </p>
        //                     </div>
        //                     <div className="card-footer text-center">
        //                         <button className="btn btn-primary">Edit</button>
        //                         <button className="btn btn-danger ms-2">Delete</button>
        //                     </div>
        //                 </div>
        //             </div>
                
        //     </div>
        // </div>

        const [fetchCoupon,items]=ViewAllCoupon()
        const [showModal, setShowModal] = useState(false);
        const [selectedCouponId, setSelectedCouponId] = useState(null);
        const dispatch=useDispatch()
        useEffect(() => {
            fetch = async () => {
            await fetchCoupon( );
          };
               fetch();
             }, [dispatch]);


             //Delete

             const [DeleteCoupons]=DeleteCoupon()
             const Delte=async(id)=>{
                await DeleteCoupons(id)
                
             }
             const handleDeleteClick = (id) => {
                setSelectedCouponId(id);
                setShowModal(true);
            };
        
            const confirmDelete = async () => {
                await DeleteCoupons(selectedCouponId);
                setShowModal(false);
                setSelectedCouponId(null);
                await fetchCoupon( );

            };
        
            const cancelDelete = () => {
                setShowModal(false);
                setSelectedCouponId(null);
            };
        
            return (
                <div className="container mt-3">
                    {items && items.length > 0 ? (
                        items.map((item, index) => (
                            <div key={index} className="user-address-card my-3 px-2">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-1">
                                        <h5 className="p-2">Coupon</h5>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <div className="d-flex p-2">
                                            <div className="d-flex mx-2">
                                                <Link className='d-flex' to={`/admin/edit-coupon/${item._id}`} style={{ textDecoration: 'none' }}>
                                                <img
                                                    alt="update icon"
                                                    className="mx-1 mt-2 item-delete-edit"
                                                    src={update}
                                                    height="20px"
                                                    width="20px"
                                                />
                                                    <p className="item-delete-edit">Edit</p>
                                                </Link>
                                            </div>
                                            <div className="d-flex">
                                                <img
                                                    alt="delete icon"
                                                    className="mx-1 mt-2 item-delete-edit"
                                                    src={deleteicon}
                                                      height="20px"
                                                    width="20px"
                                                    onClick={() => handleDeleteClick(item._id)}
                                                />
                                                <p className="item-delete-edit"  onClick={() => handleDeleteClick(item._id)}>Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="row">
                                    <div className="col-12">
                                        <div style={{ color: '#555550', fontSize: '14px', textAlign: 'left' }}>
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
        
                                <div className="row mt-3">
                                    <div className="col-12 d-flex">
                                        <div style={{ color: '#555550', fontSize: '16px' }}>
                                            {new Date(item.expire).toLocaleDateString()}
                                        </div>
                                        <div style={{ color: '#979797', fontSize: '16px' }} className="mx-2">
                                            Discount: {item.discount}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No coupons available.</p>
                    )}
        
                    {/* Modal for delete confirmation */}
                    {showModal && (
                        <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete this coupon?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                                            Delete
                                        </button>
                                        <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
                
    

 

    
}
    

export default AdminViewCoupon
