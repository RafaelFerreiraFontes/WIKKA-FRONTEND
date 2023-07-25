import React from "react";

import Slider from "react-slick";

import styles from "./styles/SliderLayout.module.scss";

type Responsive = {
  breakpoint: number;
  settings: {
    accessibility?: boolean;

    adaptiveHeight?: boolean;

    appendArrows?: Element | JSX.Element | string;

    appendDots?: Element | JSX.Element | string;

    arrows?: boolean;

    asNavFor?: Element | JSX.Element | string;

    centerMode?: boolean;

    centerPadding?: string;

    cssEase?: string;

    customPaging?: Function;

    dots?: boolean;

    dotsClass?: string;

    draggable?: boolean;

    easing?: string;

    edgeFriction?: number;

    fade?: boolean;

    focusOnSelect?: boolean;

    focusOnChange?: boolean;

    infinite?: boolean;

    initialSlide?: number;

    lazyLoad?: "ondemand" | "progressive";

    mobileFirst?: boolean;

    nextArrow?: Element | JSX.Element | string;

    pauseOnDotsHover?: boolean;

    pauseOnFocus?: boolean;

    pauseOnHover?: boolean;

    prevArrow?: Element | JSX.Element | string;

    respondTo?: "window" | "slider";

    rows?: number;

    rtl?: boolean;

    slide?: string;

    slidesPerRow?: number;

    slidesToScroll?: number;

    slidesToShow?: number;

    speed?: number;

    swipe?: boolean;

    swipeToSlide?: boolean;

    touchMove?: boolean;

    touchThreshold?: number;

    useCSS?: boolean;

    useTransform?: boolean;

    variableWidth?: boolean;

    vertical?: boolean;

    verticalSwiping?: boolean;

    waitForAnimate?: boolean;

    zIndex?: number;

    autoplay?: boolean;

    autoplaySpeed?: number;

  };
}

interface Props {
  accessibility?: boolean;

  adaptiveHeight?: boolean;

  appendArrows?: Element | JSX.Element | string;

  appendDots?: Element | JSX.Element | string;

  arrows?: boolean;

  asNavFor?: Element | JSX.Element | string;

  centerMode?: boolean;

  centerPadding?: string;

  cssEase?: string;

  customPaging?: Function;

  dots?: boolean;

  dotsClass?: string;

  draggable?: boolean;

  easing?: string;

  edgeFriction?: number;

  fade?: boolean;

  focusOnSelect?: boolean;

  focusOnChange?: boolean;

  infinite?: boolean;

  initialSlide?: number;

  lazyLoad?: "ondemand" | "progressive";

  mobileFirst?: boolean;

  nextArrow?: Element | JSX.Element | string;

  pauseOnDotsHover?: boolean;

  pauseOnFocus?: boolean;

  pauseOnHover?: boolean;

  prevArrow?: Element | JSX.Element | string;

  respondTo?: "window" | "slider";

  rows?: number;

  rtl?: boolean;

  slide?: string;

  slidesPerRow?: number;

  slidesToScroll?: number;

  slidesToShow?: number;

  speed?: number;

  swipe?: boolean;

  swipeToSlide?: boolean;

  touchMove?: boolean;

  touchThreshold?: number;

  useCSS?: boolean;

  useTransform?: boolean;

  variableWidth?: boolean;

  vertical?: boolean;

  verticalSwiping?: boolean;

  waitForAnimate?: boolean;

  zIndex?: number;

  autoplay?: boolean;

  autoplaySpeed?: number;

  responsive?: Responsive[];

  children: any;
}

export default function SliderLayout({
  children,

  accessibility = true,

  adaptiveHeight = false,

  appendArrows = "",

  appendDots = "",

  arrows = true,

  asNavFor = null,

  prevArrow = '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',

  nextArrow = '<button class="slick-next" aria-label="Next" type="button">Next</button>',

  autoplay = false,

  autoplaySpeed = 3000,

  centerMode = false,

  centerPadding = '50px',

  cssEase = 'ease',

  customPaging = function (slider, i) {
    return $('<button type="button" />').text(i + 1);
  },

  dots = true,

  dotsClass = 'slick-dots',

  draggable = true,

  easing = 'linear',

  edgeFriction = 0.35,

  fade = false,

  focusOnSelect = false,

  focusOnChange = false,

  infinite = false,

  initialSlide = 0,

  lazyLoad = 'ondemand',

  mobileFirst = false,

  pauseOnHover = true,

  pauseOnFocus = true,

  pauseOnDotsHover = false,

  respondTo = 'window',

  responsive = null,

  rows = 1,

  rtl = false,

  slide = '',

  slidesPerRow = 1,

  slidesToShow = 1,

  slidesToScroll = 1,

  speed = 500,

  swipe = true,

  swipeToSlide = false,

  touchMove = true,

  touchThreshold = 5,

  useCSS = true,

  useTransform = true,

  variableWidth = false,

  vertical = false,

  verticalSwiping = false,

  waitForAnimate = true,

  zIndex = 1000,
}: Props) {
  children = (children instanceof Array) ? children : [children];

  console.log(styles);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    adaptiveHeight: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className={styles["slider-container"]}>
        <div className={styles["slider-layout"]}>
           <Slider props={settings}>
            {
              children.map((child: any, i) => (
                <div key={i} className={styles["slider-item"]}> {child} </div>
              ))
            }
           </Slider>
        </div>
      </div>
    </>
  );
}
