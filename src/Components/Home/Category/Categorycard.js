import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../Redux/Actions/categoryAction';

const CategoryCard = () => {
  const dispatch = useDispatch();
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

  useEffect(() => {
    dispatch(getAllCategory()); // استدعاء الدالة لجلب الفئات من الـ API
  }, [dispatch]);

  const data = useSelector(state => state.allCategory.category); // نفترض أن allCategory تحتوي على مصفوفة من الفئات
  const load = useSelector(state => state.allCategory.loading); // نفترض أن allCategory تحتوي على مصفوفة من الفئات
  console.log(data); // تأكد من أن البيانات تُظهر ما تتوقعه

  // إضافة تحقق للتأكد من وجود بيانات قبل استخدام map
  

  return (
    <div className='row my-5'>
      {load === false ? ( 
        data.Data.slice(0,6).map((category) => (
          <div key={category._id} className="col-md-4 col-sm-6 col-lg-2 col-6 my-2">
            <div>
              <img 
                src={`http://localhost:8000/users/${category.image}`} 
                alt={category.name}
                style={{ borderRadius: "150px", height: "130px", width: "150px", background: colors[Math.floor(Math.random() * 5) + 1] }} 
                className="card-img-top" 
              />
              <div className="card-body mt-2">
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1,  }}>
        <div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
      
      )}
    </div>
  );}
  

export default CategoryCard;
