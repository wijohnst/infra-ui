import * as React from "react";

import { SemanticElement } from "./Footer.styles";
import { GradDivider } from "./GlobalComponent.styles";

import FacebookIcon from "./assets/facebook_icon.svg?react";

type FooterProps = {};

export const Footer = ({}: FooterProps): React.ReactElement => {
  return (
    <SemanticElement>
      <div className="social">
        <span>Join Us on Social Media!</span>
        <div className="icons">
          <a
            href="https://www.facebook.com/share/g/1BRZn3LNKP/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
        <GradDivider>
          <hr />
        </GradDivider>
      </div>
      <div className="about">
        <span>Paid for by YES for Infrastructure Citizens Committee</span>
      </div>
    </SemanticElement>
  );
};
