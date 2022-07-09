/*
 * This file is part of GEO-Components-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Components-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { Formik } from 'formik';

import withMock from 'storybook-addon-mock';

import subjectsApiData from '@tests/mock/vocabularies/subjects-api.json';
import resourceTypesApiData from '@tests/mock/vocabularies/resourcetypes-api.json';
import namesApiData from '@tests/mock/vocabularies/names-api.json';

import { BasicFilterForm as BasicFilterFormComponent } from './BasicFilterForm';

export default {
  title: 'Form/Search/Basic Filter form',
  component: BasicFilterFormComponent,
  decorators: [withMock],
};

/**
 * Mock API
 */
const mockApiConfig = [
  {
    url: '/api/vocabularies/subjects?size=&suggest=',
    method: 'GET',
    status: 200,
    response: (request) => {
      return subjectsApiData;
    },
  },
  {
    url: '/api/vocabularies/resourcetypes?size=&suggest=',
    method: 'GET',
    status: 200,
    response: (request) => {
      return resourceTypesApiData;
    },
  },
  {
    url: '/api/names?size=&suggest=',
    method: 'GET',
    status: 200,
    response: (request) => {
      return namesApiData;
    },
  },
];

/**
 * Component template
 */
const Template = (args) => (
  <>
    <Formik initialValues={{}}>
      <BasicFilterFormComponent {...args} />
    </Formik>
  </>
);

/**
 * Component stories
 */
export const Basic = Template.bind({});
Basic.args = {};

Basic.parameters = {
  mockData: mockApiConfig,
};
