import styled from "styled-components";

import { breakpoints } from "./style-vars";

export const InvolvedContainer = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding: calc(var(--layout-size-xxl) + var(--layout-size-lg)); // 3.6rem

  @media (max-width: ${breakpoints.SM}) {
    justify-content: center;
    padding: 0;

    h2 {
      width: 100%;
      text-align: center;
    }
  }

  .heading {
    display: flex;
    width: 100%;
  }
`;

export const InvolvedFormWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;

  .form-heading {
    @media (max-width: ${breakpoints.SM}) {
      text-align: center;
    }

    h3 {
      margin-bottom: var(--layout-size-md);
    }
  }

  form {
    padding: var(--layout-size-md);
    margin-top: var(--layout-size-xxl);

    button {
      border: solid thin black;
      padding: var(--layout-size-lg);
      border-radius: var(--layout-size-sm);
      background-color: transparent;

      cursor: pointer;
    }
  }

  .inputs {
    display: flex;
    flex-flow: column;
    margin-bottom: var(--layout-size-md);
  }

  .label-input-wrapper {
    display: flex;
    flex-flow: column;

    label {
      margin: 0 var(--layout-size-sm) var(--layout-size-md) 0;
    }

    .required::after {
      content: "*";
      color: red;
    }

    input {
      padding: var(--layout-size-sm);
      width: 75%;
      margin: 0 0 var(--layout-size-lg) 0;

      @media (max-width: ${breakpoints.SM}) {
        width: 100%;
      }
    }

    .error-message {
      margin: 0 0 var(--layout-size-lg) var(--layout-size-sm);
      font-style: italic;
      color: red;
    }
  }
`;
