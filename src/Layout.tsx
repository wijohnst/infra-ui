import * as React from "react";
import { Header } from "./Header";

import { ContentSection, LayoutWrapper } from "./Layout.style";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentSection>{children}</ContentSection>
      <Footer />
    </LayoutWrapper>
  );
};
