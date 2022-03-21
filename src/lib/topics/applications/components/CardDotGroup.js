/*
 * This file is part of geo-knowledge-hub.
 * Copyright (C) 2021-2022 GEO Secretariat.
 *
 * geo-knowledge-hub is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import PropTypes from 'prop-types';

import 'pure-react-carousel/dist/react-carousel.es.css';

import { Dot } from 'pure-react-carousel';
import { Button, Container } from 'semantic-ui-react';

/**
 * Slide selector component.
 *
 * Note:
 *  This component is based on `layershifter` example.
 *  (https://github.com/layershifter/semantic-ui-react-with-pure-react-carousel)
 */
export const CardDotGroup = ({ slides, size }) => (
  <Container textAlign="center">
    <Button.Group size={size}>
      {[...Array(slides).keys()].map((slide) => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
  </Container>
);

CardDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string,
};

CardDotGroup.defaultProps = {
  size: 'mini',
};
