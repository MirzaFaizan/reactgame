import React, { Component } from 'react';
import './imageContainer.css';
class imageContainer extends Component {
  render() {
    return (
      <div>
          <img className="img-fluid img-thumbnail" alt="oka" src={this.props.image} onClick={()=>this.props.handleClick(this.props.id)} />
      </div>
    );
  }
}

export default imageContainer;
