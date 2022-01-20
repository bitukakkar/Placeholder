import React from 'react'
import { useState as useStateMock } from 'react'
import { useSelector as useSelectorMock } from 'react-redux'
import createSetup from '../../../Utils/setup'
import Landing from '../../Landing'
import { fireEvent, render, cleanup ,getByTestId, queryByTestId, waitFor,within } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

const setEmail = jest.fn();
const saveData = jest.fn();

let email = "test@gmail.com"
describe('<Landing />', () => {
  let setup

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setEmail])
   
    useSelectorMock.mockImplementation(callback => {
      return callback()
    })
    setup = createSetup({
      component: Landing
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
  test("Subscribe form will not submit if email field empty", () => {
    useStateMock.mockImplementationOnce(() => ['', setEmail]);
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("subscribe-btn"));
    expect(saveData).not.toBeCalled();

  });
  test("Subscribe form will be submit if email filled by user",() => {
    const saveData = jest.fn();
    useStateMock.mockImplementationOnce(() => [email, setEmail]);
    const { getByTestId } = render( <BrowserRouter> <Landing/> </BrowserRouter>)
    fireEvent.click(getByTestId("subscribe-btn"));
     waitFor(() => {
      expect(saveData).toHaveBeenCalledWith(email);
    });
  });
  test("When component mount, check mailto email in the document", () => {
    const { getByTestId ,getByText} = render( <BrowserRouter> <Landing/> </BrowserRouter>)
    expect(getByTestId("mailto-text")).toBeInTheDocument();
    expect(getByText(/hello@decentralized.travel/i)).toBeInTheDocument();
  });
  test('NFT Block should Rendered correclty', () => {
    const { getAllByTestId , getByTestId } = render(<BrowserRouter> <Landing/> </BrowserRouter>);
    const NFTGrid = getByTestId('NFT-Grid')
    expect(NFTGrid).toBeInTheDocument();
  //  const NFTcard = within(NFTGrid).getByTestId('NFT-Card')
    // expect(NFTcard.length).toBe(7);
  });
  
})
