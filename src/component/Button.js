import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };
  state = {
    errorStyle: ""
  }

  handleClick = (e) => {

    let result = eval(this.props.name.trim().replace("=","").trim());
    console.log(result + "," + e.target.value);
    if(result == e.target.value)
    {

      this.setState({errorStyle: "form-control is-valid"});
    }
    else {
      this.setState({errorStyle: "form-control is-invalid"});
    }
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()} >
        <span>{this.props.name}</span><input className={this.state.errorStyle} type="text" onChange={this.handleClick}/>
      </div>
    );
  }
}
