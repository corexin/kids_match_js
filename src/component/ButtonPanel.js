import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  randomPlus = ()=>{
      return Math.floor(Math.random() * 10) + "+" + Math.floor(Math.random() * 10) + "=";
  }
  render() {
    return (
      <div className="component-button-panel">
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
