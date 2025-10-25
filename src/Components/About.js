import React from "react";
export default function About(props) {
  return (
    <>
      <div className="container" style={props.myStyle}>
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample" style={props.myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={props.myStyle}
              >
                TextUtile — your smart, no-fuss text companion.
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                <strong>
                  TextUtile makes everyday text work faster and cleaner.
                </strong>{" "}
                Whether you’re drafting emails, polishing social posts,
                preparing assignments, or cleaning up copied text, TextUtile
                gives you simple, focused tools — uppercase, lowercase, title
                case, remove extra spaces, copy, clear, and instant
                word/character counts with read-time estimate and{" "}
                <code>live preview.</code>
                Everything you need to shape text, in one tidy place.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={props.myStyle}
              >
                Why you’ll love it:
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                <strong>Fast and intuitive:</strong> one click transformations
                so you don’t waste time on repetitive edits. Helpful insights:
                live word/character counts and estimated reading time to plan
                messages and posts. Clean output: remove unwanted spaces and
                formatting glitches in seconds. Privacy-first: all operations
                happen in your browser — your text stays on your device and
                isn’t stored on any server. Accessible: designed to be clear and
                easy to use, whether you’re a student, writer, developer, or
                social creator
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={props.myStyle}
              >
                Our goal is simple
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                remove the small friction in everyday writing so you can focus
                on what matters — the content. We keep the interface minimal,
                the functions powerful, and the experience fast. Got feedback or
                a feature idea? We’re building TextUtile to be even more useful
                — tell us what would help you most and we’ll try to add it. Try
                a transformation now and see how much time you save.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container my-3">
          <button
            type="button"
            className="btn btn-success my-3"
            onClick={handlemodeclick}
          >
            {mode}
          </button>
        </div> */}
      </div>
    </>
  );
}
