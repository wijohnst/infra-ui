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
  getContentHeight: () => number;
};

export const Layout = ({
  children,
  setSection,
  section,
  getContentHeight,
}: LayoutProps): React.ReactElement => {
  return (
    <LayoutWrapper $contentHeight={getContentHeight()}>
      <Header setSection={setSection} section={section} />
      <LogoSplash />
      <div className="main">
        <div className="scroll-container">
          <div className="scroll-watcher">
            <img src="https://wjt.sfo2.cdn.digitaloceanspaces.com/grad_pipe.svg" />
          </div>
          <div className="cap-wrapper">
            <img src="https://wjt.sfo2.cdn.digitaloceanspaces.com/cap.svg" />
          </div>
        </div>
        <ContentSection>{children}</ContentSection>
      </div>
      <Footer />
    </LayoutWrapper>
  );
};
