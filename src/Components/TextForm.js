import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  };

  const handleCClick = () => {
    setText("");
    props.showAlert("Text Erased","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text Copied","success")
  }
  const handleRES = () => {
    const newText = text.replace(/\s+/g, ' '); // Replace multiple spaces with a single space
    setText(newText);
    props.showAlert("White extra Space removed","success")
  };
  return (
    <>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <div className="container ">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              Enter Text Below
            </label>
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="5"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLOClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleRES}>
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-2">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length-1} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Enter text to Preview'}</p>
        </div>
      </div>
    </>
  );
}
