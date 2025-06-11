import React from 'react'
 import AdminSideBar from './../../Components/Admin/AdminSide';
 import AdminAddCoupon from '../../Components/Admin/AdminAddCoupon';
 

const AdminCouponPage = () => {
         return (
            <div className='mt-2'>
    <div className='row'>
    <div className='col-3 col-sm-3 col-md-3 col-lg-2'>
      < AdminSideBar/>
    </div>
    <div className='col-9 col-sm-9 col-md-9  col-lg-9'><AdminAddCoupon/></div>
    </div>
       </div>
      )
    }
    
     
    
    
     
    
    
 

export default AdminCouponPage
