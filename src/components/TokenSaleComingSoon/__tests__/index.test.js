import React from 'react'
import { useState as useStateMock } from 'react'
import { useSelector as useSelectorMock } from 'react-redux'
import createSetup from '../../../Utils/setup'
import TokenSaleComingSoon from '../../TokenSaleComingSoon/'
import '@testing-library/jest-dom/extend-expect';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))


describe('<TokenSaleComingSoon />', () => {
  let setup
  let props
  beforeEach(() => {
    props = {
      days: 12,
      hours: 2,
      minutes:22
    };
    useSelectorMock.mockImplementation(callback => {
      return callback()
    })
    setup = createSetup({
      component: TokenSaleComingSoon,
      props
    })
  })

  afterEach(jest.resetAllMocks)
  
  test("test", () => {
    expect(1).toEqual(1);
  });
  test('When it renders Then it should not crash', () => {
    const { container } = setup()
    expect(container).toBeTruthy()
  })
  test("Token Sale render correct days, hours and minutes", () => {
    const { getByTestId } = setup();
    const tokenDays = getByTestId("token_days");
    const tokenHours = getByTestId("token_hours");
    const tokenMinutes = getByTestId("token_minutes");
    expect(tokenDays).toHaveTextContent(12);
    expect(tokenHours).toHaveTextContent(2);
    expect(tokenMinutes).toHaveTextContent(22);
  });
})
