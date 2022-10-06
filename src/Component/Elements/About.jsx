import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
function About() {
  return (
    <div className="bg2">
      <div class="container text-start">
        <div class="row">
          <div class="col-md-6">
            <div className="pc">
            <br/> <br/>
            <b>________ WHAT IS HALLOWEEN FLOKI</b><br/><br/>
            <h1>From the Team That<br/> Brought You Valentine<br/>Floki</h1><br/><br/>
            <p>
              Halloween Floki (FLOH) is a meme cryptocurrency token operating on
              the BEP-20 Blockchain technology (Binance Smart Chain). With the
              great experience, knowledge and wisdom of the core team, FLOH will
              attempt to peak at the highest market cap a Floki sub-project has
              ever reached, all while distributing BUSD rewards every day to its
              holders.
            </p><br/><br/>
            <p>
              We are taking advantage of the upcoming Holiday to gain the crypto
              community’s attention but as the weeks go by, this project will
              gain its reputation through continuous communication with its
              investors, aggressive marketing campaigns, listings and constant
              deliveries from the leadership team. Backed by cryptocurrency and
              stock market whales, we invite you on this journey to the
              double-digits millions market cap!
            </p>
            <AiFillTwitterSquare size={"50px"} color={"#1E94DF"}  />
            <FaTelegram size={"50px"} color={"#6D598F"} />
            </div>
            <br/>
          </div>
          <div class="col-md-6 img1"> 
            <img className='img-fluid' src="Assests/FLOH.png" alt=""></img>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
