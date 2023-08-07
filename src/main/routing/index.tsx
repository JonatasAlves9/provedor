/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
// React
import {FC} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

// Routing
import {App} from '@/presentation/app/App';
import {PublicRoutes} from './PublicRoutes';
import {PrivateRoutes} from './PrivateRoutes';

// Modules
import {useAuth} from '@/presentation/app/hooks/useAuth';
import {Logout} from '../../presentation/app/modules/auth/pages/Logout';
import {ErrorsPage} from '../../presentation/app/modules/errors/ErrorsPage';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env;

export const Router: FC = () => {
  const {currentUser} = useAuth();
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='/admin/logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='*' element={<Navigate to='/admin/login' />} />
              <Route path='admin/login/*' element={<PublicRoutes />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
