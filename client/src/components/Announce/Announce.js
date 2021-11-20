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
      <div className="container">
        <div className="row">
          <div className="col-sm-4 side-col"></div>
          <div className="col-sm-4 main-body">
            <button type="button" className={reveal_class} onClick={this.showHide.bind(this)} disabled={this.state.reveal}>
              <span>We are having a...</span><p/>
              <span>(click to reveal)</span>
            </button>
          </div>
          <div className="col-sm-4 side-col"></div>
        </div>
          <div className={"answer " + prompt_class}>{this.props.reveal}!
          </div>
      </div>
    )
  }
}

export default Announce
