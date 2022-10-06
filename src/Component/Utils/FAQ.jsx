import React from "react";
import Faq from "react-faq-component";
const data = {
  rows: [
    {
      title: <b>Why is the payout in BUSD, not in $FLOH?</b>,
      content: `This is a massive advantage of FLOH compared to other crypto projects. Halloween Floki, like every coin on the market, might fluctuate in value a lot. In contrast, BUSD is very stable, almost 1:1 to USD, which in result, reduces the risk of your investment. With decent volume, your investment will pay for itself over time.`,
    },
    {
      title: <b>What is slippage for?</b>,
      content:
        "To set the tolerance on the maximum percentage of price movement you can live with. IT IS NOT A TAX.",
    },
    {
      title: <b>Why 8% tax and when is it applied?</b>,
      content: `It is applied to EVERY TRANSACTION, this includes: Buys, Sells and Transfers. 4% gets redistributed to all holders, 3% to marketing, and 1% to the liquidity pool. `,
    },
    {
      title: <b> Why am I not receiving rewards?</b>,
      content:
        "Rewards are directly related to trading volume and your bag size. The higher the volume, the more rewards you earn!",
    },
    {
      title: <b> What is AMA and when do they happen?</b>,
      content:
        "Ask Me Anything, (AMA) is an open space where investors can talk to the developers and ask questions. The Halloween Floki team will be holding AMA’s on a regular schedule. Make sure to join our telegram to learn more about the schedule!!",
    },
    {
      title: <b> What is the contract address?</b>,
      content: (
        <p>
          {" "}
          The address is as follows: 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  //   animate: true,
  //   arrowIcon: "V",
  //   tabFocus: true
};
function FAQ() {
  return (
    <div className="bg2">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <br />
            <div className="pc">
              <h6>_______FAQS</h6>
            </div>
            <br />
            <div className="pc">
              <h1>Frequently Asked Questions</h1>
            </div>
            <br />
            <br />
            <br />
            <div>
              <Faq data={data} styles={styles} config={config} />
            </div>
          </div>

          <br />
          <div class="col-md-6">
            <br /> <br />
            <img
              className="img-fluid"
              src="Assests/question.png"
              alt=""
              width={"500rem"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
