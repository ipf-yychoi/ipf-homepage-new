import React from "react";
import styled from "styled-components";

import { responsive } from "../layouts/responsive";
import colors from "../layouts/colors";

import img_home_career from "../assets/images/Home/img_home_career.png";
import img_home_career_2x from "../assets/images/Home/img_home_career@2x.png";

const Photo = styled.div`
  width: 33.6rem;
  height: 23rem;
  border-radius: 0.8rem;

  grid-row: 1;

  background-repeat: no-repeat;
  background-size: 101.3rem;

  background-image: url(${img_home_career});
  @media ${responsive.conditionForTablet} {
    background-image: url(${img_home_career_2x});
  }
`;

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  padding: 4rem 0 6.4rem 0;
  background-color: ${colors.black};

  @media ${responsive.conditionForDesktop} {
    padding: 6.4rem 0 12rem 0;
  }
`;

const CarouselItems = styled.ul`
  display: flex;
  height: 100%;
  gap: 1.6rem;
`;

const PhotoItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-35.2rem * 14));
    }
  }

  width: 35.2rem;
  animation: translateinfinite 44.8s linear infinite;
`;

function GetAllImages() {
  let photos = [];
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        if (j == 4 && i == 2) {
          break;
        }
        photos.push(
          <PhotoItem key={i * 3 + j + k * 9}>
            <Photo
              style={{
                backgroundPosition: `${i * -33.8}rem ${j * -23}rem`,
              }}
            />
          </PhotoItem>
        );
      }
    }
  }

  return photos;
}

export default function PhotoCarousel() {
  return (
    <Carousel>
      <CarouselItems>{GetAllImages()}</CarouselItems>
    </Carousel>
  );
}
