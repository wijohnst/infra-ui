import styled from "styled-components";

import { breakpoints } from "./style-vars";

export const WhyContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding: calc(var(--layout-size-xxl) + var(--layout-size-lg)); // 3.6rem

  @media (max-width: ${breakpoints.SM}) {
    justify-content: center;
    padding: 0;

    h2 {
      width: 100%;
      text-align: center;
    }
  }

  .heading {
    display: flex;
    width: 100%;
  }

  .copy {
    width: 100%;
    margin: 0 0 var(--layout-size-xxl) 0;

    display: flex;
    flex-flow: row nowrap;

    @media (max-width: ${breakpoints.SM}) {
      flex-flow: column nowrap;
    }
  }

  .stop-watch-icon {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 10rem;
    }
  }
`;
