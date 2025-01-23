import * as React from "react";
import { LinkButton, TextLogo } from "./GlobalComponent.styles";
import { SemanticElement } from "./Header.styles";

type HeaderProps = {};

export const Header = ({}: HeaderProps): React.ReactElement => {
  return (
    <SemanticElement>
      <TextLogo>
        <h1>Vote Yes Campaign</h1>
        <h2>Vote Yes on Main Street Improvements</h2>
      </TextLogo>
      <nav>
        <LinkButton isActive={true}>Home</LinkButton>
        <LinkButton>Why Infrastructure?</LinkButton>
        <LinkButton>Why Now?</LinkButton>
        <LinkButton>Why a bond?</LinkButton>
        <LinkButton>What happens after?</LinkButton>
        <LinkButton> Get Involved</LinkButton>
      </nav>
    </SemanticElement>
  );
};
