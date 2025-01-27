import * as React from "react";
import { SemanticElement } from "./Content.styles";

export type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps): React.ReactElement => {
  return <SemanticElement>{children}</SemanticElement>;
};
