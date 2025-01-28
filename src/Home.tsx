import * as React from "react";

import { Content } from "./Content";
import { HomeContainer } from "./Home.styles";

export type HomeProps = {};

export const Home = ({}: HomeProps): React.ReactElement => {
  return (
    <Content>
      <HomeContainer>
        <div className="copy">
          <div className="heading">
            <h2>PIPE UP LEWISTON!</h2>
          </div>
          <p>
            Our city’s future depends on strong, reliable infrastructure. With
            your support we can upgrade Lewiston’s aging water, sewer, and
            stormwater systems, install high-speed fiber optics, and create a
            vibrant downtown—<strong>all without raising taxes</strong>. All we
            need is your voice! Keep reading to learn more and and how to get
            involved!
          </p>
        </div>
        <div className="icons">
          <div className="row">
            <h1>🗳️</h1>
          </div>
          <div className="row">
            <h1>🏗️</h1>
            <h1>📣</h1>
          </div>
        </div>
      </HomeContainer>
    </Content>
  );
};
