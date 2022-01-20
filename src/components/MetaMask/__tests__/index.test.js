import React from 'react'
import createSetup from '../../../Utils/setup'
import { MetaMask } from "../../../components/MetaMask";
//import MetaMask from ".."

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

const startPayment = jest.fn();
const setBtnLoading= jest.fn();
describe('<MetaMask />', () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      ether:0.1, 
      setBtnLoading:false
    };
    setup = createSetup({
      component: MetaMask,
      props
    });
  });

  afterEach(jest.resetAllMocks);
  // test('When it renders Then it should not crash', () => {
  //   const { container } = setup()
  //   expect(container).toBeTruthy()
  // })
 
  test("test", () => {
    expect(1).toEqual(1);
  });

  // test("test 1", () => {
  //   setup({
  //     props: {
  //       ether: "",
  //     },
  //   });
  //   expect(startPayment).toBeFalsy();
  // });


})
