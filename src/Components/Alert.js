import React from "react";

function Alert(props) {
  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {" "}
      {/* giving height => fixes the problem that before whenever alert was coming other content was shifting
    and shifting must be less in any website */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalized(props.alert.type)}</strong>:{props.alert.mssg}
        </div>
      )}
    </div>
  );
}

export default Alert;
