import React from "react";
import { Link } from "gatsby";
import "../styles/emoticons.scss";

const Tags = props => {
  return (
    <ul className="tag-container">
      {props.tags.map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              "/" + item === props.path ? "active tag-item" : "tag-item"
            }`}
          >
            <Link to={item}>{item}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
