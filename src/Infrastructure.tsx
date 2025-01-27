import * as React from "react";

import { Content } from "./Content";
import { InfrastructureContainer } from "./Infrastructure.styles";

export type InfrastructureProps = {};

export const Infrastructure = ({}: InfrastructureProps): React.ReactElement => {
  return (
    <Content>
      <InfrastructureContainer>
        <h2>Why Infrastructure?</h2>
      </InfrastructureContainer>
    </Content>
  );
};
