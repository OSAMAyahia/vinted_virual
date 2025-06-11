import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Route ,Routes}from 'react-router-dom'
import NavBarLogin from './Components/Home/NavBarLogin';
import Footer from './Components/utilities/Foooter';
import Loginpage from './Page/auth/Loginpage';
import Regerster from './Page/auth/Regerster';
import AllCategory from "./Page/Category/AllCategory";  
import AllBrand from './Page/Brands/AllBrands';
import ShopProduct from './Components/Home/Products/ShopProduct';
import ProductsDetails from './Components/products/ProductsDetailsPage';
import CartPage from './Page/Cart/CartPage';
import PaymentPage from './Page/CheckOutPage/PaymentPage';
import AdminAllProducts from './Page/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './Page/Admin/AdminAllOrdersPage';
import AdminOrdersDetailsPage from "./Page/Admin/AdminOrdersDetailsPage";
import AdminBrandPage from "./Page/Admin/AdminBrandPage";
import AdminCategoryPage from './Page/Admin/AdminCategoryPage';
import AdminSubCategoryPage from './Page/Admin/AdminSubCategoryPage';
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserOrdersPage from './Page/User/UserOrdersPage';
import UserFavoritePage from './Page/User/UserFavoritePage';
import UserAdressPage from "./Page/User/UserAdressPage";
 import UserAddAdressPage from "./Page/User/UserAddAdressPage";
import UserUpdateAdressPage from './Page/User/UserUpdateAdressPage';
import UserPage from './Page/User/UserPage';
import AdminCouponPage from './Page/Admin/AdminCouponPage';
import AdminViewCouponPage from "./Page/Admin/AdminViewCouponPage";
import AdminUpdateCouponPage from './Page/Admin/AdminUpdateCouponPage';

function App() {
  return (
    <div className="text-center ">

<BrowserRouter>
<NavBarLogin/> 
<Routes>
           

  <Route index element={<HomePage/> } />
  <Route path="/login" element={<Loginpage/> } />
  <Route path="/register" element={<Regerster/> } />

  <Route path="/allcategory" element={<AllCategory/>}></Route>
  <Route path="/allbrands" element={<AllBrand/>}></Route>
  <Route path="/products" element={<ShopProduct/>}></Route>
  <Route path="/cart" element={<CartPage/>}></Route>
  <Route path="/products/:id" element={<ProductsDetails/>}></Route>
  <Route path="/order/paymethod" element={<PaymentPage/>}></Route>
  <Route path="/admin/products" element={<AdminAllProducts/>}></Route>
  <Route path="/admin/orders" element={<AdminAllOrdersPage/>}></Route>
  <Route path="/admin/orders/23" element={<AdminOrdersDetailsPage/>}></Route>
  <Route path="/admin/addbrand" element={<AdminBrandPage/>}></Route>
  <Route path="/admin/addcategory" element={<AdminCategoryPage/>}></Route>
  <Route path="/admin/addsubcategory" element={<AdminSubCategoryPage/>}></Route>
  <Route path="/admin/addproduct" element={<AdminAddProductsPage/>}></Route>
  <Route path="/admin/addcoupon" element={<AdminCouponPage/>}></Route>
  <Route path="/admin/edit-coupon/:id" element={<AdminUpdateCouponPage/>}></Route>
   <Route path="/admin/allcoupon" element={<AdminViewCouponPage/>}></Route>
  <Route path="/user/orders" element={<UserOrdersPage/>}></Route>
  <Route path="/user/favorite" element={<UserFavoritePage/>}></Route>
  <Route path="/user/personal" element={<UserAdressPage/>}></Route>
  <Route path="/user/add-address" element={<UserAddAdressPage/>}></Route>
  <Route path="/user/edit-address" element={<UserUpdateAdressPage/>}></Route>
  <Route path="/user/page" element={<UserPage/>}></Route>
  </Routes>
  </BrowserRouter>
  <Footer/>      

    </div>
  );
}

export default App;
