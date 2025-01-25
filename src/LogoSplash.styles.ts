import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const LogoSplashWrapper = styled.div<{}>`
  height: 275px;
  position: relative;

  @media (max-width: ${breakpoints.SM}) {
    height: 150px;
  }

  img {
    object-fit: cover;
    object-position: 0% 50%;
    height: 100%;
    width: 100%;
    filter: brightness(1);

    animation: scroll-object 3s linear 1 forwards;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;

    animation: fade-in 0.5s ease-in 3s 1 forwards;

    h1 {
      text-align: center;
    }

    @media (max-width: ${breakpoints.SM}) {
      h1 {
        font-size: 1rem;
      }
    }
  }

  @keyframes scroll-object {
    0% {
      object-position: 0% 50%;
      filter: brightness(1);
    }
    50% {
      filter: brightness(1);
    }
    100% {
      object-position: 0% 100%;
      filter: brightness(0.5);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* @keyframes dim-brightness {
    0% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(0.5);
    }
  } */
`;
