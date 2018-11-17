import React, { Component } from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/5.png';
import ImgContainer from './imageContainer';

class mainFrame extends Component {

  constructor(props){
    super(props);
    this.state={
      imgData:[
        {
          "id":1,
          src:img1
        },
        {
          "id":2,
          src:img2
        },
        {
          "id":3,
          src:img3
        },
        {
          "id":4,
          src:img4
        },
      ],
      score:0,
      lastId:null,
      message:'Click any image to start playing!'
    }
  }

  handleClick=(id)=>{
    console.log(`picture with ${id} clicked`);
    if(this.state.lastId===null){
      this.setState(
        {
          lastId:id,
          message:'Great! Now click different image to score'
        }
      );
      this.shuffleData(this.state.imgData);
    } else if(id!==this.state.lastId){
      let tempScore = this.state.score+1;
      this.setState(
        {
          score:tempScore,
          message:'Score : '
        }
      );
      this.shuffleData(this.state.imgData);
    } else {
        this.setState(
          {
            message:'GAME OVER',
            score:0
          }
        )
      
    }
  }

  shuffleData=(array)=>{
    
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      
      console.log(array);
    
  }

  render() {
    return (
      <div>
        <div className="text-center text-white mt-2">
          <h1>Click Game!</h1>
          <h3>Don't click same image twice</h3>
        </div>
        <div className="container">
          <div className="row mt-5">
              {this.state.imgData.map((card)=>{
                return (
                  <div key={card.id} className="col-sm-3 text-center">
                    <ImgContainer  image={card.src} id={card.id} handleClick={this.handleClick}/>
                  </div>
                  );
              })}
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-12">
            <h2 className="text-center text-white">{this.state.message} {this.state.score>0?this.state.score:''}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default mainFrame;
