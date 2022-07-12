import React, { useState } from "react";
import {
  FaClipboardCheck,
  FaLevelUpAlt,
  FaLevelDownAlt,
  FaTimes,
} from "react-icons/fa"; // import icons

export default function Textbox(props) {
  const [text, setText] = useState("");
  const upperText = () => {
    let uppertextdata = text.toUpperCase();
    setText(uppertextdata);
  };
  const lowerText = () => {
    let lowertextdata = text.toLowerCase();
    setText(lowertextdata);
  };
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const clearText = () => {
    let cleartextdata = "";
    setText(cleartextdata);
  };
  const typingBox = (event) => {
    setText(event.target.value);
  };
  const { screenMode } = props;

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <button
            onClick={clearText}
            className="btn btn-primary my-3"
            type="submit"
          >
            <FaTimes /> Clear
          </button>
          <textarea
            className={`form-control text-${
              screenMode === "light" ? "dark" : "light"
            } bg-${screenMode}`}
            value={text}
            onChange={typingBox}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          onClick={upperText}
          className="btn btn-warning mx-2"
          type="submit"
        >
          <FaLevelUpAlt /> Convert to UpperCase
        </button>
        <button
          onClick={lowerText}
          className="btn btn-warning mx-2"
          type="submit"
        >
          <FaLevelDownAlt /> Convert to LowerCase
        </button>
        <button
          onClick={copyText}
          className="btn btn-warning mx-2"
          type="submit"
        >
          <FaClipboardCheck /> Copy to Clipboard
        </button>
        <h3 className={`text-${screenMode === "light" ? "dark" : "light"}`}>
          {text.replace(" ", "").split(" ").length} Words, and{" "}
          {text.trim().replace(" ", "").length} Characters
        </h3>
        <h3 className={`text-${screenMode === "light" ? "dark" : "light"}`}>
          {" "}
          Reading time of this paragraph is{" "}
          {0.005 * text.replace(" ", "").split(" ").length} Minutes
        </h3>
      </div>
    </>
  );
}
