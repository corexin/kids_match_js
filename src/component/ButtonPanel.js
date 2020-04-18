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
  render() {
    return (
      <div className="row component-button-panel">
        <div >
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
        </div>
        <div>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
        </div>
        <div>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
        </div>
        <div>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
        </div>
        <div>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
            <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
        </div>
          <div>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
          </div>
          <div>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
              <Button name={this.randomPlus()} clickHandler={this.handleClick}/>
          </div>
      </div>
    );
  }
}
