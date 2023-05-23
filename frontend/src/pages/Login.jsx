import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from "../features/auth/authSlice";
import Spinner from '../components/Spinner';

function Login() {
  // Component Level State
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Destructure variables from form data state.
  const { email, password } = formData;


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { 
    user, 
    isLoading, 
    isError, 
    isSuccess, 
    message 
  } = useSelector((state) => state.auth);


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch])



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }

    dispatch(login(userData));

  }


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and Start Managing Goals</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

          {/* User Email Input */}
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          {/* User Password Input */}
          <div className="form-group">
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>

        </form>
      </section>
    </>
  )
}

export default Login