import React from "react";
import './Ninjas.css'

// class Ninjas extends Component {
const Ninjas = ({ ninjas, deleteNinja }) => {
  //   console.log(this.props);
  //   const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 10) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>belt: {ninja.belt}</div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete
          </button>
          <br></br>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
