import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from './../../Redux/Actions/categoryAction';
 
import subcatAction from './../../Redux/Actions/SubcatAction';

const AdminAddSubCategory = () => {
  
    const [name,setname]=useState('')
    const [choosecat,setcat]=useState('')
    const handleselect = (e) => {
        let datas= e.target.value
        if (e.target.value)
        setcat(datas);
        console.log('cat id',datas);
        console.log('cat idddd',choosecat);
    }
    const dispatch = useDispatch();
     useEffect(() => {
        // dispatch(getAllCategory()); // استدعاء الدالة لجلب الفئات من الـ API
 
      }, [dispatch]);

      useEffect(() => {
        console.log('Updated cat id:', choosecat);
    }, [choosecat]);
    
 
         const data =  useSelector(state => state.allCategory.category)
      
    console.log('sub is',data)
    const handleButton= async (e)=>{
        e.preventDefault(); // لتجنب التحميل التلقا��ي
        if (!choosecat) {
            console.error('Category is not selected'); // التأكد من أن الفئة مختارة
            return}
        // const dataform=new FormData()
        // dataform.append('name',name)
        // dataform.append('category',choosecat)
        // console.log('categorysubid',choosecat)
       await dispatch(subcatAction({
        name,
        category:choosecat
    }))
     }
    return (
        <div>
            <div className="row justify-content-start">
                <div className="admin-content-text pb-4">Add New Subcategory</div>
                <div className="col-sm-8">
                    <input
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                        type="text"
                        className="form-control d-block mt-3 px-3"
                        placeholder="Subcategory Name"
                    />
                    <select name="languages" id="lang" className="form-select mt-3 px-2" onChange={handleselect}>
                        <option disabled value="0">choose category</option>
                        {
                        data?.Data? (data.Data.map(item=>{return (
                                <option key={item._id} value={item._id}  >{item.name}</option>)}) ) :null 
                        }
                      
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 d-flex justify-content-end">
                    <button onClick={handleButton} className="btn btn-primary d-inline mt-2">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default AdminAddSubCategory;
