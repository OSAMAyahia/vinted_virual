import React from 'react'
 import AdminSideBar from './../../Components/Admin/AdminSide';
 import AdminOrdersDetails from './../../Components/Admin/AdminOrdersDetails';

const AdminOrdersDetailsPage = () => {
  return (
    <div className='mt-2 mb-5' style={{minHeight:"670px"}}>
        <div>
<div className='row'>
<div className='col-3 col-sm-3 col-md-3 col-lg-2'>
   < AdminSideBar/>
</div>
<div className='col-9 col-sm-9 col-md-9  col-lg-9'>
<div style={{textAlign:"left"}}> <h5>#Details of order</h5> </div>

    <AdminOrdersDetails/>
 </div>
</div>
    </div>
    </div>
  )
}

export default AdminOrdersDetailsPage
