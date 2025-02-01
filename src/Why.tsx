import * as React from "react";
import { Content } from "./Content";
import { WhyContainer } from "./Why.styles";
import { GradDivider } from "./GlobalComponent.styles";

export type WhyProps = {};

export const Why = ({}: WhyProps): React.ReactElement => {
  return (
    <Content>
      <WhyContainer>
        <div className="heading">
          <h2>WHY NOW?</h2>
        </div>
        <div className="copy">
          <p>
            Federal ARPA funds awarded to Lewiston must be used by 2027. If the
            city doesn’t act now, this funding will be forfeited, and future
            infrastructure projects will cost significantly more. Replacing
            water, sewer, stormwater systems, and laying fiber optic cable at
            once minimizes costs and disruption. Delaying these projects will
            lead to repeated construction, increased expenses, and the risk of
            infrastructure failure.
          </p>
          <div className="stop-watch-icon">
            <h1>⏱️</h1>
          </div>
        </div>
      </WhyContainer>
      <GradDivider>
        <hr />
      </GradDivider>
    </Content>
  );
};
