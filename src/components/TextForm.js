import React, { useState } from "react";

export default function TextForm(props) {
  function converText(e) {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("onclick" + text);
  }
  function onChange(e) {
    console.log("onchange");
    setText(e.target.value);
  }
  function capitalize() {
    let camelCaseText = text
      .split(" ")
      .map(function (word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(camelCaseText);
  }

   function lowercase() {
    let newText = text.toLowerCase()
    setText(newText)
   }

  function clearWord() {
    let newText = "";
    setText(newText);
  }
  function removeExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  function copyText() {
    let inputBox = document.querySelector(".inputBox");
    inputBox.select();
    document.execCommand("copy");
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.messageHeading}
        </label>
        <textarea
          className={`form-control
          inputBox bg-${props.mode} text-${props.mode === "dark"? "white" : "dark"}`}
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={onChange}
        ></textarea>
      </div>

      <div className="container d-flex flex-wrap gap-2">
        <button type="submit" className="btn btn-success" onClick={converText}>
          {props.upperBtn}
        </button>

        <button type="submit" className="btn btn-primary " onClick={capitalize}>
          {props.capitalize}
        </button>

        <button type="submit" className="btn btn-danger " onClick={lowercase}>
          Lowercase
        </button>


        <button type="submit" className="btn" onClick={clearWord} style={{background:"red",color:"white"}}>
          {props.clear}
        </button>

        <button type="submit" className="btn btn-warning" onClick={copyText}>
          Copy Text
        </button>

        <button
          type="submit"
          className="btn btn-info "
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-5">
        <h3>Word Summery</h3>
        <p>
          <span className="text-danger font-weight-bolder fs-4">
            { text === ""? 0 : text.split(" ").length} 
          </span>{' '}
           Words and <span className="text-warning fs-4">{ text.length }</span> Characters it Will take
          <span className="text-info fs-4"> {text === ""? 0 : Math.ceil(text.split(" ").length * 0.2)}</span> Seconds to Read This
        </p>
      </div>
      <div className="container">
        <h3>Preview</h3>
        
        <p>{text === ""? "Write Something to Preview" : text}</p>
      </div>
    </>
  );
}
