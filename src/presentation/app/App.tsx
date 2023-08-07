import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import '../config/assets/scss/dashlite.scss';
import '../config/assets/scss/style-email.scss';
import './components/notify/react-toastify.scss';

const App = () => {
  return (
    <Suspense>
      <Outlet />
      <ToastContainer />
    </Suspense>
  );
};

export {App};
