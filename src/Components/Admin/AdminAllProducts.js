import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminProductCard from './AdminProductCard'
import { getallproduct } from '../../Redux/Actions/ProductAction'

const AdminAllProductss = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.allproduct.allProducts?.data?.Data || [])

  useEffect(() => {
    dispatch(getallproduct())
  }, [dispatch])

  return (
    <div className='container'>
      <div className='row'>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product._id} className="col-6 col-sm-6 col-md-4 col-lg-4">
              <AdminProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminAllProductss
 
