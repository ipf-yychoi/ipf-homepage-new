import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { responsive, high_resolution } from "../layouts/responsive";

import colors from "../layouts/colors";

import img_home_career from "../assets/images/Home/img_home_career.png";
import img_home_career_2x from "../assets/images/Home/img_home_career@2x.png";

const Photo = styled.div`
  width: 30.4rem;
  height: 20.7rem;

  grid-row: 1;

  background-image: url(${img_home_career});
  @media ${high_resolution} {
    background-image: url(${img_home_career_2x});
    background-size: 91.02rem;
  }

  background-repeat: no-repeat;

  opacity: 0.5;
  transition: opacity 1s;

  ${css`
    @media ${responsive.conditionForDesktop} {
      width: 33.6rem;
      height: 22.9rem;

      @media ${high_resolution} {
        background-size: 100.66rem;
      }
    }
  `};
`;

const Carousel = styled.div`
  padding-top: 8rem;
  padding-bottom: 12rem;
  height: 41.3rem;

  padding-left: calc((100% - 32rem) / 2);
  overflow: hidden;

  @media ${responsive.conditionForDesktop} {
    padding-left: calc((100% - 104rem) / 2);
  }
`;

const CarouselItems = styled.ul`
  display: grid;
  list-style: none;
  grid-gap: 1.6rem;

  position: relative;
  right: 0;
  left: 0;

  transition: left 1s;
`;

const BackButton = styled.button`
  height: 22.9rem;
  width: 16.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  left: 0;

  position: absolute;
  -webkit-tap-highlight-color: transparent;
`;

const NextButton = styled.button`
  height: 22.9rem;
  width: 16.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  position: absolute;
  right: 0;
  top: 0;

  -webkit-tap-highlight-color: transparent;
`;

function GetAllImages(isMobile: boolean) {
  let photos = [];
  if (isMobile) {
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 3; k++) {
        photos.push(
          <li
            key={"photo=" + (i * 3 + k)}
            id={"photo=" + (i * 3 + k)}
            style={{ display: "grid", gridRow: 1, gridGap: "1.6rem" }}
          >
            <Photo
              style={{
                backgroundPosition: `${k * -30.4}rem ${i * -20.7}rem`,
                opacity: `${k === 0 && i === 0 && "1"}`,
              }}
            />
          </li>
        );
      }
    }
  } else {
    for (let i = 0; i < 5; i++) {
      photos.push(
        <li
          key={"row=" + i}
          id={"row=" + i}
          style={{ display: "grid", gridRow: 1, gridGap: "1.6rem" }}
        >
          <Photo
            style={{
              backgroundPosition: `${0 * -33.6}rem ${i * -22.9}rem`,
              opacity: `${i === 0 && "1"}`,
            }}
          />

          <Photo
            style={{
              backgroundPosition: `${1 * -33.6}rem ${i * -22.9}rem`,
              opacity: `${i === 0 && "1"}`,
            }}
          />

          <Photo
            style={{
              backgroundPosition: `${2 * -33.6}rem ${i * -22.9}rem`,
              opacity: `${i === 0 && "1"}`,
            }}
          />
        </li>
      );
    }
  }

  return photos;
}

export default function PhotoCarousel() {
  const carousel = useRef<HTMLUListElement>(null);
  const [currentXPosition, setCurrentXPosition] = useState<number>(0);
  const [rowPosition, setRowPosition] = useState<number>(0);

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [isMobile]);

  const handleBackClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (carousel.current) {
      if (currentXPosition === 0) {
        return;
      }

      if (isMobile) {
        carousel.current.style.left = currentXPosition + 32 + "rem";
        setCurrentXPosition(currentXPosition + 32);
        setRowPosition(rowPosition - 1);

        let pastPhoto = document.getElementById(
          "photo=" + rowPosition
        ) as HTMLLIElement;

        let newRowIndex = rowPosition - 1;

        let newPhoto = document.getElementById(
          "photo=" + newRowIndex
        ) as HTMLLIElement;

        const photoItem = pastPhoto.children[0] as HTMLDivElement;
        photoItem.style.opacity = "0.5";

        const newPhotoItem = newPhoto.children[0] as HTMLDivElement;
        newPhotoItem.style.opacity = "1";
      } else {
        carousel.current.style.left = currentXPosition + 105.5 + "rem";
        setCurrentXPosition(currentXPosition + 105.5);
        setRowPosition(rowPosition - 1);

        let pastPhotos = document.getElementById(
          "row=" + rowPosition
        ) as HTMLLIElement;

        let newRowIndex = rowPosition - 1;

        let newPhotos = document.getElementById(
          "row=" + newRowIndex
        ) as HTMLLIElement;

        for (let j = 0; j < 3; j++) {
          const photoItem = pastPhotos.children[j] as HTMLDivElement;
          photoItem.style.opacity = "0.5";

          const newPhotoItem = newPhotos.children[j] as HTMLDivElement;
          newPhotoItem.style.opacity = "1";
        }
      }
    }
  };

  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (carousel.current) {
      if (
        (isMobile && rowPosition === 13) ||
        (!isMobile && rowPosition === 4)
      ) {
        return;
      }

      if (isMobile) {
        carousel.current.style.left = currentXPosition + -32 + "rem";
        setCurrentXPosition(currentXPosition + -32);
        setRowPosition(rowPosition + 1);

        let newRowIndex = rowPosition + 1;

        let newPhoto = document.getElementById(
          "photo=" + newRowIndex
        ) as HTMLLIElement;

        const newPhotoItem = newPhoto.children[0] as HTMLDivElement;
        newPhotoItem.style.opacity = "1";
      } else {
        carousel.current.style.left = currentXPosition + -105.5 + "rem";
        setCurrentXPosition(currentXPosition + -105.5);
        setRowPosition(rowPosition + 1);

        let pastPhotos = document.getElementById(
          "row=" + rowPosition
        ) as HTMLLIElement;

        let newRowIndex = rowPosition + 1;

        let newPhotos = document.getElementById(
          "row=" + newRowIndex
        ) as HTMLLIElement;

        for (let j = 0; j < 3; j++) {
          const photoItem = pastPhotos.children[j] as HTMLDivElement;
          photoItem.style.opacity = "0.5";

          const newPhotoItem = newPhotos.children[j] as HTMLDivElement;
          newPhotoItem.style.opacity = "1";
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: colors.black }}>
      <Carousel>
        <BackButton onClick={handleBackClick} />
        <div style={{ position: "relative" }}>
          <CarouselItems ref={carousel}>{GetAllImages(isMobile)}</CarouselItems>
          <NextButton onClick={handleNextClick} />
        </div>
      </Carousel>
    </div>
  );
}
