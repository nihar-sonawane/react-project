// import React from "react";
// import Ninjas from "./Ninjas";

// function App() {
//   state = {
//     ninjas: [
//       {
//         name: "nihar1",
//         age: 31,
//         belt: "black",
//         id: 1,
//       },
//       {
//         name: "nihar2",
//         age: 234234,
//         belt: "safdasd",
//         id: 2,
//       },
//     ],
//   };
//   return (
//     <div className="App">
//       <h1>Tis working!</h1>
//       <Ninjas ninjas={this.state.ninjas}></Ninjas>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
    console.log("ninja", ninjas);
  };

  deleteNinja = (id) => {
    // console.log("dleete",ninjaID);
    let ninjas = this.state.ninjas.filter((ninjas) => {
      return ninjas.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );
  }
}

export default App;
