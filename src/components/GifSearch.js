// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    input: ''
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.input.length >= 1) {
      //console.log(this.state.input)
      this.props.handleSubmit(this.state.input)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search
            <input id='search' name='search' type='text' onChange={event => this.handleInputChange(event)} value={this.state.input} />
            <button type='submit'>Search</button>
          </label>
        </form>
      </div>
    )
  }

}

export default GifSearch;
