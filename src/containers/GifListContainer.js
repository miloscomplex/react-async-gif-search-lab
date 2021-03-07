// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  limit = 3

  state = {
    gifs: []
  }

  gifQuery = query => {
    console.log(query)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=LxrM08T9ohTJbdb3Xnqdijy18Bw6mKgi&rating=g&limit=5`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: data.data
      })
      // this.setState({
      //   //
      // })
      console.log(data)
    })
  }

  handleSubmit = string => {
    this.gifQuery(string)
  }

  handleClick = event => {
    console.log('handleClick was called', event)
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer;
