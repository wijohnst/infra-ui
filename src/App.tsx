import * as React from "react";
import GlobalStyle from "./global-styles";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Infrastructure } from "./Infrastructure";
import { Why } from "./Why";
import { Bond } from "./Bond";
import { After } from "./After";
import { Involved } from "./Involved";

export type Section =
  | "home"
  | "infrastructure"
  | "why"
  | "bond"
  | "after"
  | "involved";

function App() {
  const [section, setSection] = React.useState<Section | null>(null);

  const homeRef = React.useRef<HTMLDivElement>(null);
  const infrastructureRef = React.useRef<HTMLDivElement>(null);
  const whyRef = React.useRef<HTMLDivElement>(null);
  const bondRef = React.useRef<HTMLDivElement>(null);
  const afterRef = React.useRef<HTMLDivElement>(null);
  const involvedRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    switch (section) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "infrastructure":
        infrastructureRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "why":
        whyRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "bond":
        bondRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "after":
        afterRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "involved":
        involvedRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [section]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout setSection={setSection} section={section || "home"}>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={infrastructureRef}>
          <Infrastructure />
        </div>
        <div ref={whyRef}>
          <Why />
        </div>
        <div ref={bondRef}>
          <Bond />
        </div>
        <div ref={afterRef}>
          <After />
        </div>
        <div ref={involvedRef}>
          <Involved />
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default App;
