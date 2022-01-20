import React from 'react'
import createSetup from '../../../Utils/setup'
import sliderSettings from '../../Landing/sliderSettings'
import '@testing-library/jest-dom/extend-expect';

describe('<sliderSettings />', () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {};
    setup = createSetup({
      component: sliderSettings,
    });
  });

  afterEach(jest.resetAllMocks);


  test("test", () => {
    expect(1).toEqual(1);
  });




})
