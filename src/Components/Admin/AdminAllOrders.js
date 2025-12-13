import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminOneOrder from './AdminOneOrder'

const AdminAllOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders?.adminOrders?.data || [])

  useEffect(() => {
    // Fetch orders - you may need to create an action for this
    // For now, we'll use mock data directly
  }, [])

  return (
    <div>
      {orders.length > 0 ? (
        orders.map(order => (
          <AdminOneOrder key={order._id} order={order} />
        ))
      ) : (
        <div className="text-center p-4">
          <p>No orders found</p>
        </div>
      )}
    </div>
  )
}

export default AdminAllOrders
 