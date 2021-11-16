import React, { Component } from "react"

class RadioBtn extends Component {

  setGender(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div onChange={this.setGender.bind(this)}>
        <input type="radio" value="boy" name="gender"/> Boy
        <input type="radio" value="girl" name="gender"/> Girl
      </div>
    )
  }
}

export default RadioBtn
