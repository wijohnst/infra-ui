import * as React from "react";
import { Badge, BadgeWrapper, BadgeContent } from "./BageLogo.styles";

export type BadgeLogoProps = {};

export const BadgeLogo = ({}: BadgeLogoProps): React.ReactElement => {
  return (
    <BadgeWrapper>
      <BadgeContent>
        <h1>Vote Yes Campaign</h1>
        <h2>Vote Yes on Main Street Improvements</h2>
      </BadgeContent>
      <Badge>
        <a></a>
      </Badge>
    </BadgeWrapper>
  );
};
