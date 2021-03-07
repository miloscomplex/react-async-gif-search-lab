// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <ul>
        {this.props.gifs.map( gif => <li key={gif.id}><img src={gif.images.original.url} /></li> )} 
      </ul>
    )

  }

}

export default GifList;
