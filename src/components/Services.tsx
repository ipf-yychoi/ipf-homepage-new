import React from "react";
import styled, { css } from "styled-components";

import { responsive, high_resolution } from "../layouts/responsive";

import img_services from "../assets/images/Product/img_services.png";
import img_services_2x from "../assets/images/Product/img_services@2x.png";
import img_services_hover from "../assets/images/Product/img_services_hover.png";
import img_services_hover_2x from "../assets/images/Product/img_services_hover@2x.png";

type Props = {
  all?: boolean;
};

const PlatForms = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const commonStyle = css`
  background-image: url(${img_services});
  @media ${high_resolution} {
    background-image: url(${img_services_2x});
  }
  background-repeat: no-repeat;
  background-size: cover;

  width: 5.6rem;
  height: 5.8rem;

  margin-top: 4rem;
  transition: all 0.1s linear;

  :hover {
    background-image: url(${img_services_hover});
    @media ${high_resolution} {
      background-image: url(${img_services_hover_2x});
    }
    cursor: pointer;
  }
`;

const Web = styled.span`
  ${commonStyle};
  background-position: 0 0;
`;

const Apple = styled.span`
  ${commonStyle};
  background-position: -6rem 0;
`;

const Android = styled.span`
  ${commonStyle};
  background-position: -12rem 0;
`;

const YouTube = styled.span`
  ${commonStyle};
  background-position: -18rem 0;
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
