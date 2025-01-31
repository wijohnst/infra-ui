import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--layout-size-xxl);

  .icons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 25%;

    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    h1 {
      font-size: 8rem;
    }

    svg {
      height: 8rem;
    }
  }

  @media (min-width: ${breakpoints.MD}) and (max-width: ${breakpoints.LG}) {
    .icons {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.SM}) and (max-width: ${breakpoints.MD}) {
    display: flex;
    flex-direction: column;

    .icons {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.SM}) {
    display: flex;
    flex-direction: column;

    .icons {
      width: 100%;

      h1 {
        font-size: 4rem;
      }

      svg {
        height: 4rem;
      }
    }
  }
`;
