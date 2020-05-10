import React, { useState } from "react";
import "../styles/emoticons.scss";

const Emoticons = props => {
  const [emoji, copyEmoji] = useState("");
  const emoticons = props.data.emoticons;
  console.log(emoticons);
  const copyEmoticon = e => {
    copyEmoji(e.target.value);
  };

  const changeColor = () => {
    // alert("hi");
  };

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="emoticons-layout-comtainer">
      <div className="emoji-edit">
        <span className="title">Edit Emoticon</span>
        <input type="text" onChange={copyEmoticon} className="input" />
        <button className="copy-btn">Copy</button>
      </div>
      <h2 className="copy-description">
        Japanese Emoticons, You can click to copy
      </h2>
      <ul className="emoji-list">
        {emoticons.map((item, index) => {
          return (
            <li
              key={item}
              onMouseOver={changeColor}
              style={{
                backgroundColor: randomColor(),
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Emoticons;

//copy feature
