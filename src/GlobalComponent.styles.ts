import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const LinkButton = styled.button<{ isactive?: boolean }>`
  background-color: transparent;
  border: none;
  color: ${({ isactive }) =>
    isactive ? "var(--color-primary)" : "var(--color-text)"};
  cursor: pointer;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  text-transform: none;
  font-weight: 200;
  font-size: 1.25rem;
  text-align: center;

  @media (min-width: ${breakpoints.XL}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.LG}) {
    font-size: 1rem;
  }
`;

export const TextLogo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  height: 100%;

  h1 {
  }

  h2 {
  }

  @media (max-width: ${breakpoints.MD}) {
    flex: 1;

    justify-content: center;
    align-items: center;
  }
`;
