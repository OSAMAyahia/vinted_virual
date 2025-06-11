import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';
import { getAllCategory } from './../../Redux/Actions/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { GetsubcatAction } from './../../Redux/Actions/SubcatAction';
import { CompactPicker } from 'react-color';
import createproduct from './../../Redux/Actions/ProductAction';
import { getallBrand } from '../../Redux/Actions/BrandAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const avatar = "https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/avatar.png";
const add = "https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/add.png";

// Improved notification function with longer display time
const notify = (message, status) => {
    if (status === 'success') {
        toast.success(message, { autoClose: 3000 });
    } else {
        toast.error(message, { autoClose: 5000 });
    }
};

const AdminAddProducts = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState({});
    const [prodname, setprodname] = useState('');
    const [ProdDescription, setProdDescription] = useState('');
    const [priceBD, setpriceBD] = useState('');
    const [priceAD, setpriceAD] = useState('');
    const [Category, setCategory] = useState('');
    const [subCategory, setsubCategory] = useState([]);
    const [selectedsubCategory, setselectedsubCategory] = useState([]);
    const [brand, setsetbrand] = useState('');
    const [Quantity, setsQuantity] = useState('');
    const [color, setcolor] = useState(false);
    const [colors, setcolors] = useState([]);
    
    // New state for form validation and submission
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        dispatch(getAllCategory(100));
    }, [dispatch]);

    const data = useSelector(state => state.allCategory.category);

    useEffect(() => {
        dispatch(getallBrand());
    }, [dispatch]);
    
    // Get brands data from Redux store
    const data1 = useSelector(state => state.allBrand.brand);
    let brandsArray = [];
    if (data1 && data1.data && data1.data.data) {
        brandsArray = data1.data.data;
    }
    
    // Load subcategories when category changes - wrapped in try/catch to handle errors
    useEffect(() => {
        if (Category && Category !== 'val') {
            try {
                dispatch(GetsubcatAction(Category));
            } catch (error) {
                console.error("Error loading subcategories:", error);
            }
        }
    }, [Category, dispatch]);
    
    // Get subcategories from Redux store with error handling
    const subcatData = useSelector(state => {
        try {
            // Check if subCategory exists in state before accessing it
            return state.subCategory && state.subCategory.subcategory ? state.subCategory.subcategory : null;
        } catch (error) {
            console.error("Error accessing subcategory state:", error);
            return null;
        }
    });
    
    useEffect(() => {
        if (subcatData && subcatData.data) {
            setsubCategory(subcatData.data);
        }
    }, [subcatData]);

    const handlecat = (e) => {
        setCategory(e.target.value);
        // Reset subcategories when category changes
        setselectedsubCategory([]);
    }

    const handelbrand = (e) => {
        setsetbrand(e.target.value);
    }

    const handlecolor = (c) => {
        setcolor(!color);
        setcolors([...colors, c.hex]);
    }

    const hadlecolors = (c) => {
        const x = colors.filter((i) => i !== c);
        setcolors(x);
    }

    // Validate form fields
    const validateForm = () => {
        const newErrors = {};
        
        if (!prodname.trim()) {
            newErrors.prodname = "Product name is required";
        } else if (prodname.length < 3) {
            newErrors.prodname = "Product name must be at least 3 characters";
        } else if (prodname.length > 100) {
            newErrors.prodname = "Product name must be less than 100 characters";
        }
        
        if (!ProdDescription.trim()) {
            newErrors.ProdDescription = "Product description is required";
        } else if (ProdDescription.length < 20) {
            newErrors.ProdDescription = "Description must be at least 20 characters";
        }
        
        if (!priceBD || priceBD <= 0) {
            newErrors.priceBD = "Valid price before discount is required";
        } else if (priceBD > 200000) {
            newErrors.priceBD = "Price must be less than 200,000";
        }
        
        if (!priceAD || priceAD <= 0) {
            newErrors.priceAD = "Valid price after discount is required";
        } else if (priceAD > priceBD) {
            newErrors.priceAD = "Discounted price cannot be higher than original price";
        }
        
        if (!Quantity || Quantity <= 0) {
            newErrors.Quantity = "Valid quantity is required";
        }
        
        if (!Category || Category === 'val') {
            newErrors.Category = "Please select a category";
        }
        
        if (!brand || brand === 'val') {
            newErrors.brand = "Please select a brand";
        }
        
        if (!colors || colors.length === 0) {
            newErrors.colors = "Please select at least one color";
        }
        
        if (Object.keys(images).length === 0) {
            newErrors.images = "Please upload at least one product image";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    function base64ToFile(base64String, fileName = 'image.jpg') {
        try {
            const bytes = atob(base64String.split(',')[1]);  
            const byteNumbers = new Array(bytes.length);
            for (let i = 0; i < bytes.length; i++) {
                byteNumbers[i] = bytes.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            return new File([byteArray], fileName, { type: 'image/jpeg' });  
        } catch (error) {
            console.error("Failed to decode base64: ", error);
            return null;
        }
    }
    
    const handleButton = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            // Scroll to the first error
            const firstErrorKey = Object.keys(errors)[0];
            const errorElement = document.querySelector(`[name="${firstErrorKey}"]`);
            if (errorElement) {
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        setIsSubmitting(true);
    
        const formdata = new FormData();
        formdata.append("title", prodname);
        formdata.append("description", ProdDescription);
        formdata.append("quantity", Quantity);
        formdata.append("price", priceBD);
        formdata.append("priceAfterDiscount", priceAD);
        
        // Convert colors array to string to prevent backend parsing issues
        formdata.append("colors", JSON.stringify(colors));
    
        const imagesArray = Object.values(images);
    
        try {
            if (imagesArray.length > 0) {
                const imageCoverFile = base64ToFile(imagesArray[0], "cover-image.jpg");
                if (imageCoverFile) {
                    formdata.append("imageCover", imageCoverFile);
                } else {
                    throw new Error("Failed to process cover image");
                }
        
                // Add additional images
                imagesArray.slice(1).forEach((imageBase64, index) => {
                    const imageFile = base64ToFile(imageBase64, `image-${index + 1}.jpg`);
                    if (imageFile) {
                        formdata.append("images", imageFile);
                    } else {
                        throw new Error(`Failed to process image ${index + 1}`);
                    }
                });
            } else {
                throw new Error("Please upload at least one product image");
            }
        
            formdata.append("category", Category);
            
            // Skip subcategories if they're not available or not selected
            if (selectedsubCategory && selectedsubCategory.length > 0) {
                try {
                    const subcategoryIds = selectedsubCategory.map(item => item._id);
                    formdata.append("subcategories", JSON.stringify(subcategoryIds));
                } catch (err) {
                    console.warn("Error processing subcategories:", err);
                    // Continue without subcategories
                }
            }
            
            formdata.append("brand", brand);
            formdata.append("slug", slugify(prodname));
        
            // Log the form data for debugging
            for (let pair of formdata.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
            
            try {
                const response = await dispatch(createproduct(formdata));
                
                // Check if the response indicates success
                if (response && response.status === 'success') {
                    notify("Product created successfully!", "success");
                    
                    // Reset form fields
                    setprodname('');
                    setProdDescription('');
                    setpriceBD('');
                    setpriceAD('');
                    setsQuantity('');
                    setCategory('');
                    setselectedsubCategory([]);
                    setsetbrand('');
                    setcolors([]);
                    setImages({});
                    setErrors({});
                } else {
                    // Handle specific error messages from the backend
                    const errorMessage = response && response.message 
                        ? response.message 
                        : "Error creating product. Please check all fields and try again.";
                        
                    notify(errorMessage, "error");
                }
            } catch (error) {
                console.error("Dispatch error:", error);
                notify("Network error or server problem. Please try again.", "error");
            }
        } catch (error) {
            console.error("Error in product creation:", error);
            const errorMessage = error.response?.data?.message || error.message || "Error creating product";
            notify(errorMessage, "error");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    // Helper function to slugify product name
    function slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    return (
        <div style={{ minHeight: '800px' }} className='container my-4'>
            <ToastContainer position="top-right" />
            <div className="row justify-content-start">
                <div className="admin-content-text pb-4">Add New Product</div>
                <div className="col-9">
                    <form onSubmit={handleButton}>
                        <div className="text-form pb-2">Product Images</div>
                        <div style={{ textAlign: 'left' }}>
                            <MultiImageInput
                                theme={{
                                    background: '#ffffff',
                                    outlineColor: errors.images ? '#ff0000' : '#111111',
                                    textColor: 'rgba(255,255,255,0.6)',
                                    buttonColor: '#ff0e1f',
                                    modalColor: '#ffffff'
                                }}
                                max={5}
                                allowCrop={false}
                                images={images}
                                setImages={setImages}
                            />
                            {errors.images && <div className="text-danger mt-1">{errors.images}</div>}
                            <small className="text-muted">Upload at least one image (first image will be the cover)</small>
                        </div>
                        
                        <div className="form-group mt-3">
                            <input
                                value={prodname}
                                onChange={v => setprodname(v.target.value)}
                                type="text"
                                className={`form-control ${errors.prodname ? 'is-invalid' : ''}`}
                                placeholder="Product Name *"
                                name="prodname"
                            />
                            {errors.prodname && <div className="invalid-feedback">{errors.prodname}</div>}
                        </div>
                        
                        <div className="form-group mt-3">
                            <textarea
                                className={`form-control ${errors.ProdDescription ? 'is-invalid' : ''}`}
                                rows="4"
                                placeholder="Product Description *"
                                value={ProdDescription}
                                onChange={v => setProdDescription(v.target.value)}
                                name="ProdDescription"
                            />
                            {errors.ProdDescription && <div className="invalid-feedback">{errors.ProdDescription}</div>}
                            <small className="text-muted">Minimum 20 characters</small>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <input
                                        value={priceBD}
                                        onChange={v => setpriceBD(v.target.value)}
                                        type="number"
                                        className={`form-control ${errors.priceBD ? 'is-invalid' : ''}`}
                                        placeholder="Price Before Discount *"
                                        name="priceBD"
                                    />
                                    {errors.priceBD && <div className="invalid-feedback">{errors.priceBD}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <input
                                        value={priceAD}
                                        onChange={v => setpriceAD(v.target.value)}
                                        type="number"
                                        className={`form-control ${errors.priceAD ? 'is-invalid' : ''}`}
                                        placeholder="Price After Discount *"
                                        name="priceAD"
                                    />
                                    {errors.priceAD && <div className="invalid-feedback">{errors.priceAD}</div>}
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group mt-3">
                            <input
                                value={Quantity}
                                onChange={v => setsQuantity(v.target.value)}
                                type="number"
                                min="1"
                                className={`form-control ${errors.Quantity ? 'is-invalid' : ''}`}
                                placeholder="Quantity Available *"
                                name="Quantity"
                            />
                            {errors.Quantity && <div className="invalid-feedback">{errors.Quantity}</div>}
                        </div>
                        
                        <div className="form-group mt-3">
                            <select
                                onChange={handlecat}
                                name="Category"
                                value={Category}
                                className={`form-select ${errors.Category ? 'is-invalid' : ''}`}>
                                <option value="val">Select Main Category *</option>
                                {data?.Data ? (data.Data.map(i => (
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                ))) : null}
                            </select>
                            {errors.Category && <div className="invalid-feedback">{errors.Category}</div>}
                        </div>

                        <div className="form-group mt-3">
                            {/* Only render the Multiselect if subCategory is valid */}
                            {subCategory && Array.isArray(subCategory) ? (
                                <>
                                    <Multiselect
                                        className={errors.subcategory ? 'border-danger' : ''}
                                        placeholder="Select Subcategories (Optional)"
                                        options={subCategory}  
                                        onSelect={(selectedList) => setselectedsubCategory(selectedList)}
                                        onRemove={(selectedList) => setselectedsubCategory(selectedList)}
                                        displayValue="name"
                                        style={errors.subcategory ? { chips: { background: 'red' } } : {}}
                                    />
                                    <small className="text-muted">Subcategories are optional</small>
                                </>
                            ) : (
                                <div className="alert alert-info">
                                    Subcategories will be available after selecting a main category
                                </div>
                            )}
                        </div>
                        
                        <div className="form-group mt-3">
                            <select
                                onChange={handelbrand}
                                name="brand"
                                value={brand}
                                className={`form-select ${errors.brand ? 'is-invalid' : ''}`}>
                                <option value="val">Select Brand *</option>
                                {brandsArray && brandsArray.length > 0 ? (
                                    brandsArray.map(i => (
                                        <option key={i._id} value={i._id}>{i.name}</option>
                                    ))
                                ) : (
                                    <option disabled>No brands available</option>
                                )}
                            </select>
                            {errors.brand && <div className="invalid-feedback">{errors.brand}</div>}
                        </div>
                        
                        <div className="form-group mt-3">
                            <div className="text-form">Available Colors *</div>
                            <div className='d-flex flex-wrap'>
                                {colors && colors.length > 0 ? (
                                    colors.map((i, index) => (
                                        <div
                                            key={index}
                                            onClick={() => hadlecolors(i)}
                                            className="color ms-2 border mt-1"
                                            style={{ 
                                                backgroundColor: i, 
                                                width: '30px', 
                                                height: '30px',
                                                borderRadius: '50%',
                                                cursor: 'pointer'
                                            }}
                                            title="Click to remove"
                                        ></div>
                                    ))
                                ) : (
                                    <span className="text-muted">No colors selected</span>
                                )}

                                <div className="ms-2 mt-1">
                                    <img 
                                        onClick={() => setcolor(!color)} 
                                        style={{ cursor: "pointer" }} 
                                        src={add} 
                                        alt="Add Color" 
                                        width="30px" 
                                        height="35px" 
                                        title="Add color" 
                                    />
                                </div>
                            </div>
                            
                            {color && (
                                <div className="mt-2 mb-3">
                                    <CompactPicker onChangeComplete={handlecolor} />
                                </div>
                            )}
                            
                            {errors.colors && <div className="text-danger">{errors.colors}</div>}
                        </div>
                        
                        <div className="row mt-4 mb-5">
                            <div className="col-12 d-flex justify-content-end">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary d-inline"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Saving...' : 'Save Product'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAddProducts;