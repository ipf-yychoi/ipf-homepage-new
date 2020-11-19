import React from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";

import img_home_career from "../../images/Home/img_home_career.png";

const Photo = styled.div`
  width: 336px;
  height: 229px;

  grid-row: 1;

  background-image: url(${img_home_career});
  background-repeat: no-repeat;
`;

const Carousel = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  padding-left: calc((100% - 1040px) / 2);
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: ${colors.black};
`;

const CarouselItems = styled.ul`
  display: grid;
  width: fit-content;
  list-style: none;
  grid-gap: 16px;
`;

function GetAllImages() {
  let photos = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      photos.push(
        <li style={{ gridRow: 1 }}>
          <Photo
            style={{
              backgroundPosition: `${i * -336}px ${j * -229}px`,
            }}
          />
        </li>
      );
    }
  }

  return photos;
}

export default function PhotoCarousel() {
  return (
    <Carousel>
      <CarouselItems> {GetAllImages()}</CarouselItems>
    </Carousel>
  );
}
