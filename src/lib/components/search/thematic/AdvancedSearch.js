/*
 * This file is part of GEO-Components-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Components-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import { Button, Modal, Icon } from "semantic-ui-react";

import { AdvancedSearchForm } from "../modure";

export const AdvancedSearch = () => {
  return (

    <Modal
      closeIcon
      size={"small"}
      closeOnDimmerClick={false}
      trigger={<Button>Advanced search <Icon name={"filter"} /> </Button>}
    >
      <Modal.Header>Advanced search</Modal.Header>
      <Modal.Content>
        <AdvancedSearchForm />
      </Modal.Content>
      <Modal.Actions>
        <Button color="gray">
          Cancel
        </Button>
        <Button
          content="Use filters"
          labelPosition="right"
          icon="checkmark"
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
