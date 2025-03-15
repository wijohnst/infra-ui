import styled from "styled-components";

export const SemanticElement = styled.footer`
  flex-shrink: 0;
  position: sticky;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding: var(--layout-size-md);
  width: 100%;

  .social {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-bottom: var(--layout-size-md);

    span {
      font-weight: 700;
      margin-bottom: var(--layout-size-md);
    }

    svg {
      height: 40px;
    }

    hr {
      width: 100%;
      background-color: red;
    }
  }

  .about {
    font-size: 0.65rem;
    font-weight: 300;

    text-align: center;
    width: 75%;
  }
`;
