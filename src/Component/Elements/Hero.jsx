import React from "react";
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
function Hero() {
  return (
    <div className="bg1">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <p>Halloween Floki</p>
          </div>
          <div className="col-md-6">
            <div className="card" style={{width:"20rem"}}>
              <div className="card-body">
                <h5 className="card-title">$FLOH Live Now!</h5>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <br/>
                <AiFillTwitterSquare size={'40px'} color={'#1E94DF'}/>
                <FaTelegram size={'40px'} color={'#6D598F'}/>
                <p className="card-text">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
