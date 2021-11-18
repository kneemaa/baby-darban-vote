import React, { Component } from "react"
import { FormBtn, Input } from "../components/Form"
import API from "../utils/api"
import "../App.css"
import "../bootstrap.css"

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
      <div className="container alert form-wrap">
        {/* <div class="card border-secondary mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Secondary card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

        <div className="PollQuestion">
          <div class="card-header">
          <h2>What gender do you think Baby Darban will be?</h2></div>
            <form>
            <p class="card-text">
              <label class="col-form-label mt-4" for="inputDefault">
              <Input 
                value={this.state.author}
                onChange={this.postCastedVote}
                placeholder="what's your name?"
                name="author"
              />
              </label>
            </p>
              <div onChange={this.postCastedVote.bind(this)}>          
                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" value="boy" name="gender"/> Boy
                <p></p>
                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" value="girl" name="gender"/> Girl
              </div>
              <p className="card-text">
                <FormBtn onClick={this.onCastBallot}>
                Cast Vote
                </FormBtn>
              </p>
            </form>
          </div>

      </div>
    )
  }
}

export default PollQuestion
