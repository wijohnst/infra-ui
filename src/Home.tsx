import * as React from "react";

import { Content } from "./Content";

export type HomeProps = {};

export const Home = ({}: HomeProps): React.ReactElement => {
  return (
    <Content>
      <h2>Home</h2>
    </Content>
  );
};
