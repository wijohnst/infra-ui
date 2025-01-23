import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: var(--layout-size-md);
  height: 100%;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 0.98;

  overflow-x: hidden;
  overflow-y: scroll;
`;
