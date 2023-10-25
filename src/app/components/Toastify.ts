import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "warning" | "error" | "info" | "default";

const Toastify = {
  fire: (title: string, type: ToastType, options?: ToastOptions) => {
    const {
      position = "bottom-left",
      autoClose = 5000,
      hideProgressBar = true,
      ...restOptions
    } = options || {};

    const notify = type === "default" ? toast : toast[type];
    notify(title, { position, autoClose, hideProgressBar, ...restOptions });
  },
};

export default Toastify;
