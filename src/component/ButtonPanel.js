import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

    state = {
        range: 10
    }


  handleClick = (e) => {

    console.log(e);

  };
    setRange = (v) => {

        this.setState({range: v});
    }

  randomPlus = ()=>{
      return Math.floor(Math.random() * this.state.range) + "+" + Math.floor(Math.random() * this.state.range) + "=";
  }
    createRow = (row) => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < row; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < 4; j++) {
                children.push(<Button name={this.randomPlus()} clickHandler={this.handleClick}/>)
            }
            //Create the parent and add the children
            table.push(<div className="row">{children}</div>)
        }
        return table
    }

  render() {
    return (
      <div className="row component-button-panel">
          {this.createRow(15)}
      </div>
    );
  }
}
