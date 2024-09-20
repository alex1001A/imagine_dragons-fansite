import React from "react";

import logoBanner from "../../images/logo-png-imagine-dragons.png";

import Section from "../Section/Section";

const MainBanner = () => (
  <Section>
    <div className="container">
      <h1 style={{ fontSize: 0, lineHeight: 0 }}>Imagine Dragons</h1>
      <div className="banner">
        {/* <video className="banner-video" width={1000} height="auto" loop muted autoPlay>
          <source src={video} type="video/webm" />
        </video> */}
        <img className="banner-image" src={logoBanner} alt={logoBanner}/>
      </div>
    </div>
  </Section>
);

export default MainBanner;
