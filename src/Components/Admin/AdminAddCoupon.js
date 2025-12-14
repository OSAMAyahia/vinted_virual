 import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCoupon from './../../Hooks/Coupon/AddCoupon';
import { GetCouponAction } from './../../Redux/Actions/CouponAcion';

 

     const AdminAddCoupon = () => {
    //   const [img, setimg] = useState(avatar);
      const [name, setName] = useState('');
      const [number, setnumber] = useState( );
      const [Date, SetDate] = useState( );
      const [loading, setloading] = useState(true);
    //   const [ispress, setpress] = useState(false);
    //   const dispatch = useDispatch();
    
      
    
      const onChangeName = (e) => {
        setName(e.target.value);
      };
      const onChangeNumber = (e) => {
        setnumber(e.target.value);
      };
    
      const onChangeDate = (e) => {
        SetDate(e.target.value);
      };
    
   
    
      const notify = (message, status) => {
        if (status === 'success') {
          toast.success(message); 
        } else {
          toast.error(message);  
        }
      };
       
     const Raf=useRef()
     const [fetchCoupon] = AddCoupon();
     const dispatch = useDispatch();
     const coupons = useSelector(state => state.couponReducer.coupons?.data || []);

     const onsubmitcapoun = async () => {
        if (!name || !Date || !number) {
            notify("Please fill all fields" ,"error")
            return
        }
        
        if (isNaN(number) || number <= 0 || number > 100) {
            notify("Please enter a valid discount percentage (1-100)" ,"error")
            return
        }
        
        setloading(true)
        try {
            await fetchCoupon({
                name: name,
                expire: Date,
                discount: number
            });
            notify("Coupon created successfully!" ,"success")
            // Reset form
            setName('')
            SetDate('')
            setnumber('')
            // Refresh coupon list
            dispatch(GetCouponAction())
        } catch (error) {
            notify("Failed to create coupon" ,"error")
        } finally {
            setloading(false)
        }
     };

      // Fetch coupons on component mount
      useEffect(() => {
          dispatch(GetCouponAction())
      }, [dispatch])
     
      return (
        <div>
          <ToastContainer /> 
          <div className="row justify-content-start">
            <div className="col-12">
              <h2 className="admin-content-text pb-4">Add New Coupon</h2>
              <p className="text-muted mb-4">Create a new discount coupon for your customers</p>
            </div>
            
            <div className="col-sm-8">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <label className="form-label fw-bold">Coupon Code</label>
                    <input
                      onChange={onChangeName}
                      value={name}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter coupon code (e.g., SAVE20)"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Expiry Date</label>
                    <input
                      onChange={onChangeDate}
                      value={Date}
                      ref={Raf}
                      type="date"
                      className="form-control form-control-lg"
                      placeholder="Select expiry date"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Discount Percentage</label>
                    <input
                      onChange={onChangeNumber}
                      value={number}
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Enter discount percentage (1-100)"
                      min="1"
                      max="100"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                  
                  <div className="d-flex justify-content-end">
                    <button 
                      onClick={onsubmitcapoun}
                      className="btn btn-primary btn-lg px-4"
                      disabled={loading}
                      style={{ borderRadius: '10px' }}
                    >
                      {loading ? (
                        <span>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Creating...
                        </span>
                      ) : (
                        <span>
                          <i className="fas fa-plus me-2"></i>
                          Create Coupon
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
           </div>
           
           {/* Display existing coupons */}
           <div className="row mt-5">
             <div className="col-sm-8">
               <div className="admin-content-text pb-3">Existing Coupons</div>
               <div className="table-responsive">
                 <table className="table table-hover">
                   <thead className="table-dark">
                     <tr>
                       <th>Coupon Code</th>
                       <th>Discount %</th>
                       <th>Expiry Date</th>
                       <th>Status</th>
                       <th>Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                     {coupons.map((coupon) => (
                       <tr key={coupon._id} className={new Date(coupon.expire || coupon.expiry) < new Date() ? 'table-danger' : ''}>
                         <td>
                           <div className="d-flex align-items-center">
                             {coupon.image && (
                               <img 
                                 src={coupon.image} 
                                 alt={coupon.code}
                                 className="me-2 rounded"
                                 style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                                 onError={(e) => {
                                   e.target.src = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon-default.png';
                                 }}
                               />
                             )}
                             <strong>{coupon.code || coupon.name}</strong>
                           </div>
                         </td>
                         <td>
                           <span className="badge bg-primary" style={{ fontSize: '14px' }}>
                             {coupon.discount || coupon.value}%
                           </span>
                         </td>
                         <td>{new Date(coupon.expire || coupon.expiry).toLocaleDateString()}</td>
                         <td>
                           <span className={`badge ${new Date(coupon.expire || coupon.expiry) < new Date() ? 'bg-danger' : 'bg-success'}`}>
                             {new Date(coupon.expire || coupon.expiry) < new Date() ? 'Expired' : 'Active'}
                           </span>
                         </td>
                         <td>
                           <div className="btn-group" role="group">
                             <Link 
                               to={`/admin/edit-coupon/${coupon._id}`}
                               className="btn btn-sm btn-outline-warning"
                               title="Edit Coupon"
                             >
                               <i className="fas fa-edit"></i>
                             </Link>
                             <button 
                               className="btn btn-sm btn-outline-danger"
                               title="Delete Coupon"
                             >
                               <i className="fas fa-trash"></i>
                             </button>
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
                 {coupons.length === 0 && (
                   <div className="text-center p-4">
                     <i className="fas fa-ticket-alt fa-3x text-muted mb-3"></i>
                     <h5 className="text-muted">No coupons found</h5>
                     <p className="text-muted">Create your first coupon above</p>
                   </div>
                 )}
               </div>
             </div>
           </div>
        </div>
      );
     
    
     
}

export default AdminAddCoupon
