import * as React from "react";
import GlobalStyle from "./global-styles";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Infrastructure } from "./Infrastructure";
import { Why } from "./Why";
import { Bond } from "./Bond";
import { After } from "./After";
import { Involved } from "./Involved";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Home />
        <Infrastructure />
        <Why />
        <Bond />
        <After />
        <Involved />
      </Layout>
    </React.Fragment>
  );
}

export default App;
