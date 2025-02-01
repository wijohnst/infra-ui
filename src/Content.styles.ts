import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const SemanticElement = styled.section`
  margin-bottom: 1rem;
  border-radius: var(--layout-size-md);
  height: 100%;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: var(--layout-size-xxl);

  background-color: rgba(255, 255, 255, 0.5);

  p,
  li,
  a {
    font-size: 1.5rem;
  }

  li {
    line-height: 1.5rem;
    font-weight: 300;
  }

  h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.SM}) {
    background-color: unset;
    box-shadow: unset;
    padding: var(--layout-size-md);

    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }

  @media (min-width: ${breakpoints.SM}) and (max-width: ${breakpoints.MD}) {
    h2 {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  strong {
    font-weight: 900;
  }
`;
