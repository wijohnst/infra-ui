import * as React from "react";

import { Content } from "./Content";
import {
  InfrastructureContainer,
  PipelineContent,
  Pipelines,
  PipelineContentMember,
  PipelineExplainer,
} from "./Infrastructure.styles";

import { GradDivider } from "./GlobalComponent.styles";

import { RevealPipe, PipeName } from "./RevealPipe";

import WaterPipeIcon from "./assets/water_pipe_icon.svg?react";
import SewerPipeIcon from "./assets/sewer_pipe_icon.svg?react";
import FiberPipeIcon from "./assets/fiber_pipe_icon.svg?react";
import WastePipeIcon from "./assets/waste_pipe_icon.svg?react";

const colorCodesMap = {
  water: "#15cbf6",
  sewer: "#23f354",
  fiber: "#ff8e47",
  waste: "#F615C1",
};

export type InfrastructureProps = {};

export const Infrastructure = ({}: InfrastructureProps): React.ReactElement => {
  const [activePipe, setActivePipe] = React.useState<PipeName | null>(null);
  const [hasOpened, setHasOpened] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (activePipe !== null) {
      setHasOpened(true);
    }
  }, [activePipe]);

  return (
    <Content>
      <InfrastructureContainer>
        <div className="heading">
          <h2>PIPELINES TO PROSPERITY</h2>
        </div>
        <div className="copy">
          <p>
            A century of growth has left downtown's key services in need of some
            serious TLC. Click each of the pipelines below to learn how it is
            crucial for the next 100 years of vitality in our city.
          </p>
        </div>
        <div className="pipelines-container">
          <Pipelines $shouldPulse={activePipe === null}>
            <div className="pulse">
              <RevealPipe
                pipeName="sewer"
                pipeColor={colorCodesMap["sewer"]}
                isActive={activePipe === "sewer"}
                handleClick={setActivePipe}
              />
            </div>
            <RevealPipe
              pipeName="water"
              pipeColor={colorCodesMap["water"]}
              isActive={activePipe === "water"}
              handleClick={setActivePipe}
            />
            <RevealPipe
              pipeName="fiber"
              pipeColor={colorCodesMap["fiber"]}
              isActive={activePipe === "fiber"}
              handleClick={setActivePipe}
            />
            <RevealPipe
              pipeName="waste"
              pipeColor={colorCodesMap["waste"]}
              isActive={activePipe === "waste"}
              handleClick={setActivePipe}
            />
          </Pipelines>
          <PipelineContent $hasOpened={hasOpened}>
            {activePipe === "water" && <WaterContent />}
            {activePipe === "sewer" && <SewerContent />}
            {activePipe === "fiber" && <FiberContent />}
            {activePipe === "waste" && <WasteContent />}
          </PipelineContent>
          <PipelineExplainer>
            {activePipe === null && <span>Click a pipe to learn more.</span>}
          </PipelineExplainer>
          <GradDivider>
            <hr />
          </GradDivider>
        </div>
      </InfrastructureContainer>
    </Content>
  );
};

const WaterContent = (): React.ReactElement => {
  return (
    <PipelineContentMember $backgroundColor={colorCodesMap["water"]}>
      <h3>WATER</h3>
      <div className="copy-icon-wrapper">
        <div className="icon">
          <WaterPipeIcon />
        </div>
        <div className="copy">
          <p>
            The existing water main, built decades ago, is beyond repair. Years
            of patching have left it unreliable. This outdated system limits
            downtown property owners from refurbishing their buildings, as they
            cannot access the necessary water pressure to meet modern fire
            suppression standards. One reason for empty storefronts downtown?
            This is it.
          </p>
        </div>
      </div>
    </PipelineContentMember>
  );
};

const SewerContent = (): React.ReactElement => {
  return (
    <PipelineContentMember $backgroundColor={colorCodesMap["sewer"]}>
      <h3>SEWER</h3>
      <div className="copy-icon-wrapper">
        <div className="icon">
          <SewerPipeIcon />
        </div>
        <div className="copy">
          <p>
            Did you know that two-thirds of Lewiston’s sewage flows through
            downtown? Built 90 years ago for a population half our size, the
            sewer system is at 70% capacity and increasingly prone to cracks and
            leaks. Failure of this system could result in sewage backups across
            Lewiston, including in the Orchards. Waiting for a catastrophic
            failure would mean higher repair costs, legal issues, and
            disruption.
          </p>
          <p>
            The smart choice is to replace the sewer line now while federal
            funding is already paying to dig up the streets. Acting now saves
            money and ensures a functional sewer system for years to come.
          </p>
        </div>
      </div>
    </PipelineContentMember>
  );
};

const FiberContent = (): React.ReactElement => {
  return (
    <PipelineContentMember $backgroundColor={colorCodesMap["fiber"]}>
      <h3>FIBER OPTIC INTERNET</h3>
      <div className="copy-icon-wrapper">
        <div className="icon">
          <FiberPipeIcon />
        </div>
        <div className="copy">
          <p>
            The Port of Lewiston has been working to bring fiber optic internet
            to the city, but the cost of digging is prohibitive. With the
            streets already being opened for water, sewer, and stormwater
            improvements, it’s the perfect time to install fiber optic cables.
            This investment will deliver high-speed internet to residents and
            businesses while saving significant costs.
          </p>
        </div>
      </div>
    </PipelineContentMember>
  );
};

const WasteContent = (): React.ReactElement => {
  return (
    <PipelineContentMember $backgroundColor={colorCodesMap["waste"]}>
      <h3>STORMWATER</h3>
      <div className="copy-icon-wrapper">
        <div className="icon">
          <WastePipeIcon />
        </div>
        <div className="copy">
          <p>
            Just like the sewer line and water main, the stormwater drains are
            also at the end of their life. The patchwork of pipes, including
            drains that do not meet modern diameter requirements, cannot handle
            the flow during heavy rains. When the runoff goes downhill to the
            river, Main Street and the surrounding areas flood. Business owners
            and other organizations need these improvements to keep functioning
            while serving their customers, patients, and clients.
          </p>
        </div>
      </div>
    </PipelineContentMember>
  );
};
