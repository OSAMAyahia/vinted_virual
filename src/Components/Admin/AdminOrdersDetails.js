import React from 'react'
import CartItem from '../Cart/CartItems'

const AdminOrdersDetails = () => {
  return (
    <div>
      <CartItem/>
      <CartItem/>
      <CartItem/>

      <div className="row justify-content-center mt-4 user-data">
            <div className="col-12 d-flex">
                <div className="admin-content-text py-2">Customer Details</div>
            </div>

            <div className="col-12 d-flex">
                <div style={{ color: "#555550", fontSize: "16px" }}>
                    Name:
                </div>
                <div style={{ color: "#979797", fontSize: "16px" }} className="mx-2">
                   Osama Eldemerdash
                </div>
            </div>

            <div className="col-12 d-flex">
                <div style={{ color: "#555550", fontSize: "16px" }}>
                    Phone Number:
                </div>
                <div style={{ color: "#979797", fontSize: "16px" }} className="mx-2">
                    0021313432423
                </div>
            </div>

            <div className="col-12 d-flex">
                <div style={{ color: "#555550", fontSize: "16px" }}>
                    Email:
                </div>
                <div style={{ color: "#979797", fontSize: "16px" }} className="mx-2">
                    osama@gmail.com
                </div>
            </div>

            <div className="d-inline px-4 border text-center pt-2">
                Total: 4,000 EGP
            </div>

            <div className="d-flex mt-2 justify-content-center">
                <select className="form-select input-form-area mt-1 text-center px-2 w-50">
                    <option value="status">Order Status</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>
                <button className="btn btn-primary px-3 d-inline mx-2">Save</button>
            </div>
        </div>

    </div>
  )
}

export default AdminOrdersDetails
