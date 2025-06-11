import React ,{useEffect} from 'react'
import { getoneproduct } from '../../Redux/Actions/ProductAction';
import { useDispatch ,useSelector } from 'react-redux';

const GetDetailsOneProductHooks = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchProducts = async () => {
        await dispatch(getoneproduct(id));
      };
    
      fetchProducts();
    }, [dispatch]);
    
    const products = useSelector((state) => state.allproduct || {});

    console.log("productsss:", products);
  
    // إعداد البيانات للعرض
    let item = [];
    if (products.oneProduct
&& products.oneProduct
.data && products.oneProduct
.data.Data) {
      item = products.oneProduct
.data.Data;
    }

    console.log(" item item  item item  item item ",item);
    return [item]
}

export default GetDetailsOneProductHooks
