import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "yellow", "orange", "blue"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props}></WrappedComponent>
      </div>
    );
  };
};

export default Rainbow;
