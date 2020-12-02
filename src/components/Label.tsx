import styled from "styled-components";

import Typography from "../assets/Typography";

import colors from "../layouts/colors";

const Label = styled.h3`
  ${Typography("heading2")};
  color: ${colors.primary};
  margin: 0 0 8px 0;
`;

export default Label;
