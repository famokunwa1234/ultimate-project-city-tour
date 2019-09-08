import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from "./Component/Navbar/Navbar";
import Tourlist from "./Component/Tourlist";


class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Navbar />
      <Tourlist  />
    </React.Fragment>
  );
}
}

export default App;
