import * as React from "react";
import { LinkButton, TextLogo } from "./GlobalComponent.styles";
import { SemanticElement } from "./Header.styles";
import { Section } from "./App";

type HeaderProps = {
  section: Section;
  setSection: (section: Section) => void;
};

export const Header = ({
  section,
  setSection,
}: HeaderProps): React.ReactElement => {
  const handleSectionChange = (section: Section) => {
    setSection(section);
  };

  return (
    <SemanticElement>
      <TextLogo>
        <h1>Vote Yes Campaign</h1>
        <h2>Vote Yes on Main Street Improvements</h2>
      </TextLogo>
      <nav>
        <LinkButton
          isActive={section === "home"}
          onClick={() => handleSectionChange("home")}
        >
          Home
        </LinkButton>
        <LinkButton
          isActive={section === "infrastructure"}
          onClick={() => handleSectionChange("infrastructure")}
        >
          Why Infrastructure?
        </LinkButton>
        <LinkButton
          isActive={section === "why"}
          onClick={() => handleSectionChange("why")}
        >
          Why Now?
        </LinkButton>
        <LinkButton
          isActive={section === "bond"}
          onClick={() => handleSectionChange("bond")}
        >
          Why a bond?
        </LinkButton>
        <LinkButton
          isActive={section === "after"}
          onClick={() => handleSectionChange("after")}
        >
          What happens after?
        </LinkButton>
        <LinkButton
          isActive={section === "involved"}
          onClick={() => handleSectionChange("involved")}
        >
          {" "}
          Get Involved
        </LinkButton>
      </nav>
    </SemanticElement>
  );
};
