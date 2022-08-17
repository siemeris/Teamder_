import React from "react";

const SignUpPage = () => {
    return (
        <div className="container">
            <div className="signUp">
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
      <div className="mb-3">
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>

            </div>
        </div>
    )
};

export default SignUpPage;