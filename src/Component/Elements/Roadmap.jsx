import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Roadmap() {
  return (
    <div className="bg6">
      <br />
      <div className="Conatiner text-center pc">
        <h6>Road Map</h6>
        <h2>Our Plan</h2>
      </div>
      <br/>
      <br/>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            position={"right"}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - present"
            iconStyle={{ background: "#FF6801", color: "black" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Phase 1 </h3>
            <ul>
              <li>Team Expansion</li>
              <li>Social Media and Community Integration</li>
              <li>Contract Creation</li>
              <li>Website Deployment</li>
              <li>Audit & KYC</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={"left"}
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#FF6801", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Phase 2</h3>
            <ul>
              <li> Presale Whitelist Competition</li>
              <li>Presale Marketing Campaign </li>
              <li>Presale Launch on Pinksale </li>
              <li>Airdrop Partnership</li>
              <li>Foreign Communities </li>
              <li>Integration and Creation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={"right"}
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#FF6801", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Phase 3</h3>
            <ul>
              <li>Pre-Launch Marketing Campaign</li>
              <li>Launch on PancakeSwap</li>
              <li>Airdrop for Migrating Holders</li>
              <li>Reward Tracker Partnership</li>
              <li>Farm & Staking Pools</li>
              <li>CMC/CG Listings</li>
              <b>
                <li>5 Million Market Cap </li>
              </b>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={"left"}
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#FF6801", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Phase 4</h3>
            <ul>
              <li>FLOH Holders Lottery</li>
              <li>Worldwide Halloween Dog Costume Contest</li>
              <li>CEX Listing</li>
              <li>ETH Bridging</li>
              <li>NFT Collection Website Integration</li>
              <li>NFT Collection Marketing Campaign</li>
              <b>
                <li>15 Million Market Cap</li>
              </b>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={"right"}
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#FF6801", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Phase 5</h3>
            <ul>
              <li>Influencers Campaign</li>
              <li>NFT Collection Whitelist Contest</li>
              <li>NFT Collection Launch</li>
              <li>Second CEX Listing</li>
              <li>Record for a Holiday Floki Project:</li>
              <b>30 Million Market Cap</b>

            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Roadmap;
