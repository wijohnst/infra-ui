import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const LinkButton = styled.button<{ $isActive?: boolean }>`
  background-color: transparent;
  border: none;
  color: ${({ $isActive: isActive }) =>
    isActive ? "var(--color-primary)" : "var(--color-text)"};
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
  flex-flow: row;
  justify-content: center;
  align-items: center;

  height: 100%;

  .icon-wrapper {
    svg {
      height: 60px;
      margin-right: 0.5rem;
    }
  }

  .headings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 0.5rem;
    }

    h2 {
    }
  }
  @media (max-width: ${breakpoints.MD}) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
    .headings {
      h1 {
        /* text-align: center; */
      }
    }
  }

  @media (max-width: ${breakpoints.MD}) {
    flex: 1;

    justify-content: center;
    align-items: center;
  }
`;

export const GradDivider = styled.div`
  width: 100%;
  hr {
    display: none;
  }

  @media (max-width: ${breakpoints.SM}) {
    hr {
      display: block;
      border: none;
      margin-top: var(--layout-size-xxl);
    }

    hr::before {
      content: "---";
      display: block;
      width: 100%;
      height: 5px;
      background: var(--pipe-gradient-y);
    }
  }
`;
