import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getallBrand} from './../../Redux/Actions/BrandAction';

const BrandsCard = () => {
 const dispatch= useDispatch()
 useEffect(()=>{ dispatch(getallBrand())},[])
 const data=useSelector(state=>state.allBrand)
  const brands = data?.brand?.data?.data ?? [];

 console.log('Brands data:', brands);
  return (
    <div className='row my-5 mx-3 ms-5 me-5 g-2'>
            {brands.length > 0 ? (
                brands.slice(0,6).map((item, index) => (
                  
                    <div key={index} className="col-md-4 col-sm-6 col-lg-2 col-6 g-2 my-2">
                        <div className="card" style={{ maxWidth: "12rem" }}>
                            <img 
                                src={item.image} 
                                className="card-img-top" 
                                alt={item.name || "Brand Image"}  
                                style={{ width: "100%", height: "180px" , objectFit: "cover", // أو يمكنك استخدام "contain" إذا كنت تريد أن تكون الصورة داخل الإطار دون قص
                                    objectPosition: "center"  }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>لا توجد بيانات لعرضها</p>
            )}
        </div>
);

}

export default BrandsCard
