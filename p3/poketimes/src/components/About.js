import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut
        vitae harum, fugiat voluptatibus voluptates error ut tempore quo odio
        cumque aliquid quibusdam recusandae voluptatem sequi, pariatur quae
        cupiditate ducimus?
      </p>
    </div>
  );
};

export default Rainbow(About);
