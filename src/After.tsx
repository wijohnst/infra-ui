import * as React from "react";

import { Content } from "./Content";
import { AfterContainer } from "./After.styles";
import { GradDivider } from "./GlobalComponent.styles";

export type HomeProps = {};

export const After = ({}: HomeProps): React.ReactElement => {
  return (
    <Content>
      <AfterContainer>
        <div className="heading">
          <h2>THEN WHAT?</h2>
        </div>
        <div className="copy-icon-wrapper">
          <div className="copy">
            <p>
              After upgrading the infrastructure, the streets and sidewalks will
              need repaving. This presents an opportunity to re-imagine
              downtown.
            </p>
            <p>Options include:</p>
            <ul>
              <li>Roundabouts and two-way traffic</li>
              <li>A festival street with integrated sidewalks and curbs</li>
              <li>
                A central plaza that saves $2 million by not reinstating traffic
                lights at 3rd and D streets
              </li>
            </ul>
            <div className="reimagine-link">
              <p>Learn more about these possibilities at:</p>
              <div className="center-link">
                <a href="https://reimaginedtlewiston.org/">
                  www.reimaginelewiston.org
                </a>
              </div>
            </div>
          </div>
          <div className="icon">
            <h1>🤔</h1>
          </div>
        </div>
      </AfterContainer>
      <GradDivider>
        <hr />
      </GradDivider>
    </Content>
  );
};
