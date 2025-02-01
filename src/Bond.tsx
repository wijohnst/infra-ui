import * as React from "react";

import { Content } from "./Content";
import { BondContainer } from "./Bond.styles";

import NoTaxIcon from "./assets/no_tax_icon.svg?react";
import { GradDivider } from "./GlobalComponent.styles";

export type BondProps = {};

export const Bond = ({}: BondProps): React.ReactElement => {
  return (
    <Content>
      <BondContainer>
        <div className="heading">
          <h2>WHY A BOND?</h2>
        </div>
        <div className="copy-icon-wrapper">
          <div className="icon">
            <NoTaxIcon />
          </div>
          <div className="copy">
            <p>
              In Idaho, cities are required by law to get voter approval before
              issuing a bond, even when no tax increase is needed. A bond is a
              financing tool that allows Lewiston to fund large projects upfront
              and pay them off over time, similar to a mortgage. This approach
              ensures that critical improvements can be completed all at once,
              avoiding higher costs from inflation and repeated construction.
            </p>
            <p>
              By voting YES, residents authorize the city to use existing funds
              efficiently—<strong>without raising taxes</strong>—to complete
              these essential infrastructure upgrades in the most cost-effective
              way possible.
            </p>
          </div>
        </div>
      </BondContainer>
      <GradDivider>
        <hr />
      </GradDivider>
    </Content>
  );
};
