import React from 'react'
import AdminAddProducts from './../../Components/Admin/AdminAddProducts';
import AdminSideBar from './../../Components/Admin/AdminSide';

const AdminAddProductsPage = () => {
  return (
    <div className='mt-2' >
          <div>
<div className='row'>
<div className='col-3 col-sm-3 col-md-3 col-lg-2'>
   < AdminSideBar/>
</div>
<div className='col-8    col-sm-8 col-md-8  col-lg-8'><AdminAddProducts/>
 </div>
</div>
    </div>
     </div>
  )
}
 
 
export default AdminAddProductsPage
