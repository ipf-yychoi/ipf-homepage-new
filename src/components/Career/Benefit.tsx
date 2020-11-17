import React, { useState } from "react";
import styled from "styled-components";

import Typography from "../../Typography";
import colors from "../../layouts/colors";

import profitSharing from "../../images/Career/profitSharing.png";
import vacation from "../../images/Career/vacation.png";
import motionDesk from "../../images/Career/motionDesk.png";
import close from "../../images/close.png";

import Container from "../Container";

const WelfareData = {
  profitSharing: {
    title: "💰 이익 분배(Profit Sharing) 성과급",
    description:
      "회사의 이익은 직원들 없이는 발생하지 않습니다. 그에 대한 보답으로 순이익의 일부를 전부가 공유하는 문화를 가지고 있습니다.",
  },
  youthBenefits: {
    title: "청년/청년재직자 내일채움공제",
    description: "",
  },
  vacation: {
    title: "근로자 휴가지원사업",
    description:
      "휴식은 훌륭한 재충전의 기회입니다. 우리는 휴식의 중요성을 알기에 근로자 휴가지원사업에 참여하여 편의를 제공하고 있습니다.",
  },
  present: {
    title: "🎁 생일 및 명절 선물, 경조사비, 자녀수당",
    description: "",
  },
  certificate: {
    title: "역량개발비, 국제 공인자격 취득 비용 지원",
    description: "",
  },
  rent: {
    title: "🏦 월세 임대차보증금 무이자 대여",
    description: "",
  },
  insurance: {
    title: "🏥 직원 단체 상해보험 가입",
    description: "",
  },
  macbook: {
    title: "💻 MacBook 지급",
    description: "",
  },
  international: {
    title: "✈️ 다양한 팀 빌딩 프로그램, 국내외 워크숍 운영",
    description: "",
  },
  snackBar: {
    title: "☕️ 전용 스낵바 운영 (커피, 맥주, 우유, 군것질)",
    description: "",
  },
  motionDesk: {
    title: "🛋 모션데스크 지원",
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

const BenefitContainer = styled.div`
  flex-direction: column;
  margin-right: 250px;
  margin-top: 120px;

  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;

  width: 850px;
  margin-bottom: 120px;
  gap: 16px;
`;

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

  ${Typography("body", 0.875, 700)};
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

const Title = styled.h3`
  ${Typography("heading2")};
  text-align: left;
  margin-bottom: 16px;
`;

const Description = styled.h3`
  ${Typography("body", 0.875)};
  text-align: left;
  white-space: pre-wrap;
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
      imgSource = profitSharing;
      break;
    case "vacation":
      imgSource = vacation;
      break;
    case "motionDesk":
      imgSource = motionDesk;
      break;
    default:
      imgSource = profitSharing;
      break;
  }

  return (
    <>
      <Button onClick={handleOnClick}>{children}</Button>
      {show && (
        <>
          <ModalBackground onClick={handleOnClick} />
          <Modal imgSource={imgSource}>
            <Exit src={close} onClick={handleOnClick} />
            <InnerModal>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </InnerModal>
          </Modal>
        </>
      )}
    </>
  );
}

function Benefit() {
  return (
    <Container
      style={{
        backgroundColor: colors.gray1,
      }}
    >
      <BenefitContainer>
        복리후생
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
      </BenefitContainer>
    </Container>
  );
}

export default Benefit;
