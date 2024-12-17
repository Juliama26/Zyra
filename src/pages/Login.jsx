import React from "react";
import RouteLanding from "../components/templates/RouteLanding";
import { SignIn, SignUp } from "../components/organisms/LoginSignUp";

export const Login = () => {
  return (
    <RouteLanding>
      <SignIn></SignIn>
    </RouteLanding>
  );
};
export const Register = () => {
  return (
    <RouteLanding>
      <SignUp></SignUp>
    </RouteLanding>
  );
};
