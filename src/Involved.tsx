import * as React from "react";

import { Content } from "./Content";
import { InvolvedContainer, InvolvedFormWrapper } from "./Involved.styles";

export type InvolvedProps = {};

export const Involved = ({}: InvolvedProps): React.ReactElement => {
  return (
    <Content>
      <InvolvedContainer>
        <div className="heading">
          <h2>GET INVOLVED</h2>
        </div>
        <InvolvedFormWrapper>
          <div className="form-heading">
            <h3>Ready to change our community for the better?</h3>
            <span>Lend your support today!</span>
          </div>
          <form>
            <div className="inputs">
              <div className="label-input-wrapper">
                <label htmlFor="name" className="required">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="label-input-wrapper">
                <label htmlFor="email" className="required">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </InvolvedFormWrapper>
      </InvolvedContainer>
    </Content>
  );
};
