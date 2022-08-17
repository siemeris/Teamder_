import React from "react";

export const SignUpPage = () => {
    return (

      <>

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

      </>
    )
};

