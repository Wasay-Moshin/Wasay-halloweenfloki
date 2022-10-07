import React from "react";
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
                <a className="nav-link active c1" href="/">
                <b>About</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active c1" href="/">
                <b> Tokenomics</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active c1" href="/">
                  <b>Roadmap</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active c1" href="/">
                 <b> Documents</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active c1" href="/">
                <b> FAQ</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                <button type="button" className="btn1"><b>MINT FLOH RAFFLE NFT</b></button>
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
