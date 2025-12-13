import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createBrand, getAllBrand } from '../../Redux/Actions/BrandAction';
import { ToastContainer,toast } from 'react-toastify';
const avatar= "https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/avatar.png"
const AdminAddBrand = () => { 
    const [img,setimg]=useState(avatar)
    const [selectedFile, setSelectedFile] = useState(null);
    const [name,setname]=useState('')
    const [loading, setloading] = useState(true);
 
    const handleimg=(e)=>{
        e.preventDefault();
        if(e.target.files && e.target.files[0]){
            setimg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0]);

        }
    }
    const toasty=(m,s)=>{
        if (s==="success")
        {toast.success(m)}
        else{
            toast.error(m)
        }
    }
    const dispatch=useDispatch()
    const handleName=(e)=>{
        setname(e.target.value)
    }
    const handleSubmit= async(e)=>
    {e.preventDefault()
        const formdata=new FormData()
        formdata.append('name',name)
        formdata.append('image',selectedFile)
        if (selectedFile===null ||name.trim()==''){
            toasty('Please enter a name and a file','erorr')
            return

        }
        // setloading(true)

         await dispatch( createBrand(formdata))
         toasty('uploaded successfully','success')
         setloading(false)

        
    }
    useEffect(()=>{
        if(loading===false){
                   setname('')
            setimg(avatar)
        }
    },[loading])

    // Fetch brands on component mount
    useEffect(() => {
        dispatch(getAllBrand())
    }, [dispatch])

    const brands = useSelector(state => state.allBrand.brand?.data || [])
    return (
        <div>
            <ToastContainer/>
            <div className="row justify-content-start">
                <div className="admin-content-text pb-4">Add New Brand</div>
                <div className="col-sm-8">
                    <div className="text-form pb-2">Brand Image</div>
                    <div style={{textAlign:"left"}}>
                    <label    htmlFor="exampleFormControlInput1"  ><img src={img} alt="Brand" style={{cursor:'pointer'}} height="100px" width="120px" />  </label>
                    <input onChange={handleimg} type="file"   id="exampleFormControlInput1"   style={{display:'none '}} />

                    </div>
                    <input
                        type="text"
                        onChange={handleName}
                        value={name}
                        className="form-control d-block mt-3 px-3"
                        placeholder="Brand Name"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 d-flex justify-content-end">
                    <button onClick={handleSubmit} className="btn btn-primary d-inline mt-2">Save Changes</button>
                </div>
            </div>
            
            {/* Display existing brands */}
            <div className="row mt-5">
                <div className="col-sm-8">
                    <div className="admin-content-text pb-3">Existing Brands</div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {brands.map((brand) => (
                                    <tr key={brand._id}>
                                        <td>
                                            <img 
                                                src={brand.image} 
                                                alt={brand.name}
                                                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                                className="rounded"
                                            />
                                        </td>
                                        <td>{brand.name}</td>
                                        <td>
                                            <button className="btn btn-sm btn-warning me-2">Edit</button>
                                            <button className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {brands.length === 0 && (
                            <div className="text-center p-4">
                                <p>No brands found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddBrand;
