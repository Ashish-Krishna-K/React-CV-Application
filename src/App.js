import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="App">
        <div id="form-section">
          <form>
            <fieldset>
              <legend>General Information</legend>
              <label htmlFor="user-name">Name:</label>
              <input type="text" id="user-name"></input>
              <label htmlFor="user-email">Email:</label>
              <input type="email" id="user-email"></input>
              <label htmlFor="user-phone">Phone number:</label>
              <input type="email" id="user-phone"></input>
            </fieldset>
            <fieldset>
              <legend>Professional Experience</legend>
            </fieldset>
            <fieldset>
              <legend>Education</legend>
            </fieldset>
          </form>
        </div>
        <div id="display-section">
          display
        </div>
      </div>
    )
  }
}