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

  &::before {
    content: "";
    position: absolute;
    bottom: -10px; /* Adjust based on border width */
    left: 0;
    right: 0;
    height: 10px; /* Adjust based on border width */
    background: linear-gradient(90deg, #23f354 0%, #15cbf6 50%, #ff8e47 100%);
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
