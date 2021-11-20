import React, { Component } from "react"
import { FormBtn, Input } from "../../components/Form"
import API from "../../utils/api"
import "./PollQuestion.css"
import "../../bootstrap.css"

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
      .then(res => console.log(this.props.voteCallback({ballotCasted: true})))
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
    event.preventDefault()
  }

  render() {
    return (
        <div className="grid-card">
          <div className="container alert form-wrap">
            <div className="poll-question">
              <h2>What gender do you think Baby Darban will be?</h2>
              <form>
              <label className="col-form-label mt-2">
              <Input 
                  value={this.state.author}
                  onChange={this.postCastedVote}
                  placeholder="what's your name?"
                  name="author"
                />
              </label>
              <div onChange={this.postCastedVote.bind(this)}>          
                <input type="radio" className="form-check-input" id="optionsRadios1" value="boy" name="gender" /> Boy
                <p/>
                <input type="radio" className="form-check-input" id="optionsRadios2" value="girl" name="gender"/> Girl
              </div>
              <FormBtn onClick={this.onCastBallot}>Cast Vote</FormBtn>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export default PollQuestion
