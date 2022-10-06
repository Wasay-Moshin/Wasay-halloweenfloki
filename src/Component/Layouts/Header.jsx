import React from "react";
// import { Button } from 'antd';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="Assests/FLOH.png" alt="" width={'70px'}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                {/* <Button>Default Button</Button> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
