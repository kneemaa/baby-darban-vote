import React, { Component } from "react"
import "./Announce.css"

class Announce extends Component {
  constructor(){
    super()

    this.state = {
      reveal: false
    }
  }

  showHide(){
    this.setState({reveal: !this.state.reveal})
  }

  render() {
    let prompt_class = this.state.reveal ? "show-reveal" : "hide-reveal"
    let reveal_class = this.state.reveal ? "hide-reveal" : "show-reveal"

    return (
      <div className="container size-color">
        <div className="row announce-row">
          <div className="col-sm-12 center-body">
            {/* <button type="button" className={"center-button " + reveal_class} onClick={this.showHide.bind(this)} disabled={this.state.reveal}>
              <span id="big-font">We are having a...</span>
              <p/>
              <span id="small-font">(click to reveal) --> <img src="./favicon.ico"></img></span>
            </button> */}
            <div className={"answer " + prompt_class}>{this.props.reveal}!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Announce
