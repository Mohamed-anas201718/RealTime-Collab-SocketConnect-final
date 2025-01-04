import React from "react";
import './Registration.css'

const Registration = () => {
  return (
    <section>
      <div className="ABC">
        <h1>Registration Page</h1>
      </div>  
      <div className="ABCD">
      <form>

        <div className="a1">
          <h2>
          <label htmlFor="name">Name:</label>
          <span>  </span>
          <input type="text" id="name" name="name" />
          </h2>
        </div>

        <div className="a2">
          <h2>
          <br></br>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          </h2>
        </div>

        <div className="a3">
          <h2>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          </h2>
        </div>

        <br></br>
        <div className="button1"><button  type="submit">Register</button></div>
        
      </form>
      </div>
  
      
      
    </section>
  );
};

export default Registration;
