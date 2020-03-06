import React, { useState, useEffect } from "react";
import firebase from "../config/database";
import SingleTime from "./SingleTime";
import AddTimeEntryForm from "./AddTimeEntryForm";

const SORT_OPTIONS = {
  TIME_ASC: { column: "time_seconds", direction: "asc" },
  TIME_DESC: { column: "time_seconds", direction: "desc" },

  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" }
};

const useTimes = (sortBy = "TIME_ASC") => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTimes(newTimes);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return times;
};

function TimeList() {
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const times = useTimes(sortBy);
  return (
    <>
      <h2>Database Items</h2>
      <div className="row">
        <div className="col-sm">
          <label>Sort By:</label>
          <select
            className="form-control"
            value={sortBy}
            onChange={e => setSortBy(e.currentTarget.value)}
          >
            <option value="TIME_ASC">Time (faster first)</option>
            <option value="TIME_DESC">Time (slowest first)</option>
            <option disabled>----</option>
            <option value="TITLE_ASC">Title (a-z)</option>
            <option value="TITLE_DESC">Title (z-a)</option>
          </select>
          <br></br>
          <ol className="list-group">
            {times.map(time => (
              <SingleTime
                key={time.id}
                title={time.title}
                time_seconds={time.time_seconds}
              />
            ))}
          </ol>
        </div>

        <AddTimeEntryForm />
      </div>
    </>
  );
}

export default TimeList;
