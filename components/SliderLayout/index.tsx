import React, { useEffect, useState, useRef } from "react";
import styles from "./styles/SliderLayout.module.scss";

interface Props {
  showNavigationArrows?: boolean;

  showPaginationDots?: boolean;

  infinite?: boolean;

  children?: any;

  width?: number;

  heigth?: number;

  speed?: number;

  autoplay?: boolean;

  autoplaySpeed?: number;

  nextArrow?: JSX.Element;

  prevArrow?: JSX.Element;
}

export default function SliderLayout({
  children,

  infinite = true,

  showNavigationArrows = true,

  showPaginationDots = true,

  autoplay = true,

  autoplaySpeed = 1500,

  width = 1280,

  heigth = 530,

  nextArrow,

  prevArrow,

  speed = 500,
}: Props) {
  console.log(children);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(autoplay);
  const [pos, setPos] = useState(0);
  const quantItems = useRef<number>(children?.length);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        next();
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [currentSlide,autoPlay]);

  const next = () => {
    if (currentSlide < quantItems.current - 1) setCurrentSlide(currentSlide + 1);
    else if (infinite) {
      setCurrentSlide(0);
    }
  };

  const previous = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    else if (infinite) {
      setCurrentSlide(quantItems.current - 1);
    }
  };

  useEffect(() => {
    setPos(width * currentSlide);
  }, [currentSlide]);

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["slider-carousel-container"]}>
        {showNavigationArrows && (
          <div className={styles["slider-prev-button-container"]}>
            <button
              className={styles["slider-button"]}
              onClick={() => previous()}
            >
              <svg
                width="21"
                height="12"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM21 6.75H1V5.25H21V6.75Z"
                  fill="#383838"
                />
              </svg>
            </button>
          </div>
        )}

        <div
          className={styles["slider-carousel"]}
          onMouseOver={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(autoplay ? true : false)}
          style={{
            width: `${width}px`,
            height: `${heigth}px`,
          }}
        >
          {children?.map((item, i) => (
            <div
              className={styles["slider-carousel-item"]}
              key={i}
              style={{
                position: "relative",
                transition: `all ${speed}ms ease-in-out`,
                width: `${width}px`,
                height: `${heigth}px`,
                right: `${pos}px`,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {showNavigationArrows && (
          <div className={styles["slider-next-button-container"]}>
            <button
              className={styles["slider-button"]}
              onClick={() => next()}
            >
              <svg
                width="21"
                height="12"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"
                  fill="#383838"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {showPaginationDots && (
        <div className={styles["slider-pagination-container"]}>
          <div className={styles["slider-pagination"]}>
            {children?.map((item, i) => (
              <div
                className={`${styles["slider-pagination-item"]} ${
                  currentSlide == i ? styles["slider-carousel-item-active"] : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
