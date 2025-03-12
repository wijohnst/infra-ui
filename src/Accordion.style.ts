import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const AccordionWrapper = styled.div`
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 1rem;
  border: solid thin black;

  box-shadow: var(--box-shadow);

  button {
    width: 100%;
    background: unset;
    border: none;
    text-align: left;
    cursor: pointer;

    display: flex;
  }

  h2 {
    font-size: 1.5rem;
    flex-grow: 1;
  }

  p {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.SM}) {
    h2 {
      font-size: 1rem;
    }
  }
`;
