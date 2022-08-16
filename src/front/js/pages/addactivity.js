import React, { useContext } from "react";
import { Context } from "../store/appContext";
import teamderImg from "/workspace/Teamder/src/front/img/teamderImg.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const AddActivity = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="mx-5 mt-4">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Category
        </label>
        {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input> */}
        <div className="form-group">
                <label className="sr-only">Questions</label>
                <select id="reg_userquestion" className="form-control" name="user_question">
                  <option selected> Select Category </option>       
                  <option>Soccer</option>
                </select>
              </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Title
        </label>
        <input className="form-control" type="text" placeholder="" aria-label="default input example"></input>
      </div>
      <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Participants
        </label>
        <input class="form-control" type="text" placeholder="Number" aria-label="default input example"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Date
        </label>
        <input class="form-control" type="text" placeholder="00/00/1900" aria-label="default input example"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Place
        </label>
        <input class="form-control" type="text" placeholder="" aria-label="default input example"></input>
      </div>
      {/* <button type="submit" className="btn btn-info rounded-2">
        Add Activity
      </button> */}
    </form>
  );
};