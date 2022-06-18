/*
 * This file is part of GEO-Components-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Components-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import { Form } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";


export const SearchFilterField = () => {
  return (
    <>
      <Form.Group widths={"equal"}>
        <SemanticDatepicker
          label={"Start date"}
          id={"startDate"}
        />
        <SemanticDatepicker
          label={"End date"}
          id={"endDate"}
        />
      </Form.Group>

      <Form.Input
        label={"GEO Work Programme Activity"}
        placeholder={"Select a GEO Work Programme Activity"}
      />

      <Form.Group widths={"equal"}>
        <Form.Input fluid label={"Engagement Priority"} placeholder={"Select the Engagement Priorities"} />
        <Form.Input fluid label={"Target Audiences"} placeholder={"Select the Target Audiences"} />
      </Form.Group>
    </>
  );
};
