import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
`;

const CarouselItems = styled.ul`
  display: grid;
  list-style: none;
  grid-gap: 16px;

  position: relative;
  right: 0;
  left: 0;

  transition: left 1s;

  /* @keyframes cycle1 {
    0% {
      left: 336px;
      opacity: 0;
    }
    1% {
      left: 336px;
      opacity: 1;
    }
    99% {
      left: -1800px;
      opacity: 1;
    }
    100% {
      left: 336px;
      opacity: 0;
    }
  } */

  /* animation: 10s linear 0s infinite running cycle1; */

  @keyframes translatestf {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-500%);
    }
  }

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-180px * 12));
    }
  }
  animation: translatestf 30s linear infinite;
`;

function GetAllImages() {
  let photos = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      photos.push(
        <li
          id={"row=" + i + "column=" + j}
          key={"row=" + i + "column=" + j}
          style={{
            display: "grid",
            gridRow: 1,
            gridGap: "16px",
            transition: "opacity 1s",
          }}
        >
          <Photo
            style={{
              backgroundPosition: `${i * -336}px ${j * -168}px`,
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
  //   const [allPhotos, setAllPhotos] = useState(GetAllImages());

  const [queue, setQueue] = useState(GetAllImages());
  //   const [row, setRow] = useState<number>(0);
  //   const [column, setColumn] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log(currentXPosition);

      // let itemToRemove = queue[0];

      // if (itemToRemove instanceof HTMLLIElement) {
      //   itemToRemove.style.transition = "opacity 1s";
      //   itemToRemove.style.opacity = "0";
      // }

      if (carousel.current) {
        //   carousel.current.style.left = currentXPosition - 336 + "px";
        //   carousel.current.style.transition = "0.7s";
        // if (column < 2) {
        //   setColumn(column + 1);
        // } else if (row < 2) {
        //   setRow(row + 1);
        // } else {
        //   setColumn(0);
        //   setRow(0);
        // }
        // queue.push(queue.shift()!);
        // setQueue([...queue]);
        // console.log(queue);
        // // if (currentXPosition <= -1200) {
        //   setAllPhotos([...allPhotos, ...GetAllImages()]);
        // }
        // setCurrentXPosition(currentXPosition - 336);
      }
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [queue, currentXPosition]);

  return (
    <Carousel>
      <div style={{ position: "relative" }}>
        <CarouselItems ref={carousel}>{queue}</CarouselItems>
      </div>
    </Carousel>
  );
}
