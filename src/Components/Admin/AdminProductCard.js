import React from 'react'
import { Link } from 'react-router-dom'

const AdminProductCard = () => {
  return (
    <div>
    
       <div className='row my-1 g-3'>
      {/* Card 1 */}
        <div className="card h-100">
        <div className='d-flex justify-content-between' style={{color:"#7e7e7e" , fontWeight:"480"}} >
            <div> <small>Update</small> </div>
            <div> <small>Delete</small> </div>
        </div>
          <Link to='products/:id'>
          <img  src="https://th.bing.com/th/id/OIF.3sF7C7VygCxjDN7UK0nEEw?rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
          </Link>
          <div className='d-flex justify-content-start ms-3 mt-2'>
            <img style={{ width: '29px', height: "28px" }} src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/fav-off.png' alt="favorite"/>
          </div>
          <div className="card-body">
            <p className="card-text">Apple iPhone 16 Pro Max 512GB Black Titanium</p>
            <div className='d-flex justify-content-between'>
              <p><strong>150k</strong> EG</p>
              <div>
                <span style={{ color: 'gold', marginLeft: '5px' }}>4.5</span>
                <img src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/rate.png' style={{ width: '23px', height: "20px" }} alt="rating" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard
