import React from "react";
import styled, { css } from "styled-components";

import img_services from "../assets/images/Product/img_services.png";
import img_services_hover from "../assets/images/Product/img_services_hover.png";

type Props = {
  all?: boolean;
};

const PlatForms = styled.div`
  display: flex;
  gap: 4px;
`;

const commonStyle = css`
  background-image: url(${img_services});
  background-repeat: no-repeat;

  width: 56px;
  height: 58px;

  margin-top: 40px;
  transition: all 0.1s linear;

  :hover {
    background-image: url(${img_services_hover});
    cursor: pointer;
  }
`;

const Web = styled.span`
  ${commonStyle};
  background-position: 0 0;
`;

const Apple = styled.span`
  ${commonStyle};
  background-position: -60px 0;
`;

const Android = styled.span`
  ${commonStyle};
  background-position: -120px 0;
`;

const YouTube = styled.span`
  ${commonStyle};
  background-position: -180px 0;
`;

export default function Services({ all }: Props) {
  return (
    <PlatForms>
      <Web />
      <Apple />
      <Android />
      {all && <YouTube />}
    </PlatForms>
  );
}
