import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            className="joinInput"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="joinInput"
            placeholder="Enter Room Name"
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room) && e.preventDefault()}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit" className="button mt-20">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
