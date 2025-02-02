import * as React from "react";
import { useForm } from "react-hook-form";

import { Content } from "./Content";
import { InvolvedContainer, InvolvedFormWrapper } from "./Involved.styles";

interface FormData {
  name: string;
  email: string;
}

export type InvolvedProps = {};

export const Involved = ({}: InvolvedProps): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {
    const form = document.querySelector<HTMLFormElement>("form");

    if (!form) return;

    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => alert("Thank You for your submission!"))
      .catch((error) => alert(error))
      .finally(() => form.reset());
  };

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
          <form onSubmit={handleSubmit(onSubmit)} data-netlify="true">
            <div className="inputs">
              <div className="label-input-wrapper">
                <label htmlFor="name" className="required">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="Please enter your name"
                />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </div>
              <div className="label-input-wrapper">
                <label htmlFor="email" className="required">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </InvolvedFormWrapper>
      </InvolvedContainer>
    </Content>
  );
};
