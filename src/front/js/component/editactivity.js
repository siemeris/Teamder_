import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";

export const EditActivity = () => {
  const { store, actions } = useContext(Context);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [participants, setParticipants] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  return (
    <form
      className="mx-5 mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
      }}
    >
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Category
        </label>
        <div className="form-group">
          <label className="sr-only">Questions</label>
          <select
            id="reg_userquestion"
            className="form-control"
            name="user_question"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option> Select Category </option>
            <option>Soccer</option>
            <option>Yoga</option>
            <option>Cycling</option>
            <option>Running</option>
            <option>Basketball</option>
            <option>Volleyball</option>
            <option>Others</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          type="text"
          aria-label="default input example"
          onChange={(e) => setTitle(e.target.value)}
          // placeholder={store.currentActivity.Current_title}
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputParticipants" className="form-label">
          Participants
        </label>
        <input
          class="form-control"
          type="text"
          placeholder="Number"
          aria-label="default input example"
          onChange={(e) => setParticipants(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputDate" className="form-label">
          Date
        </label>
        <input
          class="form-control"
          type="text"
          placeholder="00/00/1900"
          aria-label="default input example"
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputCity" className="form-label">
          City
        </label>
        <input
          class="form-control"
          type="text"
          placeholder=""
          aria-label="default input example"
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputLocation" className="form-label">
          Location
        </label>
        <input
          class="form-control"
          type="text"
          placeholder=""
          aria-label="default input example"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTime" className="form-label">
          Time
        </label>
        <input
          class="form-control"
          type="text"
          placeholder=""
          aria-label="default input example"
          onChange={(e) => setTime(e.target.value)}
        ></input>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-info"
          data-bs-dismiss="modal"
          onClick={() => {
            actions.editActivity({
              category: category,
              title: title,
              description: description,
              participants: participants,
              date: date,
              city: city,
              location: location,
              time: time,
              index: store.index,
            });
          }}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};
