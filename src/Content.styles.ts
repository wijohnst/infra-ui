import styled from "styled-components";

export const SemanticElement = styled.section`
  background-color: var(--color-neutral);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const PipeFrameRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pipe-top {
    border-top: solid 5px black;
    width: 100%;
    position: relative;
    top: -20%;
  }

  .pipe-bottom {
    width: 100%;
    border-bottom: solid 5px black;
    position: relative;
    bottom: -20%;
  }

  .pipe-content {
    width: 100%;
    height: 100%;
    border-left: solid 5px black;
    border-right: solid 5px black;
    margin-left: 10px;
    margin-right: 10px;
    min-height: 400px;
  }
`;

export const PipeFrame = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;

  .corner {
    display: flex;
    height: 60px;
  }

  .top-left > svg {
    transform: rotate(180deg);
  }

  .top-right > svg {
    transform: rotate(270deg);
  }

  .bottom-left > svg {
    transform: rotate(90deg);
  }
`;
