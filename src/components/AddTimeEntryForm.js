import React, { useState } from "react";
import firebase from "../config/database";

function AddTimeEntryForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("times")
      .add({
        title,
        time_seconds: parseInt(time)
      })
      .then(() => {
        setTitle("");
        setTime("");
      });
  };

  return (
    <div className="col-sm">
      <form onSubmit={onSubmit}>
        <h4>Add New Entry</h4>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            className="form-control"
            type="number"
            value={time}
            onChange={e => setTime(e.currentTarget.value)}
          />
        </div>
        <button className="btn btn-primary mb-2">Add Time Entry</button>
      </form>
    </div>
  );
}

export default AddTimeEntryForm;
