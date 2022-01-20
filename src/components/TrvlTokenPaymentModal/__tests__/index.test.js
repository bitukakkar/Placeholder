import React from 'react'
import createSetup from '../../../Utils/setup'
import TrvlTokenPaymentModal from '..'
import { fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

window.open = jest.fn();

const handleClose = jest.fn();
const onSubmit = jest.fn()

const username = "user1";
const email = "user@gmail.com";

describe('<TrvlTokenPaymentModal />', () => {
    let setup;
    let props;

    beforeEach(() => {
      props = { open: true, handleClose };
      setup = createSetup({
        component: TrvlTokenPaymentModal,
        props
      })
    })

    afterEach(jest.resetAllMocks)

    test('When it renders Then it should not crash', () => {
      const { container } = setup()
      expect(container).toBeTruthy()
    })

    test("Mock Clear", () => {
      window.open.mockClear();
    })

   test("Check the Submit button is disabled by default", () => {
    const {getByTestId} = setup();
    expect(getByTestId('submit-btn')).toBeDisabled()
     
    });

   test("when form is empty then buy now button should not be called", () => {
    const {getByTestId} = setup();
    fireEvent.click(getByTestId("submit-btn"));
    expect(onSubmit).not.toBeCalled();
    });

    test("when click buy now all values present in forms then submit form", () => {
      const {getByTestId} = setup();
      fireEvent.change(getByTestId("username"), {target: { value: username }});   
      fireEvent.change(getByTestId("useremail"), {target: { value: email }});   
      fireEvent.submit(getByTestId("submit-btn"));
    });

    test("When click close icon Then it should call handleClose", () => {
      const { getByAltText } = setup();
      fireEvent.click(getByAltText("close"));
      expect(handleClose).toHaveBeenCalled();
    });

    test("Amount slider should be in the model", () => {
      const { getByTestId } = setup();
      expect(getByTestId("amount-slider")).toBeInTheDocument();
    });

})
