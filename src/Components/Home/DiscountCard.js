import React from 'react'
import { Link } from 'react-router-dom'
import diss from './Screenshot 2025-05-17 150820.png'

const DiscountCard = () => {
  return (
    <div className='ms-3 me-3' style={{ maxWidth: "100%" }}>
      <div className='row my-5'>
        <div className="col-12 p-0">
          <Link to="/admin/addproduct" className="d-block w-100">
            <img 
              src={diss}
                className="rounded-5 w-100 d-block"

              style={{ width: "100%", height: "auto", display: "block" }} 
              alt="discount banner"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DiscountCard