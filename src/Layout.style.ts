import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const LayoutWrapper = styled.div`
  padding: var(--layout-size-md);

  @media (max-width: ${breakpoints.SM}) {
    padding: 0;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--pipe-gradient-x);

  padding: 1rem;

  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: ${breakpoints.SM}) {
    padding: var(--layout-size-sm);
  }
`;
