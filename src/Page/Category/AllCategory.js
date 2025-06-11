import React, { useEffect } from 'react';
import CategoryContainer from '../../Components/Home/Category/CategoryContainer';
import Pagination from '../../Components/utilities/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategorypage } from '../../Redux/Actions/categoryAction';

const AllCategory = () => {
//   // دالة لجلب البيانات
//   const fetchCategories = async () => {
//        let response = await BaseUrl.get('/api/v1/category');
//       console.log(response.data);  // يجب أن تكون response.data وليس response.Data
//       console.log("Data fetched successfully");
//    };

//   // استخدام useEffect بدلاً من useState لجلب البيانات عند تحميل المكون
//   useEffect(() => {
//     fetchCategories();
//   }, []); // يتم استدعاء useEffect مرة واحدة عند التحميل
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(5)); // استدعاء الدالة لجلب الفئات من الـ API
  }, [dispatch]);

  const data = useSelector(state => state.allCategory.category); // نفترض أن allCategory تحتوي على مصفوفة من الفئات
  const load = useSelector(state => state.allCategory.loading);
  let PaginationCategory;
  if (data && data.PaginationCategory && data.PaginationCategory.totalPages) {
      PaginationCategory=data.PaginationCategory.totalPages
    console.log('The total pages are:', data.PaginationCategory.totalPages);
  }
  const getpage=(page)=>{
    dispatch(getAllCategorypage(page)); // استدعاء الدالة لجلب الفئات من الـ API
  }
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={data.Data} load={load}/>
      {PaginationCategory>1?( <Pagination PageCount={ PaginationCategory} onpress={getpage}/>
) : null}
    </div>
  );
};

export default AllCategory;
