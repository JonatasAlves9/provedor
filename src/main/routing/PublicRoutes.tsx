// React
import {Route, Routes} from 'react-router-dom';

// Layout
import LayoutNoSidebar from '@/presentation/config/layout/Index-nosidebar';

// Auth
import {MakeLogin} from '@/main/factories/modules/auth/login.factory';

import Register from '@/presentation/app/modules/auth/Register';
import Success from '@/presentation/app/modules/auth/Success';
import ForgotPassword from '@/presentation/app/modules/auth/ForgotPassword';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutNoSidebar />}>
        {/* <Route path='login-success' element={<Success />}></Route> */}
        {/* <Route path='forgot-password' element={<ForgotPassword />}></Route> */}
        {/* <Route path='registration' element={<Register />}></Route> */}
        <Route index element={<MakeLogin />} />
      </Route>
    </Routes>
  );
};

export {PublicRoutes};
