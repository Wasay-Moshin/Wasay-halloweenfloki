import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
        <div className="container text-center">
            <br/>
            <div>
            <AiFillTwitterSquare size={"40px"} color={"#1E94DF"}/>
            <FaTelegram size={"40px"} color={"orange"} /> 
            </div>
        
      <p className="pc">
        <br/>
        <br/>

        <hr></hr>
        Copyright © 2022. All rights reserved by Halloween Floki. Contact:
        hello@halloweenfloki.co
      </p>
      </div>
    </div>
  );
}

export default Footer;
