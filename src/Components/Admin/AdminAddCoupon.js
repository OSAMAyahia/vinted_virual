 import React, { useEffect, useRef, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCoupon from './../../Hooks/Coupon/AddCoupon';
import { getAllCoupons } from './../../Redux/Actions/CouponAcion';

 

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
        setloading(true)
         await fetchCoupon({
             name: name,
             expire: Date,
             discount: number
         });
         setloading(false)
         if (loading===false){
            notify("Your Coupon has already been Added" ,"success")
         }
         else{
            notify("Your Coupon hasn't been Added" ,"fail")

         }
     };

     // Fetch coupons on component mount
     useEffect(() => {
         dispatch(getAllCoupons())
     }, [dispatch])
     
      return (
        <div>
          <ToastContainer /> 
          <div className="row justify-content-start">
            <div className="admin-content-text pb-4">Add New Coupon</div>
            <div className="col-sm-8">
              
              <input
                onChange={onChangeName}
                value={name}
                type="text"
                className="form-control d-block mt-3 px-3"
                placeholder="Category Coupon"
              />
              <input
                onChange={onChangeDate}
                value={Date}
                ref={Raf}
                type="text"
                className="form-control d-block mt-3 px-3"
                placeholder="Coupon's Expired Date"
                onFocus={()=>Raf.current.type="date"}
                onBlur={()=>Raf.current.type="text"}
              />
              <input
                onChange={onChangeNumber}
                value={number}
                type="text"
                className="form-control d-block mt-3 px-3"
                placeholder="Discount Percentage"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 d-flex justify-content-end">
              <button 
              onClick={onsubmitcapoun}
               className="btn btn-primary d-inline mt-2">
                Save Changes
              </button>
            </div>
          
           </div>
           
           {/* Display existing coupons */}
           <div className="row mt-5">
             <div className="col-sm-8">
               <div className="admin-content-text pb-3">Existing Coupons</div>
               <div className="table-responsive">
                 <table className="table table-striped">
                   <thead>
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
                       <tr key={coupon._id}>
                         <td><strong>{coupon.name}</strong></td>
                         <td>{coupon.discount}%</td>
                         <td>{new Date(coupon.expire).toLocaleDateString()}</td>
                         <td>
                           <span className={`badge ${new Date(coupon.expire) < new Date() ? 'bg-danger' : 'bg-success'}`}>
                             {new Date(coupon.expire) < new Date() ? 'Expired' : 'Active'}
                           </span>
                         </td>
                         <td>
                           <button className="btn btn-sm btn-warning me-2">Edit</button>
                           <button className="btn btn-sm btn-danger">Delete</button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
                 {coupons.length === 0 && (
                   <div className="text-center p-4">
                     <p>No coupons found</p>
                   </div>
                 )}
               </div>
             </div>
           </div>
        </div>
      );
     
    
     
}

export default AdminAddCoupon
