import * as React from "react";

import { Content } from "./Content";

export type HomeProps = {};

export const After = ({}: HomeProps): React.ReactElement => {
  return (
    <Content>
      <h2>What Comes After?</h2>
    </Content>
  );
};
