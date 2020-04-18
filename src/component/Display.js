import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Display extends React.Component {


  state = {
    complex: null,
    value: null,
    clickHandler: PropTypes.func,
  }
  handleClick = (e) => {
    this.props.clickHandler(e.target.value);
  };


  render() {
        return (

        <div className="row h6 small" >
          <select defaultValue="0" className="dropdown-primary mdb-select colorful-select dropdown-dark p-1" onChange={this.handleClick}>
            <option value='0'>Select number range</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

    );
  }
}
