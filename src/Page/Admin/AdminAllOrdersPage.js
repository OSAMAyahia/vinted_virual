import React from 'react';
import AdminSideBar from './../../Components/Admin/AdminSide';  // Correct import path
import AdminAllOrders from './../../Components/Admin/AdminAllOrders';
import Pagination from './../../Components/utilities/Pagination';

const AdminAllOrdersPage = () => {
  return (
    <div className='mt-2'>
      <div className='row'>
        <div className='col-3 col-sm-3 col-md-3 col-lg-2'>
          <AdminSideBar /> {/* Ensure component name is correct */}
        </div>
        <div className='col-9 col-sm-9 col-md-9 col-lg-9'>
          <AdminAllOrders />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AdminAllOrdersPage;
