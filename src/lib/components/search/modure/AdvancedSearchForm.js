/*
 * This file is part of GEO-Components-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Components-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { Tab, Form } from "semantic-ui-react";

import { GeospatialField, SearchFilterField } from "../base";

export const AdvancedSearchForm = () => {
  const formPanes = [
    {
      menuItem: "Properties",
      render: () => (
        <Tab.Pane attached={false}>
          <Form>
            <SearchFilterField />
          </Form>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Spatial extent",
      render: () => (
        <Tab.Pane attached={false}>
          <GeospatialField />
        </Tab.Pane>
      )
    }
  ];

  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={formPanes} />
  );
};
