import React from 'react';
import "/workspace/react-flask-hello/src/front/styles/login.css"

export const LoginForm =() => {
  return (
  <>
    <div className='container ml-auto col-3 border border-4 rounded-3 p-4'>
      <div className='container-fluid ml-auto'>
        <div className="mb-3">
            <label className="usernametext">Username</label>
            <input className='rounded-2' type="text" placeholder="Enter username" />
        </div>
        <div className="">
            <label className='passtext'>Password</label>
            <input className='rounded-2' type="password" placeholder="Password" />
        </div>
            <button className="btn-info mt-3 rounded-2" variant="primary" type="submit">
             Login
            </button>
        </div>
    </div>
  </>
  );
}

export default LoginForm;