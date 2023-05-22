import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";


function Login() {
  // Component Level State
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Destructure variables from form data state.
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
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