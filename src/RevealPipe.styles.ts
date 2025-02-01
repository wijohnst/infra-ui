import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const RevealPipeContainer = styled.div<{
  $isActive: boolean;
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 100px;

    svg {
      height: 100px;
      width: 100px;
    }

    @media (max-width: ${breakpoints.SM}) {
      svg {
        height: 45px;
        width: 45px;
      }
    }
  }

  .mirror-pipe {
    display: ${({ $isActive }) => ($isActive ? "inherit" : "none")};
    transform: rotate(180deg) scaleX(-1);
    position: relative;
    top: -16px;

    @media (max-width: ${breakpoints.SM}) {
      top: -45px;
    }
  }

  .svg-wrapper {
    height: 0px;
    opacity: 0;
    animation: reveal 0.5s forwards ease-in-out;

    @media (max-width: ${breakpoints.SM}) {
      animation: reveal-mobile 0.5s forwards ease-in-out;
    }

    svg {
      height: 100px;
      width: 100px;
    }

    @media (max-width: ${breakpoints.SM}) {
      svg {
        height: 45px;
        width: 45px;
      }
    }
  }

  @keyframes reveal {
    0% {
      height: 0px;
      opacity: 0;
    }

    60% {
      opacity: 20%;
    }
    100% {
      height: 100px;
      opacity: 1;
    }
  }

  @keyframes reveal-mobile {
    0% {
      height: 0px;
      opacity: 0;
    }

    60% {
      opacity: 20%;
    }
    100% {
      height: 45px;
      opacity: 1;
    }
  }
`;
