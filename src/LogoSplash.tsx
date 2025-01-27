import * as React from "react";
import { LogoSplashWrapper } from "./LogoSplash.styles";
import SplashImage from "./assets/splash_image.webp";

export type LogoSplashProps = {};

export const LogoSplash = ({}: LogoSplashProps): React.ReactElement => {
  return (
    <LogoSplashWrapper>
      <img src={SplashImage} alt="Infrastructure improvements street scene" />
      <div>
        <h1>Speak up for Main Street Improvements! 💬📝🗳️</h1>
      </div>
    </LogoSplashWrapper>
  );
};
