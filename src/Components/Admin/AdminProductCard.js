import React from 'react'
import { Link } from 'react-router-dom'

const AdminProductCard = ({ product }) => {
  return (
    <div>
    
       <div className='row my-1 g-3'>
      {/* Card 1 */}
        <div className="card h-100">
        <div className='d-flex justify-content-between' style={{color:"#7e7e7e" , fontWeight:"480"}} >
            <div> <small>Update</small> </div>
            <div> <small>Delete</small> </div>
        </div>
          <Link to={`/products/${product?._id || ':id'}`}>
          <img  src={product?.imageCover || "https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/mobile.png"} onError={(e) => { e.currentTarget.src = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/mobile.png' }} className="card-img-top" alt={product?.title || "Product"} />
          </Link>
          <div className='d-flex justify-content-start ms-3 mt-2'>
            <img style={{ width: '29px', height: "28px" }} src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/fav-off.png' alt="favorite"/>
          </div>
          <div className="card-body">
            <p className="card-text">{product?.title || "Apple iPhone 16 Pro Max 512GB Black Titanium"}</p>
            <div className='d-flex justify-content-between'>
              <p><strong>{product?.price || "150k"}</strong> EG</p>
              <div>
                <span style={{ color: 'gold', marginLeft: '5px' }}>{product?.ratingsQuantity || "4.5"}</span>
                <img src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/rate.png' style={{ width: '23px', height: "20px" }} alt="rating" />
              </div>
            </div>
            {product && (
              <div className='d-flex justify-content-between small text-muted'>
                <span>{product.category}</span>
                <span>{product.condition}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard
