import React, { Component } from 'react';

class imageContainer extends Component {
  render() {
    return (
      <div>
          <img className="img-fluid" alt="some shit" src={this.props.image} />
      </div>
    );
  }
}

export default imageContainer;
