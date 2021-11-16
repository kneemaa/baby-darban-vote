import React, { Component } from "react"
import { FormBtn, Input } from "../components/Form"
import API from "../utils/api"
import "../App.css"

class PollQuestion extends Component {
  state = {
    author: "",
    gender: ""
  }

  // cast vote by sending the Post call to the server
  castVote = event => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault 
    event.preventDefault()

    // if the author and gender have both been selected in the form can we cast the ballot
    if (this.state.author && this.state.gender) {
      API.vote({
        gender: this.state.gender,
        author: this.state.author
      })
      // good practice to have a then statement if having a .catch
      .then(res => console.log('vote cast for ' + this.state.author))
      // if there's an error, 'catch' it and console.log it
      .catch(err => console.log(err))
    }
  }

  // used to update the state of what the form is filled out as
  postCastedVote = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  // what to do when the formbtn is clicked
  onCastBallot = (event) => {
    // cast the vote function is called
    this.castVote(event)
    // ballotCast state is updated
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
