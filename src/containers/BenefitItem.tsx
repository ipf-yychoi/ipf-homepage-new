import React, { useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

import Typography from "../assets/Typography";
import colors from "../layouts/colors";

import { high_resolution } from "../layouts/responsive";

import Description from "../components/Description";

import ic_close from "../assets/images/ic_close.png";

import img_welfare_1 from "../assets/images/Career/img_welfare_1.jpg";
import img_welfare_1_2x from "../assets/images/Career/img_welfare_1@2x.jpg";
import img_welfare_2 from "../assets/images/Career/img_welfare_2.jpg";
import img_welfare_2_2x from "../assets/images/Career/img_welfare_2@2x.jpg";
import img_welfare_3 from "../assets/images/Career/img_welfare_3.jpg";
import img_welfare_3_2x from "../assets/images/Career/img_welfare_3@2x.jpg";
import img_welfare_4 from "../assets/images/Career/img_welfare_4.jpg";
import img_welfare_4_2x from "../assets/images/Career/img_welfare_4@2x.jpg";
import img_welfare_5 from "../assets/images/Career/img_welfare_5.jpg";
import img_welfare_5_2x from "../assets/images/Career/img_welfare_5@2x.jpg";
import img_welfare_6 from "../assets/images/Career/img_welfare_6.jpg";
import img_welfare_6_2x from "../assets/images/Career/img_welfare_6@2x.jpg";
import img_welfare_7 from "../assets/images/Career/img_welfare_7.jpg";
import img_welfare_7_2x from "../assets/images/Career/img_welfare_7@2x.jpg";
import img_welfare_8 from "../assets/images/Career/img_welfare_8.jpg";
import img_welfare_8_2x from "../assets/images/Career/img_welfare_8@2x.jpg";
import img_welfare_9 from "../assets/images/Career/img_welfare_9.jpg";
import img_welfare_9_2x from "../assets/images/Career/img_welfare_9@2x.jpg";
import img_welfare_10 from "../assets/images/Career/img_welfare_10.jpg";
import img_welfare_10_2x from "../assets/images/Career/img_welfare_10@2x.jpg";
import img_welfare_11 from "../assets/images/Career/img_welfare_11.jpg";
import img_welfare_11_2x from "../assets/images/Career/img_welfare_11@2x.jpg";

type BenefitItemProps = {
  itemKey: string;
  title: string;
  description: string;
  children: any;
};

type ModalProps = {
  imgSource: any;
  imgSource_2x: any;
  show: boolean;
};

type ModalBackgroundProps = {
  show: boolean;
};

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeInAnimation = css`
  animation: ${modalFadeIn} 5s ease;
`;

const ModalBackground = styled.div`
  position: fixed;
  display: ${(props: ModalBackgroundProps) => (props.show ? "block" : "none")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 100;
`;

const Modal = styled.div`
  position: fixed;
  display: ${(props: ModalProps) => (props.show ? "block" : "none")};
  opacity: ${(props: ModalProps) => (props.show ? 1 : 0)};
  transition: opacity 5s ease;
  width: 480px;
  height: 360px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 32px 48px rgba(0, 0, 0, 0.16);

  padding: 64px 40px 0 40px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 200;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 480px;
  background-image: ${(props: ModalProps) => `url(${props.imgSource})`};
  @media ${high_resolution} {
    background-image: ${(props: ModalProps) => `url(${props.imgSource_2x})`};
  }
`;

const InnerModal = styled.div`
  height: 100%;
`;

const Exit = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`;

const ModalHeader = styled.h3`
  ${Typography("heading2")};
  text-align: left;
  margin-bottom: 16px;
`;

const BenefitItemButton = styled.button`
  width: fit-content;
  height: 69px;

  border: none;
  border-radius: 16px;
  background-color: white;

  padding: 24px;

  display: flex;
  justify-content: center;
  white-space: nowrap;

  cursor: pointer;

  ${Typography("body", 1.4, 700)};

  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }

  :focus {
    background-color: ${colors.gray1};
  }
`;

export default function BenefitItem({
  itemKey,
  title,
  description,
  children,
}: BenefitItemProps) {
  const [show, setShow] = useState(false);
  const modal = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    console.log(show);
    if (show) {
      if (modal.current) {
        modal.current.className = "in";
      }
    } else {
      if (modal.current) {
        modal.current.className = "out";
      }
    }

    setShow(!show);
  };

  let imgSource;
  let imgSource_2x;

  switch (itemKey) {
    case "profitSharing":
      imgSource = img_welfare_1;
      imgSource_2x = img_welfare_1_2x;
      break;
    case "youthBenefits":
      imgSource = img_welfare_2;
      imgSource_2x = img_welfare_2_2x;
      break;
    case "vacation":
      imgSource = img_welfare_3;
      imgSource_2x = img_welfare_3_2x;
      break;
    case "present":
      imgSource = img_welfare_4;
      imgSource_2x = img_welfare_4_2x;
      break;
    case "certificate":
      imgSource = img_welfare_5;
      imgSource_2x = img_welfare_5_2x;
      break;
    case "rent":
      imgSource = img_welfare_6;
      imgSource_2x = img_welfare_6_2x;
      break;
    case "insurance":
      imgSource = img_welfare_7;
      imgSource_2x = img_welfare_7_2x;
      break;
    case "macbook":
      imgSource = img_welfare_8;
      imgSource_2x = img_welfare_8_2x;
      break;
    case "team":
      imgSource = img_welfare_9;
      imgSource_2x = img_welfare_9_2x;
      break;
    case "snackBar":
      imgSource = img_welfare_10;
      imgSource_2x = img_welfare_10_2x;
      break;
    case "motionDesk":
      imgSource = img_welfare_11;
      imgSource_2x = img_welfare_11_2x;
      break;
  }

  return (
    <>
      <BenefitItemButton onClick={handleOnClick}>{children}</BenefitItemButton>
      <>
        <ModalBackground onClick={handleOnClick} ref={modal} show={show} />
        <Modal imgSource={imgSource} imgSource_2x={imgSource_2x} show={show}>
          <Exit src={ic_close} onClick={handleOnClick} />
          <InnerModal>
            <ModalHeader>{title}</ModalHeader>
            <Description>{description}</Description>
          </InnerModal>
        </Modal>
      </>
    </>
  );
}
