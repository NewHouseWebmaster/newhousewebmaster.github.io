import React, { Component } from "react";
import { Link } from "@reach/router";
import "./GuestList.css";

import floral from "../data/floral-divider.png";

import { get } from "../../utilities";
import { post } from "../../utilities.js";

class GuestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      guestList: []
    }
  }

  componentDidMount() {

  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value,
      guestList: [],
    });

    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
    }
  };

  addNewGuest(guest) {
    this.setState({
      guestList: this.state.guestList.concat([guest]),
      inputText: ""
    });
  }

  submitGuest = (event) => {
    event.preventDefault();
    this.addNewGuest(this.state.inputText);
    if (this.state.inputText.length !== 0) {
      const body = {guestname: this.state.inputText};
      post("/api/addGuest", body).then((guest) => {
        this.addNewGuest(guest);
      });
    }

  };

  render() {
    return (
        <>
        <div className="guestlist-container">
            GuestList.

            <div className="guestList-list">
              {this.state.guestList}
            </div>
            <div className="guestList-input">
              <input
                  type="text"
                  className="text"
                  placeholder={"Add a new guest"}
                  value={this.state.inputText}
                  onChange={this.handleInputChange}
                />

              <input
                  type="submit"
                  className="button"
                  value="+"
                  onClick={this.submitGuest}
                />
              </div>
        </div>
      </>
    );
  }
}

export default GuestList;