import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import createuser from './../../Redux/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
    const usenavigate= useNavigate()
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation_password, setConfirmationPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const res = useSelector(state => state.security);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmationPassword = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const toasty = (message, status) => {
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const validation = () => {
    if (!name) {
      toasty("Name is required", "error");
      return false;
    }
    if (!email) {
      toasty("Email is required", "error");
      return false;
    }
    if (!password) {
      toasty("Password is required", "error");
      return false;
    }
    if (!confirmation_password) {
      toasty("Confirmation password is required", "error");
      return false;
    }
    if (password !== confirmation_password) {
      toasty("The password and confirmation password do not match", "error");
      return false;
    }
    return true;
  };

  const onClicks = async (e) => {
    e.preventDefault();
    if (validation()) {
      setLoading(true);
      if (name && email && password &&confirmation_password){
        console.log( "the name",name ,"the mail", email , password , confirmation_password)
      await  dispatch(createuser({
        "name": name,
        "email": email,
        "password": password,
        "confirmation_password": confirmation_password
      }));
      
      setLoading(false);
     }}
  };

  // استخدم useEffect هنا لمراقبة التغيرات في متغير loading
  useEffect(() => {
    if (loading==false ) {
        {if(res)
            console.log("the res is" ,res);
            // res?.data?.token?
            // localStorage.setItem("token", res.data.token) :console.log("the token not found") 
            // toasty("Registration successful!", "success");
              if( res.data ){
                if( res.data.token){
            localStorage.setItem("token", res.data.token)  
            toasty("Registration successful!", "success");
            setTimeout(()=>{

                usenavigate('/login')
            },6000)
              }}
        }
    }
  }, [loading, res]);

  return [
    name,
    email,
    password,
    confirmation_password,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmationPassword,
    onClicks
  ];
};

export default RegisterHook;
