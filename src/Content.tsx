import * as React from "react";
import { SemanticElement, PipeFrame, PipeFrameRow } from "./Content.styles";

import PipeFrameCorner from "./assets/pipe_frame_90.svg?react";

export type ContentProps = {
  children: React.ReactNode;
};

export type PipeFrameCornerProps = {
  pipeColor: string;
};

const PipeFrameCornerComponent: React.FC<PipeFrameCornerProps> = ({
  pipeColor,
}) => <PipeFrameCorner fill={pipeColor} />;

export const Content = ({ children }: ContentProps): React.ReactElement => {
  return (
    <SemanticElement>
      <PipeFrameRow>
        <PipeFrame>
          <div className="corner top-left">
            <PipeFrameCornerComponent pipeColor="lightblue" />
          </div>
        </PipeFrame>
        <div className="pipe-top"></div>
        <PipeFrame>
          <div className="corner top-right">
            <PipeFrameCornerComponent pipeColor="lightblue" />
          </div>
        </PipeFrame>
      </PipeFrameRow>
      <PipeFrameRow>
        <div className="pipe-content">{children}</div>
      </PipeFrameRow>
      <PipeFrameRow>
        <PipeFrame>
          <div className="corner bottom-left">
            <PipeFrameCornerComponent pipeColor="lightblue" />
          </div>
        </PipeFrame>
        <div className="pipe-bottom"></div>
        <PipeFrame>
          <div className="corner bottom-right">
            <PipeFrameCornerComponent pipeColor="lightblue" />
          </div>
        </PipeFrame>
      </PipeFrameRow>
      {/* {children} */}
    </SemanticElement>
  );
};
