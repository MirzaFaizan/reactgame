import React, { Component } from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/5.png';
import ImgContainer from './imageContainer';

class mainFrame extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Click Game!</h1>
          <h3>Don't click same image twice</h3>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-3 text-center">
              <ImgContainer image={img1}/>
            </div>
            <div className="col-sm-3 text-center">
              <ImgContainer image={img2}/>
            </div>
            <div className="col-sm-3 text-center">
              <ImgContainer image={img3}/>
            </div>
            <div className="col-sm-3 text-center">
              <ImgContainer image={img4}/>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-12">
            <h2 className="text-center">Press any image to start game</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default mainFrame;
