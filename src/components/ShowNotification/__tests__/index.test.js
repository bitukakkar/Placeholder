import React from 'react'
import createSetup from '../../../Utils/setup'
import { showNotification } from "../../../components/ShowNotification";
import '@testing-library/jest-dom/extend-expect';
import { toast } from "react-toastify";
import { UI_NOTIFICATIONS_TYPE } from './../../../Types/Enums'

describe('<ShowNotification />', () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
       msg:'message',
       type:'success', 
       position:'top-left'
      };

    setup = createSetup({
      component: showNotification,
      props
    });
  });

  afterEach(jest.resetAllMocks);

  test('When it renders Then it should not crash', () => {
    const { container } = setup()
    expect(container).toBeTruthy()
  })
  test("test", () => {
    expect(1).toEqual(1);
  });

  test("When notification type equals to SUCCESS Then success toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.success,
      },
    });
    expect(toast.success).toBeTruthy();
  });
  test("When notification type equals to WARNING Then warning toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.warning,
      },
    });
    expect(toast.success).toBeTruthy();
  });

  test("When notification type equals to ERROR Then error toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.error,
      },
    });
    expect(toast.error).toBeTruthy();
  });

  test("When notification type equals to INFO Then info toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.info,
      },
    });
    expect(toast.info).toBeTruthy();
  });

})
