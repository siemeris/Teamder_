import React from "react";

const SignUpPage = () => {
    return (
<<<<<<< HEAD
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
=======
      <>

      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Sign Up 
      </button>
      
      <div className="modal" id="exampleModal" tabindex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
      
            <form>

        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName1"/>
        </div>

        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputName1"/>
        </div>

        <div className="mb-3">
          <label for="exampleInputLastname1" className="form-label">Lastname</label>
          <input type="text" className="form-control" id="exampleInputLastname1"/>
        </div>

        <div className="mb-3">
          <label for="exampleInputAge1" className="form-label">Age</label>
          <input type="int" className="form-control" id="exampleInputAge1"/>
        </div>

        <div className="mb-3">
          <label for="exampleInpuGender1" className="form-label">Gender</label>
          <input type="text" className="form-control" id="exampleInpuGender1"/>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
      
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>

        
       
       </form>
            </div>
            <div className="modal-footer m-auto">
              <button type="submit" className="btn btn-info" data-bs-dismiss="modal">Sign Up!!</button>
            </div>
          </div>
        </div>
       </div>
      </>
>>>>>>> origin/singup
    )
};

export default SignUpPage;