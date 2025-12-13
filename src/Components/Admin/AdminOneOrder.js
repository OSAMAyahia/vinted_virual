import { Link } from "react-router-dom"

const  mobile ='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/mobile.png'
const deleteicon ='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/delete.png'

const AdminOneOrder = ({ order }) => {
  if (!order) return null

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#ffc107'
      case 'processing': return '#17a2b8'
      case 'delivered': return '#28a745'
      case 'cancelled': return '#dc3545'
      default: return '#6c757d'
    }
  }
  return (
    <div> 
            <div className="col-12 cart-item-body my-2 d-flex px-2 ">
            
      <Link to='/admin/orders/23' style={{textDecoration:"none"}}>
      <img width="160px" height="197px" src={mobile} alt="mobile" /> </Link>
      <div className="w-100">
        <div className="row justify-content-between">
          <div className="col-12 d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">Order Number #32982</div>
            <div className="d-flex pt-2" style={{ cursor: "pointer" }}>
            
                          <div className="cat-text d-inline me-2">Remove</div>
              <img src={deleteicon} alt="delete" width="20px" height="24px" />
            </div>
          </div> 
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-12 d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              iPhone XR with 128GB Memory, 4G LTE Enabled with Face ID
            </div>
            <div className="d-inline ms-2 pt-2 cat-rate me-2">4.5</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex mt-1">
            <div className="cat-text  ">Brand:</div>
            <div className="barnd-text  mx-1">Apple</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "#E52C2C" }}></div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text d-inline">Quantity</div>
              <input
                className="mx-2"
                type="number"
                style={{ width: "40px", height: "25px" }}
              />
            </div>
            <div className="d-inline pt-2 barnd-text">$300</div>
          </div>
        </div>
      </div>
    </div>
 

    </div>
    
  );
};

export default AdminOneOrder;
