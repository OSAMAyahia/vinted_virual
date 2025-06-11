import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartAction } from './../../Redux/Actions/CartAction';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const NavBarLogin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const Logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  const data = useSelector(state => state.Cart);
  const items = data?.data?.data?.cartItems || [];
  const cartCount = items.length;

  useEffect(() => {
    dispatch(GetCartAction());
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [dispatch]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg border" >
        <div className="container">
          <Link to="/">
            <img
              className='navbar-brand'
              src="https://clipground.com/images/ecommerce-logo-png-19.png"
              style={{ width: "120px", height: "60px" }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarScroll">
            <ul className="navbar-nav me-auto gap-4  my-2 my-lg-0 navbar-nav-scroll">
              
              {/* Cart Item */}
              <li className="nav-item d-flex align-items-center position-relative me-3">
                <div className="d-flex align-items-center position-relative" >
                   <Link to="/cart"> 
                  <ShoppingCart color="#008080" size={24} />
                  <span
                    className="position-absolute badge rounded-pill bg-danger"
                    style={{ top: '-10px', right: '-10px', fontSize: '10px' }}
                  >
                    {cartCount}
                  </span>
                  </Link>
                  {/* <Link className="nav-link active ms-1" aria-current="page" to="/cart" style={{ color: "#212529", fontWeight: "500" }}>Cart</Link> */}
                </div>
              </li>

              {user ? (
                <li className="nav-item dropdown">
                  <Link
                    style={{ fontSize: '1.1rem', fontWeight: "500", background: "#008080", padding: "5px 10px", borderRadius: "5px" }}
                    className="nav-link text-white dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <span className="text-white"> {user.name}</span>

                  </Link>
                  <ul className="dropdown-menu text-white " aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/admin/products">Sell now</Link></li>
                    <li><Link className="dropdown-item" to="/user/orders">Your Profile</Link></li>
                    <li><Link onClick={Logout} className="dropdown-item" to="/">Logout</Link></li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item d-flex align-items-center">
                  <div className="d-flex align-items-center" style={{ background: "#008080", padding: "5px 10px", borderRadius: "5px" }}>
                    <img
                      src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/login.png'
                      style={{ width: "24px", height: "24px" }}
                      alt="login"
                    />
                    <Link className="nav-link active ms-1" aria-current="page" to="/login" style={{ color: "#212529", fontWeight: "500" }}>Login</Link>
                  </div>
                </li>
              )}

                 {/* Sell Now Button - Always visible */}
          
            </ul>
                <li className="nav-item d-flex align-items-center mx-3">
                <Link 
                  to="/admin/products" 
                  className="btn   d-flex align-items-center" 
                  style={{ fontWeight: "#ffffff"  ,backgroundColor:'#008080 '}}
                >
                  <i className="fas fa-store me-1 text-white"></i> 
<span className="text-white">Sell Now</span>
                </Link>
              </li>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarLogin;