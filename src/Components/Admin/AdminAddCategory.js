import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { createCategory, getAllCategory } from './../../Redux/Actions/categoryAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const avatar = "https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/avatar.png";

const AdminAddCategory = () => {
  const [img, setimg] = useState(avatar);
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setloading] = useState(true);
  const [ispress, setpress] = useState(false);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log('e.target.files IS', e.target.files);
      setimg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllCategory(100)); // استدعاء الدالة لجلب الفئات من الـ API

  }, [dispatch]);

  const notify = (message, status) => {
    if (status === 'success') {
      toast.success(message); 
    } else {
      toast.error(message);  
    }
  };
   const handelSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', selectedFile);

    if (selectedFile === null || name.trim() === '') {
      notify("Please enter a name and an image!", "error"); // إشعار عن الخطأ
      return;
    }

    setpress(true);
    setloading(true);
    
    try {
      await dispatch(createCategory(formData));
      notify("Category added successfully!", "success"); // إشعار عن النجاح
    } catch (e) {
      console.error(e);
      notify("An error occurred while adding the category.", "error"); // إشعار عن الخطأ
    } finally {
      setloading(false);
    }
  };
const d=useSelector(state=>state.allCategory.category)
if (d){

  console.log('the d is',d);
}
  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setName('');
        setimg(avatar);
        setSelectedFile(null);
        setpress(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <div>
      <ToastContainer /> 
      <div className="row justify-content-start">
        <div className="admin-content-text pb-4">Add New Category</div>
        <div className="col-sm-8">
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="fileInput">
              <img
                src={img}
                id="avatarImage"
                height="100px"
                width="120px"
                style={{ cursor: 'pointer' }}
              />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            className="form-control d-block mt-3 px-3"
            placeholder="Category Name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 d-flex justify-content-end">
          <button onClick={handelSubmit} className="btn btn-primary d-inline mt-2">
            Save Changes
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-8 d-flex justify-content-center">
          {ispress ? (
            loading ? (
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <h4 style={{ color: 'green' }}>Success</h4>  
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategory;
