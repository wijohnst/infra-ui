import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--layout-size-xxl);

  height: 100%;
  width: 100%;

  p {
    font-size: 1.5rem;
  }

  strong {
    font-weight: 900;
  }

  .heading {
    display: flex;
    width: 100%;
    color: var(--color-neutral);
    margin-bottom: 0.25rem;
  }

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

    .tax-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      span {
        text-align: center;
        font-weight: 900;
        position: absolute;
        top: 40%;
        left: 12.5%;
        z-index: 1;
      }

      .icon {
        z-index: 99;
      }
    }
  }
`;
