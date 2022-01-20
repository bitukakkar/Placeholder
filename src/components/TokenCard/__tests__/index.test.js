import React from 'react'
import { useState as useStateMock } from 'react'
import { useSelector as useSelectorMock } from 'react-redux'
import createSetup from '../../../Utils/setup'
import Tokencard from '..'
import userEvent from "@testing-library/user-event";
import { fireEvent, render, cleanup ,getByTestId, queryByTestId,getByText} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn()
// }))

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useSelector: jest.fn()
// }))

const handleModalOpen = jest.fn();
const setIsOpenModal = jest.fn()
describe('<Tokencard />', () => {
  let setup;

  beforeEach(() => {
  

    // useStateMock.mockImplementation(init => [init,setIsOpenModal])
    // useStateMock.mockImplementationOnce(() => [true, setIsOpenModal]);

    // useSelectorMock.mockImplementation(callback => {
    //   return callback()
    // })
    setup = createSetup({
      component: Tokencard
    })
 
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When click on Buy tokens it should open model", () => {
   // useStateMock.mockImplementationOnce(() => [true, setIsOpenModal]);

    const handleModalOpenSpy = jest.fn();
  //  const { getByTestId } = setup()
   // fireEvent.click(getByTestId("open"));
    const { getByTestId } = setup();
    userEvent.click(getByTestId("open"));
    //expect(handleModalOpen).toBeCalled();
   // expect(handleModalOpen).toHaveBeenCalled();
    fireEvent.click(getByTestId('open'));
  
    //expect(handleModalOpenSpy).toHaveBeenCalled();
   // const { getByTestId } = render(<Tokencard />);
    //fireEvent.click(getByTestId("open"))
   // userEvent.click(getByTestId("open"));
  // expect(handleModalOpen).toHaveBeenCalled();
  });

  test("Should have trvl token content", () => {
    const { getByTestId } = setup();
    const trvltext = getByTestId("token-text");
    expect(trvltext).toHaveTextContent('TRVL Tokens');
   
  });
  

})
