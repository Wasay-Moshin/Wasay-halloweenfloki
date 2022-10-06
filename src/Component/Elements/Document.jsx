import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Document() {
  return (
    <div className="bg4">
      <div className="container">
      <div className="bg5 p-5">
        <div className="row">
        <div className="col-md-6">
        
          <div className="pc">
            <br />
            <div>
              <h5>_______ Whitepaper</h5>
            </div>
            <br />
            <div>
              <h1>Read Our Documents</h1>
            </div><br /><br />
            <div className="ic">
              <p>
                <BsFillCheckCircleFill size={"30px"} color={"orange"} />
                &nbsp; KYC
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BsFillCheckCircleFill size={"30px"} color={"orange"} />
                &nbsp; Audit
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BsFillCheckCircleFill size={"30px"} color={"orange"} />
                &nbsp; Whitepaper
              </p>
            </div><br /><br />
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Download
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    KYC
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Audit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src='Assests/floh1.png' alt="" width={"350rem"}></img>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
