import React from 'react';

export const LoginForm =() => {
  return (

<>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal" id="exampleModal" tabindex="-1">
  <div className="modal-dialog modal-sm">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
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
        <button type="submit" className="btn btn-info" data-bs-dismiss="modal">Login</button>
      </div>
    </div>
  </div>
 </div>
</>

  );
}

export default LoginForm;