import React, { useState } from "react";
import styled from "styled-components";

import Typography from "../assets/Typography";
import colors from "../layouts/colors";

import Description from "../components/Description";

import ic_close from "../assets/images/ic_close.png";

type BenefitItemProps = {
  itemKey: string;
  title: string;
  description: string;
  children: any;
};

type ModalProps = {
  imgSource: any;
};

const ModalBackground = styled.div`
  position: fixed;
  display: block;
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
  width: 480px;
  height: 360px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 32px 48px rgba(0, 0, 0, 0.16);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 200;

  background-image: ${(props: ModalProps) => `url(${props.imgSource})`};
  background-position: 0 189px;
  background-repeat: no-repeat;
`;

const InnerModal = styled.div`
  margin: 64px 40px 0 40px;
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

  const handleOnClick = () => {
    setShow(!show);
  };

  let imgSource;

  switch (itemKey) {
    case "profitSharing":
      imgSource = "";
      break;
    case "vacation":
      imgSource = "";
      break;
    case "motionDesk":
      imgSource = "";
      break;
    default:
      imgSource = "";
      break;
  }

  return (
    <>
      <BenefitItemButton onClick={handleOnClick}>{children}</BenefitItemButton>
      {show && (
        <>
          <ModalBackground onClick={handleOnClick} />
          <Modal imgSource={imgSource}>
            <Exit src={ic_close} onClick={handleOnClick} />
            <InnerModal>
              <ModalHeader>{title}</ModalHeader>
              <Description>{description}</Description>
            </InnerModal>
          </Modal>
        </>
      )}
    </>
  );
}
