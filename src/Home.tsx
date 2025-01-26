import * as React from "react";

import { Content } from "./Content";
import { HomeContainer } from "./Home.styles";

export type HomeProps = {};

export const Home = ({}: HomeProps): React.ReactElement => {
  return (
    <Content>
      <HomeContainer>
        <h1>Home</h1>
      </HomeContainer>
    </Content>
  );
};
