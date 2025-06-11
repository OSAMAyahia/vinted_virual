import React ,{useEffect} from 'react'
 import { useDispatch ,useSelector } from 'react-redux';
import { createCouponAction } from './../../Redux/Actions/CouponAcion';

const AddCoupon = ( ) => {
    const dispatch = useDispatch();
    const fetchCoupon = async (body) => {
            await dispatch(createCouponAction(body));
          };
    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     await dispatch(getoneproduct(id));
    //   };
    
    //   fetchProducts();
    // }, [dispatch]);
    
    // const data = useSelector(state => state.allproduct.data);
    // let loadData;
    // if (data &&  data.data &&  data.data.Data) {
    //    loadData= data.data.Data;
    // }
    //  let item =[]
    // if (loadData){
    //     item=loadData 
    // }
    // else item=[]
    return [fetchCoupon]
}

export default AddCoupon
