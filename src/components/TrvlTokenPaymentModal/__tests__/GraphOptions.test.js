import React from 'react'
import createSetup from '../../../Utils/setup'
import GraphOptions from '../../TrvlTokenPaymentModal/GraphOptions'
import '@testing-library/jest-dom/extend-expect';

describe('<GraphOptions />', () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {};
    setup = createSetup({
      component: GraphOptions,
    });
  });

  afterEach(jest.resetAllMocks);

  test("test", () => {
    expect(1).toEqual(1);
  });

})
