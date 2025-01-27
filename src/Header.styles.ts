import styled from "styled-components";

import { breakpoints } from "./style-vars";

export const SemanticElement = styled.header`
  flex-shrink: 0;

  padding: var(--layout-size-md);

  display: flex;
  align-items: center;

  background-color: var(--color-neutral);

  position: sticky;
  top: 0;
  z-index: 100;

  h2 {
    font-size: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -10px; /* Adjust based on border width */
    left: 0;
    right: 0;
    height: 10px; /* Adjust based on border width */
    background: var(--pipe-gradient-y);
  }

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
