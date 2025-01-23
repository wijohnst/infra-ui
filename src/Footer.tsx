import * as React from "react";

import { SemanticElement } from "./Footer.styles";
import { BadgeLogo } from "./BadgeLogo";

type FooterProps = {};

export const Footer = ({}: FooterProps): React.ReactElement => {
  return (
    <SemanticElement>
      <BadgeLogo />
    </SemanticElement>
  );
};
