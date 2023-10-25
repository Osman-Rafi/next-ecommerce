import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "warning" | "error" | "info" | "default";

const actions = {
  success: (title: string, options: ToastOptions) =>
    toast.success(title, options),
  warning: (title: string, options: ToastOptions) =>
    toast.warning(title, options),
  error: (title: string, options: ToastOptions) => toast.error(title, options),
  info: (title: string, options: ToastOptions) => toast.info(title, options),
  default: (title: string, options: ToastOptions) => toast(title, options),
};

const Toastify = {
  fire: (title: string, type: ToastType, options?: ToastOptions) => {
    const {
      position = "bottom-left",
      autoClose = 5000,
      hideProgressBar = true,
    } = options || {};

    const notify = actions[type];
    notify(title, { position, autoClose, hideProgressBar });
  },
};

export default Toastify;
