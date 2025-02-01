import styled from "styled-components";

import { breakpoints } from "./style-vars";

export const AfterContainer = styled.div`
  height: 100%;

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

  .copy-icon-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    width: 100%;

    @media (max-width: ${breakpoints.MD}) {
      flex-direction: column-reverse;
    }
  }

  .reimagine-link {
    width: 100%;
  }

  .center-link {
    width: 100%;
    text-align: center;

    @media (max-width: ${breakpoints.MD}) {
      text-align: left;
    }
  }

  .icon {
    margin: 0 var(--layout-size-xxl) 0 0;
    width: 100%;

    h1 {
      font-size: 10rem;
    }

    @media (max-width: ${breakpoints.SM}) {
      margin: 0 0 var(--layout-size-xxl) 0;
    }

    svg {
      width: 200px;
      height: auto;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copy {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    p,
    li {
      margin: 0 0 var(--layout-size-lg) 0;
    }

    li {
      margin-left: 4rem;
      list-style-type: circle;
    }

    strong {
      font-weight: 700;
    }
  }
`;
