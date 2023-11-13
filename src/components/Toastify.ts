import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'warning' | 'error' | 'info' | 'default';

const Toastify = {
  fire: (title: string, type: ToastType, options?: ToastOptions) => {
    const {
      position = 'bottom-left',
      autoClose = 5000,
      hideProgressBar = true,
      ...restOptions
    } = options || {};

    const notify = type === 'default' ? toast : toast[type];
    notify(title, { position, autoClose, hideProgressBar, ...restOptions });
  },

  showServerResponse: (response: {
    success: boolean;
    message: string;
    error: string;
  }) => {
    if (response.success) {
      Toastify.fire(response.message, 'success');
    } else {
      Toastify.fire(response.error, 'error');
    }
  }
};

export default Toastify;
