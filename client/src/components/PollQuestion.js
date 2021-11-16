import React, { Component } from "react"
import { FormBtn, Input } from "../components/Form"
import API from "../utils/api"
import "../App.css"

class PollQuestion extends Component {

  state = {
    author: "",
    gender: ""
  }

  setGender(event) {
    // console.log(event.target.value)
    this.setState({guess:event.target.value})
  }

  castVote = event => {
    event.preventDefault()
    if (this.state.author && this.state.gender) {
      API.vote({
        gender: this.state.gender,
        author: this.state.author
      })
      .then(res => console.log('vote cast for ' + this.state.author))
      .catch(err => console.log(err))
    }
  }

  postCastedVote = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  postCastedVote = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  onCastBallot = (event) => {
    this.castVote(event)
    this.props.voteCallback({ballotCast: true})
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div className="PollQuestion">
          <p color="blue"> I'm the poll QUESTION section</p>
          <form>
            <Input 
              value={this.state.author}
              onChange={this.postCastedVote}
              placeholder="what's your name?"
              name="author"
            />
            <FormBtn
              onClick={this.onCastBallot}
            >
              Cast Vote
            </FormBtn>
            <div onChange={this.postCastedVote.bind(this)}>
              <input type="radio" value="boy" name="gender"/> Boy
              <input type="radio" value="girl" name="gender"/> Girl
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PollQuestion
