import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {

 constructor(props) {
   super(props);
   this.panelRef = React.createRef();
 }
  state = {
    total: null,
    next: null,
    operation: null,
    range:10,
  };

  handleClick = (value) => {
    this.setState({range: value});

    this.panelRef.current.setRange(value);
  };

  render() {
    return (
      <div className="container">
        <Display clickHandler={this.handleClick} />
        <ButtonPanel clickHandler={this.handleClick} ref={this.panelRef} />
      </div>
    );
  }
}
