import React, { useState } from "react";
import styled from "styled-components";
import { Translation } from "gatsby-plugin-react-i18next";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";

import Typography from "../../assets/Typography";
import colors from "../../layouts/colors";

import ic_close from "../../assets/images/ic_close.png";

const WelfareData = {
  profitSharing: {
    title: <Translation>{(t) => t("HPG-56")}</Translation>,
    description:
      "회사의 이익은 직원들 없이는 발생하지 않습니다. 그에 대한 보답으로 순이익의 일부를 전부가 공유하는 문화를 가지고 있습니다.",
  },
  youthBenefits: {
    title: <Translation>{(t) => t("HPG-57")}</Translation>,
    description: "",
  },
  vacation: {
    title: <Translation>{(t) => t("HPG-58")}</Translation>,
    description:
      "휴식은 훌륭한 재충전의 기회입니다. 우리는 휴식의 중요성을 알기에 근로자 휴가지원사업에 참여하여 편의를 제공하고 있습니다.",
  },
  present: {
    title: <Translation>{(t) => t("HPG-59")}</Translation>,
    description: "",
  },
  certificate: {
    title: <Translation>{(t) => t("HPG-60")}</Translation>,
    description: "",
  },
  rent: {
    title: <Translation>{(t) => t("HPG-61")}</Translation>,
    description: "",
  },
  insurance: {
    title: <Translation>{(t) => t("HPG-62")}</Translation>,
    description: "",
  },
  macbook: {
    title: <Translation>{(t) => t("HPG-63")}</Translation>,
    description: "",
  },
  international: {
    title: <Translation>{(t) => t("HPG-64")}</Translation>,
    description: "",
  },
  snackBar: {
    title: <Translation>{(t) => t("HPG-65")}</Translation>,
    description: "",
  },
  motionDesk: {
    title: <Translation>{(t) => t("HPG-66")}</Translation>,
    description: "",
  },
};

type BenefitItemProps = {
  itemKey: string;
  title: string;
  description: string;
  children: any;
};

type ModalProps = {
  imgSource: any;
};

const Button = styled.button`
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

function BenefitItem({
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
      <Button onClick={handleOnClick}>{children}</Button>
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

const ContainerStyled = styled(Container)`
  flex-direction: column;
  background-color: ${colors.gray1};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;

  margin-top: 64px;
  gap: 16px;
`;

export default function BenefitSection() {
  return (
    <ContainerStyled>
      <SubTitle>복리후생</SubTitle>
      <Wrapper>
        {Object.keys(WelfareData).map(function (key: string, index) {
          return (
            <BenefitItem
              key={key}
              itemKey={key}
              title={(WelfareData as any)[key].title}
              description={(WelfareData as any)[key].description}
            >
              {(WelfareData as any)[key].title}
            </BenefitItem>
          );
        })}
      </Wrapper>
    </ContainerStyled>
  );
}
