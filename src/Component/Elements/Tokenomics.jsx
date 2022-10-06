import React from "react";
import {FaDollarSign} from 'react-icons/fa'
import {FaBullhorn} from 'react-icons/fa'
import {MdWaves} from 'react-icons/md'
import {FaUserShield} from 'react-icons/fa'
function Tokenomics() {
  return (
    <div className="bg3">
      <div className="container text-start">
        <div className="pc">
          <br />
          <br />
          <h6>______ WHAT IS OUR TOKENOMICS</h6>
          <br />
          <p>
            At Halloween Floki, we are designing a project based on definitive
            market rules and fundamental economic principles. Halloween Floki
            reconciles a high-performance protocol with integral price stability
            features.
          </p>
          <br />
          <p>Total Sudopply: 1 000 000 000 000 FLOH</p>
          <br />
          <br />
          <p>8% Buy and Sell Tax:</p>
          <br />
          <ul>
            <li>
              4% holders rewards: Dividend tax on all transactions that will be
              distributed every 24 hours to holders in BUSD.
            </li>
            <li>
              1% liquidity: Liquidity tax on all transactions to prevent major
              price fluctuation after a large trade by filling the liquidity
              pool.
            </li>
            <li>
              3% marketing: Marketing tax on all transactions allows the
              Halloween Floki marketing team to reinvest and grow the project to
              its maximum potential.
            </li>
          </ul>
          <br />
          <br />
          <h6>______ WHAT ARE OUR FEATURES</h6>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card p-3 m-3" style={{maxWidth:'250px'}}>
                    <FaDollarSign size={'70px'}/>
                    <br/>
                  <h5>$BUSD Rewards</h5>
                  <p>
                    Earn automatic Binance pegged USD ($BUSD), rewards by
                    holding your Halloween Floki Coin – 4% of every buy,
                    transfer and sell transaction is redistributed automatically
                    to $FLOH holders. You will receive the rewards automatically
                    in your wallet or claim your rewards manually in our
                    upcoming reward app tracker.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card p-3 m-3" style={{maxWidth:'250px'}}>
                    <FaBullhorn size={'70px'}/>
                    <br/>
                  <h4>Marketing</h4>
                  <p>
                    3% of every transaction will directly go to the marketing
                    wallet in order to ensure an increase in exposure throughout
                    advertisement platforms, social media and to secure
                    contracts and deals with influencers. This will help FLOH
                    achieve an international status and to be known within every
                    community!
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card p-3 m-3" style={{maxWidth:'250px'}}>
                    <MdWaves size={'70px'}/>
                    <br/>
                  <h4>Liquidity Pool</h4>
                  <p>
                    Our Smart contract deposits 1% from every transaction as
                    $FLOH and $BNB into a liquidity pool which has been locked
                    and certified. Pancakeswap fixes the low liquidity problems
                    of DEXs through their Liquidity Pools, ensuring traders can
                    always Buy & Sell without liquidity issues. A bigger
                    liquidity pool will provide more stability to the $FLOH
                    price.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card p-3 m-3" style={{maxWidth:'250px'}}>
                    <FaUserShield size={'70px'}/>
                    <br/>
                  <h4>Anti-Whale Mechanism</h4>
                  <p>
                    Our Anti-Whale mechanism ensures that no single transaction
                    order can amount to more than 1% of the total supply of
                    $FLOH. The Anti-Whale Mechanism won’t necessarily stop
                    whales from selling, but having a maximum limit helps to
                    prevent large selloffs and price manipulation.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Tokenomics;
