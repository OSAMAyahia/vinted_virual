import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartAction } from './../../Redux/Actions/CartAction';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';

const NavBarLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const Logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
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
      <nav className="navbar navbar-expand-lg border navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
          <div style={{ 
            backgroundColor: '#8B4513', 
            padding: '8px 15px', 
            borderRadius: '12px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(139, 69, 19, 0.3)'
          }}>
            متجرنا
          </div>
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
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              
              {/* Cart Item */}
              <li className="nav-item d-flex align-items-center position-relative">
                <Link to="/cart" className="nav-link d-flex align-items-center"> 
                  <ShoppingCart color="#8B4513" size={24} />
                  <span
                    className="position-absolute badge rounded-pill"
                    style={{ top: '-10px', right: '-10px', fontSize: '10px', backgroundColor: '#8B4513' }}
                  >
                    {cartCount}
                  </span>
                </Link>
              </li>

              {/* Sell Now Button */}
              <li className="nav-item d-flex align-items-center">
                <Link 
                  to="/admin/products" 
                  className="btn d-flex align-items-center" 
                  style={{ backgroundColor: '#8B4513', color: 'white', fontWeight: '500', border: 'none', borderRadius: '8px' }}
                >
                  <i className="fas fa-store me-1"></i> 
                  بيع الآن
                </Link>
              </li>

              {user ? (
                <li className="nav-item dropdown">
                  <Link
                    style={{ fontSize: '1.1rem', fontWeight: "500", background: "#8B4513", padding: "5px 10px", borderRadius: "8px", border: 'none' }}
                    className="nav-link dropdown-toggle text-white"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <span className="text-white">{user.name}</span>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/admin/products">Sell now</Link></li>
                    <li><Link className="dropdown-item" to="/user/orders">Your Profile</Link></li>
                    <li><Link onClick={Logout} className="dropdown-item" to="/">Logout</Link></li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item d-flex align-items-center">
                  <Link 
                    to="/login" 
                    className="btn d-flex align-items-center" 
                    style={{ backgroundColor: '#8B4513', color: 'white', fontWeight: '500', border: 'none', borderRadius: '8px' }}
                  >
                    <img
                      src='https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/login.png'
                      style={{ width: "24px", height: "24px", marginRight: "8px" }}
                      alt="login"
                    />
                    تسجيل الدخول
                  </Link>
                </li>
              )}
            </ul>
            
            <form className="d-flex mx-auto" role="search" onSubmit={handleSearch} style={{ maxWidth: '400px', width: '100%' }}>
              <div className="input-group">
                <input 
                  className="form-control" 
                  type="search" 
                  placeholder="Search products..." 
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="submit">
                  <Search size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarLogin;