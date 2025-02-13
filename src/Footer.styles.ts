import styled from "styled-components";

export const SemanticElement = styled.footer`
  flex-shrink: 0;
  position: sticky;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding: var(--layout-size-md);

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
  }

  .about {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;
