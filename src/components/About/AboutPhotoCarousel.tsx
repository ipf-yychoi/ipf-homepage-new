import React from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";

import img_history from "../../images/About/img_history.png";

const Photo = styled.div`
  width: 336px;
  height: 168px;

  grid-row: 1;

  background-image: url(${img_history});
  background-repeat: no-repeat;
`;

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  margin: 64px 0;
`;

const CarouselItems = styled.ul`
  display: flex;
  height: 100%;
  gap: 16px;
`;

const PhotoItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-352px * 8));
    }
  }

  width: 352px;
  animation: translateinfinite 25s linear infinite;
`;

function GetAllImages() {
  let photos = [];
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (j == 2 && i == 2) {
          break;
        }
        photos.push(
          <PhotoItem>
            <Photo
              key={i * 3 + j + k * 9}
              style={{
                backgroundPosition: `${i * -336}px ${j * -168}px`,
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
