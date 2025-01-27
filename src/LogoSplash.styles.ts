import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const LogoSplashWrapper = styled.div<{}>`
  height: 275px;
  position: relative;

  border-bottom: 10px solid transparent;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px; /* Adjust based on border width */
    left: 0;
    right: 0;
    height: 10px; /* Adjust based on border width */
    background: linear-gradient(90deg, #23f354 0%, #15cbf6 50%, #ff8e47 100%);
  }

  @media (max-width: ${breakpoints.SM}) {
    height: 125px;
  }

  img {
    object-fit: cover;
    object-position: 0% 50%;
    height: 100%;
    width: 100%;
    filter: brightness(1);

    animation: scroll-object 3.5s ease-in-out 1 forwards;

    @media (max-width: ${breakpoints.SM}) {
      object-fit: cover;
      object-position: 0% 75%;
      animation: dim 1s linear 1s 1 forwards;
    }
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

    animation: fade-in 0.5s ease-in-out 3s 1 forwards;

    h1 {
      text-align: center;
    }

    @media (max-width: ${breakpoints.SM}) {
      animation: fade-in 1s ease-in-out 2s 1 forwards;

      h1 {
        font-size: 1rem;
      }
    }
  }

  @keyframes scroll-object {
    0% {
      object-position: 0% 60%;
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

  @keyframes scroll-object-sm {
    0% {
      object-position: 0% 30%;
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

  @keyframes dim {
    0% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(0.5);
    }
  }
`;
