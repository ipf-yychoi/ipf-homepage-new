import React, { useRef, useState } from "react";
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
  padding-top: 80px;
  padding-bottom: 120px;
  /* width: 100%; */
  height: 413px;

  padding-left: calc((100% - 1040px) / 2);
  overflow-y: hidden;
  /* position: relative; */
  overflow-x: hidden;
`;

const CarouselItems = styled.ul`
  display: grid;
  list-style: none;
  grid-gap: 16px;

  position: relative;

  transition: left 1s;
`;

const BackButton = styled.button`
  height: 229px;
  width: 168px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 1;

  position: absolute;
`;

const NextButton = styled.button`
  height: 229px;
  width: 168px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 1;

  position: absolute;
  right: 0;
  top: 0;
`;

function GetAllImages() {
  let photos = [];
  for (let i = 0; i < 5; i++) {
    photos.push(
      <li style={{ gridRow: 1 }}>
        <div style={{ display: "grid", gridGap: "16px", overflowX: "hidden" }}>
          <Photo
            style={{
              backgroundPosition: `${i * -336}px ${0 * -229}px`,
            }}
          />
          <Photo
            style={{
              backgroundPosition: `${i * -336}px ${1 * -229}px`,
            }}
          />
          å
          <Photo
            style={{
              backgroundPosition: `${i * -336}px ${2 * -229}px`,
            }}
          />
        </div>
      </li>
    );
  }

  return photos;
}

export default function PhotoCarousel() {
  const carousel = useRef<HTMLUListElement>(null);
  const temp = useRef<HTMLDivElement>(null);
  const [currentXPosition, setCurrentXPosition] = useState<number>(0);

  const handleBackClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (carousel.current && temp.current) {
      if (currentXPosition === 0) {
        return;
      }

      carousel.current.style.left =
        currentXPosition +
        -window.innerWidth +
        (window.innerWidth + 1055) +
        "px";
      setCurrentXPosition(
        currentXPosition + -window.innerWidth + (window.innerWidth + 1055)
      );
    }
  };

  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (carousel.current && temp.current) {
      if (currentXPosition !== 0) {
        const target = event.target as HTMLButtonElement;
        target.style.marginRight = 40 + "px";
      }
      carousel.current.style.left =
        currentXPosition +
        -window.innerWidth +
        (window.innerWidth - 1055) +
        "px";
      setCurrentXPosition(
        currentXPosition + -window.innerWidth + (window.innerWidth - 1055)
      );
    }
  };

  return (
    <div style={{ backgroundColor: colors.black }}>
      <Carousel ref={temp}>
        <div style={{ position: "relative" }}>
          <BackButton onClick={handleBackClick} />
          <CarouselItems ref={carousel}>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${0 * -336}px ${0 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${0 * -336}px ${1 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${0 * -336}px ${2 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${0 * -336}px ${3 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${0 * -336}px ${4 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${1 * -336}px ${0 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${1 * -336}px ${1 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${1 * -336}px ${2 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${1 * -336}px ${3 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${1 * -336}px ${4 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${2 * -336}px ${0 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${2 * -336}px ${1 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${2 * -336}px ${2 * -229}px`,
                  }}
                />
              </div>
            </li>
            <li style={{ gridRow: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "16px",
                  overflowX: "hidden",
                }}
              >
                <Photo
                  style={{
                    backgroundPosition: `${2 * -336}px ${3 * -229}px`,
                  }}
                />
              </div>
            </li>

            {/* <li style={{ gridRow: 1 }}>
            <div
              style={{ display: "grid", gridGap: "16px", overflowX: "hidden" }}
            >
              <Photo
                style={{
                  backgroundPosition: `${2 * -336}px ${4 * -229}px`,
                }}
              />
            </div>
            <NextButton />
          </li> */}
          </CarouselItems>
          <NextButton onClick={handleNextClick} />
        </div>
      </Carousel>
    </div>
  );
}
