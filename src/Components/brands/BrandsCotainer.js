import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getallBrand} from './../../Redux/Actions/BrandAction';

const BrandContainer = () => {
  const dispatch= useDispatch()
  useEffect(()=>{ dispatch(getallBrand())},[])
  const data=useSelector(state=>state.allBrand)
  const brand = data?.brand?.data ??  []
  console.log("the bb is ",brand)
  return (
    <div 
     className='row my-3  ms-5 me-5 g-0'>
      {
        brand.length > 0 ? (
          brand.map((item) => (
            <div key={item._id} className="col-md-4 my-3 col-sm-6 col-lg-2 col-6  ">
              <div className="card" style={{ maxWidth: "12rem" }}>
                <img
                  src={item.image || 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/avatar.png'}
                  onError={(e) => { e.currentTarget.src = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/avatar.png' }}
                  alt={item.name || "Brand Image"}
                  style={{ width: "100%", height: "140px", objectFit: "contain" }}
                />
              </div>
            </div>
          ))
        ) : (
<div className='d-flex justify-content-center align-items-center 'style={{ minHeight: '50vh'  }}>
<div className="spinner-border " role="status" style={{  width: "3rem", height: "3rem"}}  >
  <span className="visually-hidden">Loading...</span>
</div>        </div>
  )
      }
    </div>
  );
}

export default BrandContainer
