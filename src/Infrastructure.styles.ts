import styled from "styled-components";
import { breakpoints } from "./style-vars";

export const InfrastructureContainer = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;

  padding: calc(var(--layout-size-xxl) + var(--layout-size-lg)); // 3.6rem

  .heading {
    display: flex;
    width: 100%;
  }

  .copy {
    width: 100%;
    margin: 0 0 var(--layout-size-xxl) 0;
  }

  .pipelines-container {
    background: linear-gradient(
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: var(--layout-size-md);
  }

  @media (max-width: ${breakpoints.SM}) {
    justify-content: center;
    padding: 0;
  }
`;

export const Pipelines = styled.div<{
  $shouldPulse: boolean;
}>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  svg {
    margin: 0 1rem 0 1rem;
  }

  .pulse {
    animation: ${({ $shouldPulse }) =>
      $shouldPulse ? "pulse 2s infinite" : "none"};
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const PipelineContent = styled.div<{
  $hasOpened: boolean;
}>`
  min-height: ${({ $hasOpened }) => ($hasOpened ? "400px" : "0%")};
  display: flex;
  flex-flow: row;
`;

export const PipelineExplainer = styled.div`
  width: 100%;
  text-align: center;

  span {
    font-style: italic;
  }
`;

export const PipelineContentMember = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  opacity: 0;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: var(--box-shadow);

  @media (max-width: ${breakpoints.SM}) {
    background-color: unset;
    box-shadow: unset;
  }

  animation: reveal-copy 0.75s 0.75s forwards ease-in-out;
  padding: var(--layout-size-md);

  border-radius: var(--layout-size-md);

  h3 {
    font-size: 2rem;
    align-self: center;
    margin: 0.5rem 0 0.5rem 0;
    text-align: center;
  }

  svg {
    height: 160px;
    width: 160px;
  }

  p {
    margin: 0 0 0.5rem 0;
  }

  @media (max-width: ${breakpoints.SM}) {
    h3 {
      margin: 0.25rem 0 0 0;
    }

    svg {
      height: 80px;
      width: 80px;
    }
  }

  @keyframes reveal-copy {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  .copy-icon-wrapper {
    display: flex;
    flex-flow: row nowrap;
    gap: 2rem;

    padding: 1rem;

    @media (max-width: ${breakpoints.SM}) {
      flex-flow: column nowrap;
      padding: 0;
      gap: 0;
    }

    justify-content: center;
    align-items: center;

    .icon {
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .copy {
      padding: 1rem;
    }
  }
`;
