import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const FAQContainer = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  button {
    border: unset;
    background-color: unset;
    cursor: pointer;
    font-size: 1rem;
  }

  .faq-controls {
    width: 100%;
    text-align: center;
    padding: var(--layout-size-md);
  }

  @media (max-width: ${breakpoints.MD}) {
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
