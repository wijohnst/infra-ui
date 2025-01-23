import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const BadgeWrapper = styled.div`
  filter: drop-shadow(0.1rem 0.2rem 0.2rem rgba(50, 50, 0, 0.5));

  position: relative;
`;

export const BadgeContent = styled.div`
  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 0.75rem;
  }

  h2 {
    font-size: 0.5rem;
    margin-top: 0.25rem;
  }

  @media (max-width: ${breakpoints.SM}) {
    h1 {
      font-size: 0.5rem;
    }

    h2 {
      display: none;
    }

    top: 35%;
  }

  position: absolute;
  top: 25%;
  z-index: 99;
`;

export const Badge = styled.div`
  height: 100px;
  width: 100px;

  @media (max-width: ${breakpoints.SM}) {
    height: 50px;
    width: 50px;
  }

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary);

  clip-path: circle(50% at 50% 50%);
  position: relative;

  ::before {
    content: "";
    width: 98px;
    height: 98px;
    position: absolute;
    display: flex;
    top: 1px;
    left: 1px;
    background-color: var(--color-neutral);
    clip-path: circle(50% at 50% 50%);

    @media (max-width: ${breakpoints.SM}) {
      width: 48px;
      height: 48px;
      top: 1px;
      left: 1px;
    }
  }
`;
