import React from "react";
import styled, { css } from "styled-components";

import { responsive, high_resolution } from "../layouts/responsive";

import img_services from "../assets/images/Product/img_services.png";
import img_services_2x from "../assets/images/Product/img_services@2x.png";
import img_services_hover from "../assets/images/Product/img_services_hover.png";
import img_services_hover_2x from "../assets/images/Product/img_services_hover@2x.png";
import img_services_pressed from "../assets/images/Product/img_services_pressed.png";
import img_services_pressed_2x from "../assets/images/Product/img_services_pressed@2x.png";

type serviceObject = {
  key: string;
  link: string;
};

type Props = {
  serviceList: Array<serviceObject>;
};

type HyperlinkAttribute = {
  key: string;
  href: string;
  target: string;
};

const PlatForms = styled.div`
  display: flex;
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
  margin-right: 0.4rem;
  transition: all 0.1s linear;

  cursor: pointer;

  :hover {
    background-image: url(${img_services_hover});
    @media ${high_resolution} {
      background-image: url(${img_services_hover_2x});
    }
  }

  :active {
    background-image: url(${img_services_pressed});
    @media ${high_resolution} {
      background-image: url(${img_services_pressed_2x});
    }
  }
`;

const Web = styled.a`
  ${commonStyle};
  background-position: 0 0;
`;

const Apple = styled.a`
  ${commonStyle};
  background-position: -6rem 0;
`;

const Android = styled.a`
  ${commonStyle};
  background-position: -12rem 0;
`;

const YouTube = styled.a`
  ${commonStyle};
  background-position: -18rem 0;
`;

export default function Services({ serviceList }: Props) {
  return (
    <PlatForms>
      {serviceList.map(({ key, link }: serviceObject, index) => {
        const attribute: HyperlinkAttribute = {
          key: key + "-" + index,
          href: link,
          target: "_blank",
        };
        switch (key) {
          case "Web":
            return <Web {...attribute} />;
          case "Apple":
            return <Apple {...attribute} />;
          case "Android":
            return <Android {...attribute} />;
          case "YouTube":
            return <YouTube {...attribute} />;
          default:
            return null;
        }
      })}
    </PlatForms>
  );
}
