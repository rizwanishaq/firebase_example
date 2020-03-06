import React from "react";

function SingleTime({ title, time_seconds }) {
  return (
    <>
      <li className="list-group-item">
        <span>
          <p className="text-left">
            {title}
            <p className="text-right"> {time_seconds} seconds</p>
          </p>
        </span>
      </li>
    </>
  );
}

export default SingleTime;
