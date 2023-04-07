import { styled } from "./core/styled";
import { space } from "./system";
import React from "react";

const Space = styled("div")`
  ${space}
`;

const Component = () => <Space p="2px" />;

console.log(Component);
