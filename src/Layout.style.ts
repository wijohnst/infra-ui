import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const LayoutWrapper = styled.div<{
  $contentHeight: number;
}>`
  padding: var(--layout-size-md);

  .scroll-container {
    width: 50px;
    padding-left: 10px;
    height: ${({ $contentHeight }) => `${$contentHeight - 60}px`};

    @media (max-width: ${breakpoints.SM}) {
      display: none;
    }

    @media (prefers-reduced-motion) {
      display: none;
    }
  }

  .scroll-watcher {
    overflow: hidden;

    display: flex;

    height: 1%;
    animation: grow-on-scroll linear 1 forwards;
    animation-timeline: scroll();

    img {
      object-fit: cover;
      width: 100%;
    }

    @keyframes grow-on-scroll {
      from {
        height: 1%;
      }

      to {
        height: 100%;
      }
    }
  }
  .cap-wrapper {
    position: sticky;
    bottom: 0px;
    scale: 1.5;
  }

  .main {
    display: grid;
    grid-template-columns: 100px auto;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 0.98;

  overflow-x: hidden;
  overflow-y: scroll;
`;
