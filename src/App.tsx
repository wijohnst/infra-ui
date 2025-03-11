import * as React from "react";
import GlobalStyle from "./global-styles";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Infrastructure } from "./Infrastructure";
import { Why } from "./Why";
import { Bond } from "./Bond";
import { After } from "./After";
import { Involved } from "./Involved";
import { FAQ } from "./FAQ";

export type Section =
  | "home"
  | "infrastructure"
  | "why"
  | "bond"
  | "after"
  | "involved";

function App() {
  const [section, setSection] = React.useState<Section | null>(null);

  const refMap = {
    home: React.useRef<HTMLDivElement>(null),
    infrastructure: React.useRef<HTMLDivElement>(null),
    why: React.useRef<HTMLDivElement>(null),
    bond: React.useRef<HTMLDivElement>(null),
    after: React.useRef<HTMLDivElement>(null),
    involved: React.useRef<HTMLDivElement>(null),
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>): void => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  React.useEffect(() => {
    switch (section) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "infrastructure":
        scrollToRef(refMap.infrastructure);
        break;
      case "why":
        scrollToRef(refMap.why);
        break;
      case "bond":
        scrollToRef(refMap.bond);
        break;
      case "after":
        scrollToRef(refMap.after);
        break;
      case "involved":
        scrollToRef(refMap.involved);
        break;
      default:
        break;
    }
  }, [section]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout setSection={setSection} section={section || "home"}>
        <div ref={refMap.home} id="home">
          <Home />
          <FAQ />
        </div>
        <div ref={refMap.infrastructure} id="infrastructure">
          <Infrastructure />
        </div>
        <div ref={refMap.why} id="why">
          <Why />
        </div>
        <div ref={refMap.bond} id="bond">
          <Bond />
        </div>
        <div ref={refMap.after} id="after">
          <After />
        </div>
        <div ref={refMap.involved} id="involved">
          <Involved />
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default App;
