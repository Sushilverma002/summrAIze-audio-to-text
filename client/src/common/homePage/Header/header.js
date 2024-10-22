import React from "react";
import { useHistory } from "react-router";

import ai from "../../../utils/assets/ai.png";

import "./header.css";

const Header = () => {
  const history = useHistory();

  const handleButtonClick = (e) => {
    history.push(`/${e}`);
  };

  return (
    <div className="h19Header sectionPadding" id="home">
      <div className="h19HeaderContent">
        <h1 className="gradientText">
          Let&apos;s summarise Meetings with SummrAIze
        </h1>
        <p>
          Effortlessly capture and summarize every conversation with automated
          meeting minutes, allowing you to stay focused on the discussion.
          Whether it's board meetings, team management, or customer support,
          SummrAIze helps you save time and ensures that you never miss the key
          points. Let us handle the details so you can concentrate on what
          matters most.
        </p>

        <div className="h19HeaderContentInput">
          <button
            type="button"
            onClick={() => handleButtonClick("MeetingSummariser")}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="h19HeaderImage">
        <img src={ai} alt="aiImage" />
      </div>
    </div>
  );
};

export default Header;
