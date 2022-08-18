import React, { useState, useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginForm =() => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{if (store.auth===true){navigate("/")} },[store.auth])
  return (

<>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
  </div>
  <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-info" onClick={() => {
          actions.login({
            email: email,
            password: password,
          })
        }}>Submit</button>
            </div>
 
 </form>
   
</>
  );
};

export default LoginForm;