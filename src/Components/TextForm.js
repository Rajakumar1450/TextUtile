import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // text is variable name
  // and setText is the function name hooks are like without making class
  // we use function of class. we can update text using setText
  const toTitleCase = (str) => {
    // search for title case
    const small = new Set([
      "a",
      "an",
      "the",
      "and",
      "but",
      "or",
      "for",
      "nor",
      "on",
      "at",
      "to",
      "from",
      "by",
      "in",
      "of",
      "with",
    ]);
    const words = str.toLowerCase().split(/\s+/);
    return words
      .map((w, i, arr) => {
        if (i !== 0 && i !== arr.length - 1 && small.has(w)) return w;
        return w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(" ");
  };
  const handletitleclick = () => {
    let newtext = toTitleCase(text);
    setText(newtext);
    props.showAlert("Text is Tittle Cased!", "success");
  };
  const handleLoclick = () => {
    let lowtext = text.toLowerCase();
    setText(lowtext);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleclearclick = () => {
    let cleartext = "";
    setText(cleartext);
    props.showAlert("Text cleared!", "success");
  };
  const handleUPclick = () => {
    //console.log("Uppercase was clicked!" + text); // no need
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleOnChange = (event) => {
    //console.log("Onchange!");
    setText(event.target.value); // we had to listen this in onchange event beacause after that only we can change
    // text in the form from the default value so we changed the text in to new text
  };
  const handleCopyclick = async () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // props.showAlert("Copied to clipboard!", "success");
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard!", "success");
    } catch (err) {
      props.showAlert("Copy failed — allow clipboard access", "danger");
    }
  };
  const hadlespaceclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#a0caedff" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-success"
          onClick={handleUPclick}
          //style={{ backgroundColor: "#008000", color: "white" }}
        >
          convert to uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoclick}>
          convert to lowercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleclearclick}>
          clear Text
        </button>
        <button className="btn btn-success mx-1" onClick={handletitleclick}>
          Title case
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopyclick}>
          copyText
        </button>
        <button className="btn btn-success" onClick={hadlespaceclick}>
          remove extra space
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>your Text Summary </h2>
        <p>
          {/* {text.split(" ").length} this counts one space already one 
     before entering anything */}
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length
          }
          Words and {text.length} characters
        </p>
        <p>
          readable in{" "}
          {0.008 *
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Write Something to Preview it Here."}</p>
      </div>
    </>
  );
}
