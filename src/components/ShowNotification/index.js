import { toast } from 'react-toastify';
import { UI_NOTIFICATIONS_TYPE } from './../../Types/Enums';

export const showNotification = (msg, type, position) => {
  const toastProps = {
    position: position ? toast.POSITION[position] : toast.POSITION.TOP_RIGHT,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
  };

  switch (type) {
    case UI_NOTIFICATIONS_TYPE.success:
      return toast.success(msg, {
        ...toastProps,
      });

    case UI_NOTIFICATIONS_TYPE.warning:
      return toast.warn(msg, {
        ...toastProps,
      });

    case UI_NOTIFICATIONS_TYPE.error:
      return toast.error(msg, {
        ...toastProps,
      });

    default:
      return toast.info(msg, {
        ...toastProps,
      });
  }
};
