/*
 * This file is part of GEO-Labels-React.
 * Copyright (C) 2022 CERN.
 *
 * GEO-Labels-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { RelatedApplicationCarousel } from '../lib';

const App = () => {
  const relatedApplications = [
    {
      title: 'component example test 1',
      url: '/',
    },
    {
      title: 'component example test 2',
      url: '/',
    },
    {
      title: 'component example test 3',
      url: '/',
    },
    {
      title: 'component example test 4',
      url: '/',
    },
  ];

  return (
    <RelatedApplicationCarousel
      relatedApplications={relatedApplications}
      carouselProps={{
        naturalSlideWidth: 2,
        naturalSlideHeight: 1.5,
        totalSlides: relatedApplications.length ,
        visibleSlides: 2,
        isPlaying: true,
        interval: 5000, // ms
        isIntrinsicHeight: true,
        infinite: true
      }}
      cardGroupProps={{
        slides: relatedApplications.length,
      }}
      cardCarouselProps={{
        raised: true,
        color: "blue",
        centered: true,
        fluid: false,
        style: {
          // Initial test style
          width: "300px",
          height: "150px",
        },
      }}
    />
  );
};

export default App;
