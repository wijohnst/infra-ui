import styled from "styled-components";

import { breakpoints } from "./style-vars";

export const SemanticElement = styled.header`
  flex-shrink: 0;

  padding: var(--layout-size-sm);

  display: flex;
  align-items: center;

  padding: var(--layout-size-lg);

  background-color: var(--color-neutral);

  nav {
    display: flex;
    flex: 1;
    justify-content: space-around;

    height: 100%;

    @media (max-width: ${breakpoints.LG}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
    }

    @media (max-width: ${breakpoints.MD}) {
      display: none;
    }
  }
`;
