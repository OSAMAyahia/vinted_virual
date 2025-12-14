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
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h2 className="admin-content-text">Available Coupons</h2>
                        </div>
                    </div>
                    
                    {items && items.length > 0 ? (
                        <div className="row">
                            {items.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-4 mb-4">
                                    <div className="card h-100 shadow-sm coupon-card" style={{ 
                                        border: '2px dashed #16a085', 
                                        borderRadius: '15px',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                                    }}>
                                        <div className="card-body text-center">
                                            {item.image ? (
                                                <img 
                                                    src={item.image} 
                                                    alt={item.code}
                                                    className="img-fluid mb-3"
                                                    style={{ 
                                                        maxHeight: '100px',
                                                        borderRadius: '10px'
                                                    }}
                                                    onError={(e) => {
                                                        e.target.src = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon-default.png';
                                                    }}
                                                />
                                            ) : (
                                                <div className="coupon-icon mb-3">
                                                    <i className="fas fa-ticket-alt fa-3x text-success"></i>
                                                </div>
                                            )}
                                            
                                            <h5 className="card-title text-primary font-weight-bold">
                                                {item.code}
                                            </h5>
                                            
                                            <p className="card-text text-muted">
                                                {item.description || `خصم ${item.discount}% على جميع المنتجات`}
                                            </p>
                                            
                                            <div className="coupon-details mb-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <span className="text-muted">نسبة الخصم:</span>
                                                    <span className="badge bg-success" style={{ fontSize: '1rem' }}>
                                                        {item.discount}%
                                                    </span>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <span className="text-muted">تاريخ الانتهاء:</span>
                                                    <span className="text-dark">
                                                        {new Date(item.expire || item.expiry).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="text-muted">الحالة:</span>
                                                    <span className={`badge ${
                                                        new Date(item.expire || item.expiry) < new Date() 
                                                            ? 'bg-danger' 
                                                            : 'bg-success'
                                                    }`}>
                                                        {new Date(item.expire || item.expiry) < new Date() 
                                                            ? 'منتهي' 
                                                            : 'فعال'
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="coupon-actions">
                                                <Link 
                                                    to={`/admin/edit-coupon/${item._id}`} 
                                                    className="btn btn-warning btn-sm me-2"
                                                    style={{ borderRadius: '20px' }}
                                                >
                                                    <i className="fas fa-edit"></i> تعديل
                                                </Link>
                                                
                                                <button 
                                                    onClick={() => handleDeleteClick(item._id)}
                                                    className="btn btn-danger btn-sm"
                                                    style={{ borderRadius: '20px' }}
                                                >
                                                    <i className="fas fa-trash"></i> حذف
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <i className="fas fa-ticket-alt fa-5x text-muted mb-4"></i>
                            <h4 className="text-muted">لا توجد كوبونات متاحة</h4>
                            <p className="text-muted">يمكنك إضافة كوبونات جديدة من صفحة الإضافة</p>
                        </div>
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
