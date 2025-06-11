import React, { useEffect, useRef, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCoupon from './../../Hooks/Coupon/AddCoupon';
import { Link, useParams } from 'react-router-dom';
import UpdateCouponHooks from './../../Hooks/Coupon/UpdateCouponHooks';

 

     const AdminUpdateCoupon = () => {
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
      const {id}=useParams()
       
     const Raf=useRef()
     const[UpdateCoupon] = UpdateCouponHooks()

     const onsubmitcapoun = async () => {
        setloading(true)
         await UpdateCoupon(id,{
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
            <Link style={{textDecoration:"none"}} to='/admin/allcoupon' >
              <button 
              onClick={onsubmitcapoun}
               className="btn btn-primary d-inline m-2">
                Save Changes
              </button>
              </Link>

              <Link style={{textDecoration:"none"}} to='/admin/allcoupon' >
              <button 
            //   onClick={onsubmitcapoun}
               className="btn btn-danger d-inline m-2 ">
                Cancel Updates
              </button>
              
              </Link>
            </div>
          
           </div>
        </div>
      );
     
    
     
}

export default AdminUpdateCoupon
