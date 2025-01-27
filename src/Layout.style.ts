import styled from "styled-components";

export const LayoutWrapper = styled.div`
  padding: var(--layout-size-md);
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--pipe-gradient-x);

  padding: 1rem;

  overflow-x: hidden;
  overflow-y: scroll;
`;
