import React , { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate=useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
   passWord: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response= await axios.post('http://localhost:4000/api/login',loginData);
      console.log(response.data,"rr");
            localStorage.setItem('userData', JSON.stringify(response.data))
            if(response.data){
      navigate('/')

    }
    }catch(error){
      console.log('Error logging in :',error);

    }
  };

  return (
<div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="passWord"
            placeholder="passWord"
            value={loginData.passWord}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login