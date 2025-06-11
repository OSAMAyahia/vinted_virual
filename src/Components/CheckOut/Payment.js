import React from 'react'

const Payment = () => {
  return (
    <div className='container' style={{minHeight:'670px'}}>
<div className="pt-5 " style={{textAlign:"left", fontWeight:700, fontSize:"1.1rem"}}>Choose Payment Method</div>
<div className="user-address-card my-3 px-3" style={{textAlign:"left"}}>
    <div className="row d-flex  ">
        <div className="col-12 my-4">
            <input
                name="group"
                id="group1"
                type="radio"
                value="Pay by Credit Card"
                className="mt-2"
            />
            <label className="mx-2"   for="group1">
                Pay by Credit Card
            </label>
        </div>
    </div>

    <div className="row mt-3">
        <div className="col-12 d-flex">
            <input
                name="group"
                id="group2"
                type="radio"
                value="Pay on Delivery"
                className="mt-2"
            />
            <label className="mx-2"   for="group2">
                Pay on Delivery
            </label>
        </div>
    </div>
</div>

<div className="row">
    <div className="col-12 d-flex justify-content-end">
        <div className="product-price d-inline border">34,000 EGP</div>
        <div className="product-cart-add px-3 pt-2 d-inline me-2">Complete Purchase</div>
    </div>
</div>

    </div>
  )
}

export default Payment
