 import {useEffect} from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import {  GetCouponAction } from './../../Redux/Actions/CouponAcion';


const ViewAllCoupon = () => {
        const dispatch = useDispatch();
       const fetchCoupon = async ( ) => {
               await dispatch(GetCouponAction( ));
             };
    // let fetchCoupon
    //    useEffect(() => {
    //        fetchCoupon = async () => {
    //        await dispatch(GetCouponAction( ));
    //      };
       
    //      fetchCoupon();
    //    }, [dispatch]);
       
       const data = useSelector(state => state.Coupon.data);
    //    if(data){

    //     console.log("data from hook", data)
    // }
       let loadData;
       if (data &&    data.data) {
          loadData= data.data;
       }
        let items =[]
       if (loadData){
           items=loadData 
       }
       else items=[]
    //    if(items){

    //        console.log("items from hook", items)
    //    }
       return [fetchCoupon,items]
 
   
    
}

export default ViewAllCoupon
