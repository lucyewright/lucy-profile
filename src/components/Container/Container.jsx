import React from "react";
import { ContainerWrapper } from "./Container.style";

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
