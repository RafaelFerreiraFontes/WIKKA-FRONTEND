import React, { useEffect, useState } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import '~slick-carousel/slick/slick.css';
import '~slick-carousel/slick/slick-theme.css';

interface Props {
  showNavigationArrows?: boolean;

  showPaginationDots?: boolean;

  infinite?: boolean;

  usePagination?: boolean;

  children?: any;

  speed?: number;

  slidesToShow?: number;

  slidesToScroll?: number;

  autoplay?: boolean;

  autoplaySpeed?: number;

  centerMode?: boolean;

  centerPadding?: string;

  responsive?: ResponsiveObject[];

  nextArrow?: JSX.Element;

  prevArrow?: JSX.Element;
}

export default function SliderLayout({
  children,
  responsive = [],

  infinite = true,

  showNavigationArrows = true,

  showPaginationDots = true,

  usePagination = true,

  autoplay = false,

  autoplaySpeed = 3000,

  centerMode = true,

  centerPadding = '',

  nextArrow,

  prevArrow,

  slidesToScroll = 4,

  slidesToShow = 4,

  speed = 500,
}: Props) {
  const settings = {
    responsive,

    infinite,

    showNavigationArrows,

    showPaginationDots,

    usePagination,

    autoplay,

    autoplaySpeed,

    centerMode,

    centerPadding,

    nextArrow,

    prevArrow,

    slidesToScroll,

    slidesToShow,

    speed,
  };

  return <Slider {...settings}>{children}</Slider>;
}
