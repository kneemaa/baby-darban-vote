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
      <div>
        <button type="button" className={reveal_class} onClick={this.showHide.bind(this)} disabled={this.state.reveal}>
          <span>It's A...</span><p/>
          <span>(click to reveal)</span>
        </button>
        <div className={"answer " + prompt_class}>{this.props.reveal}!</div>
      </div>
    )
  }
}

export default Announce
