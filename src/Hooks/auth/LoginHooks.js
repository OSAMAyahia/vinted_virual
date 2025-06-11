import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from './../../Redux/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';

const LoginHook = () => {
  const usenavigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const res = useSelector(state => state.security);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const toasty = (message, status) => {
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const validation = () => {
    if (!email) {
      toasty("Email is required", "error");
      return false;
    }
    if (!password) {
      toasty("Password is required", "error");
      return false;
    }
    return true;
  };

  const onClicks = async (e) => {
    e.preventDefault();
    if (validation()) {
      setLoading(true);
      try {
        await dispatch(loginuser({
          email: email,
          password: password
        }));
      } catch (error) {
        console.error("Login error:", error);
        toasty("An error occurred while logging in.", "error");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (res && res.data) {
      if (res.data.jwt) {
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", JSON.stringify( res.data.user));
        toasty("Login successful!", "success");
        setTimeout(()=>{
            // usenavigate('/')
            window.location.href='/'
        },4000)
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toasty("Login failed! Please check your credentials.", "error");
      }
    }
  }, [res]);

  return [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onClicks
  ];
};

export default LoginHook;
