import * as React from "react";
import { Header } from "./Header";
import { Section } from "./App";
import { ContentSection, LayoutWrapper } from "./Layout.style";
import { Footer } from "./Footer";
import { LogoSplash } from "./LogoSplash";

type LayoutProps = {
  children: React.ReactNode;
  setSection: (section: Section) => void;
  section: Section;
};

export const Layout = ({
  children,
  setSection,
  section,
}: LayoutProps): React.ReactElement => {
  return (
    <LayoutWrapper>
      <Header setSection={setSection} section={section} />
      <LogoSplash />
      <ContentSection>{children}</ContentSection>
      <Footer />
    </LayoutWrapper>
  );
};
