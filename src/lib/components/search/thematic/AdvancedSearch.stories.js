/*
 * This file is part of GEO-Components-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Components-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import { css } from "@emotion/css";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";

import withMock from "storybook-addon-mock";

import { AdvancedSearch as AdvancedSearchComponent } from "./AdvancedSearch";

export default {
  title: "Search/Modals/Advanced Search",
  component: AdvancedSearchComponent,
  decorators: [withMock]
};

/**
 * Styles
 */
const theme = {
  slides: {
    headerClass: "",
    slideBodyClass: css`
      margin: 5px;
    `,
    slideContainerClass: "",
    slideImageClass: ""
  },
  carousels: {}
};

/**
 * Component template
 */
const Template = (args) => (
  <div>
    <Global
      styles={{
        ".leaflet-container": {
          width: "100%", height: "280px"
        }
      }}
    />
    <AdvancedSearchComponent {...args} />
  </div>
);

/**
 * Component stories
 */
export const AdvancedSearch = Template.bind({});

AdvancedSearch.args = {};
