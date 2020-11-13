import React, { useState } from "react";
import styled from "styled-components";

import profitSharing from "../../images/Career/profitSharing.png";
import vacation from "../../images/Career/vacation.png";
import motionDesk from "../../images/Career/motionDesk.png";

import Text from "../Text";

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

const Wrapper = styled.button`
  width: fit-content;
  height: 69px;

  border: none;
  border-radius: 16px;
  background-color: white;

  display: flex;
  justify-content: center;
  white-space: nowrap;

  cursor: pointer;
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

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 16px;
  z-index: 101;

  background-color: white;
  box-shadow: 0px 32px 48px rgba(0, 0, 0, 0.16);
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
    <Wrapper onClick={handleOnClick}>
      <Text
        theme="description"
        weight="bold"
        style={{
          margin: "24px",
        }}
      >
        {children}
      </Text>
      {show && (
        <>
          <ModalBackground />
          <Modal
            style={{
              backgroundImage: `url(${imgSource})`,
              backgroundPosition: "0 189px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                marginTop: "64px",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            >
              <Text
                tag="h3"
                type="header2"
                weight="bold"
                style={{
                  lineHeight: "27px",
                  textAlign: "left",
                  marginBottom: "16px",
                }}
              >
                {title}
              </Text>
              <Text
                tag="h3"
                theme="description"
                style={{ textAlign: "left", whiteSpace: "pre-wrap" }}
              >
                {description}
              </Text>
            </div>
          </Modal>
        </>
      )}
    </Wrapper>
  );
}

function Benefit() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "wrap",
        flexDirection: "row",
        width: "850px",
        marginBottom: "120px",
        gap: "16px",
      }}
    >
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
    </div>
  );
}

export default Benefit;
