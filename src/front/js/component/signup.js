import React from "react";

const SignUpPage = () => {
    return (
        <div className="container">
            <div className="signUp">

            <div className="mb-3">
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>

      <div className="mb-3">
        <label>Lastname</label>
        <input type="text" placeholder="Lastname" />
      </div>

      <div className="mb-3">
        <label>Gender</label>
        <input type="text" placeholder="Gender" />
      </div>

      <div className="mb-3">
        <label>Age</label>
        <input type="number" placeholder="Age" />
      </div>
           
       <div className="mb-3">
        <label>Username</label>
        <input type="text" placeholder="Enter username" />
       
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" placeholder="Enter email" />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>

      

      <button variant="primary" type="submit">
        Submit
      </button>

            </div>
        </div>
    )
};

export default SignUpPage;