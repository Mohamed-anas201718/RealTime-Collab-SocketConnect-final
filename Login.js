import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <section>

      <div className="login">
      <h1>Login Page</h1>
      </div>
      
    <div className='emailpass'>
      <form>
      <div className='email'>
        <h2>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" />
        </h2>
        </div>

        <div className='password'>
        <h2>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" />
        </h2>
        </div>

        <br></br>
        <div className='buttonlogin'>
        <button type="submit">Login</button>
        </div>
        
        
      </form>
      </div>
</section>
      
    
  );
};

export default Login;
