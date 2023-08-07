import {toast} from 'react-toastify';

export const notifySuccess = (title) =>
  toast(title, {
    position: 'top-right',
    theme: 'colored',
    type: 'success',
    hideProgressBar: true,
    closeOnClick: false,
    autoClose: 2000,
    pauseOnHover: true,
  });

export const notifyError = (title) =>
  toast(title, {
    position: 'top-right',
    theme: 'colored',
    hideProgressBar: true,
    type: 'error',
    closeOnClick: false,
    autoClose: 2000,
    pauseOnHover: true,
  });
