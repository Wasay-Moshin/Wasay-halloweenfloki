import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <div className="bg1">
      <div className="container text-center helloween">
        <div className="row">
          <div className="col-md-6">
            <div data-aos="zoom-in">
            <h1>
              Halloween<br />
              Floki
            </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="card hero-card">
                <div className="card-body">
                  <h5 className="card-title pc">$FLOH Live Now!</h5>
                  <br />
                  <button type="button" class="btn btn-secondary">
                    Secondary
                  </button>
                  <br />
                  <br />
                  <AiFillTwitterSquare size={"40px"} color={"#1E94DF"} />
                  <FaTelegram size={"40px"} color={"#6D598F"} />
                  <br />
                  <br />
                  <span className="pc">
                    Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
