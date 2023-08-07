import {Routes, Route, Navigate} from 'react-router-dom';
import {UserContextProvider} from '@/presentation/config/partials/pre-built/user-manage/UserContext';

// Layout
import Layout from '@/presentation/config/layout/Index';

// Dashboard
import Invest from '@/presentation/app/modules/dashboard/Invest';

// Modules
import UserListRegular from '@/presentation/config/partials/pre-built/user-manage/UserListRegular';
import UserContactCard from '@/presentation/config/partials/pre-built/user-manage/UserContactCard';
import UserDetails from '@/presentation/config/partials/pre-built/user-manage/UserDetailsRegular';
import UserListCompact from '@/presentation/config/partials/pre-built/user-manage/UserListCompact';
import UserProfileRegular from '@/presentation/config/partials/pre-built/user-manage/UserProfileRegular';
import UserProfileSetting from '@/presentation/config/partials/pre-built/user-manage/UserProfileSetting';
import UserProfileActivity from '@/presentation/config/partials/pre-built/user-manage/UserProfileActivity';
import UserProfileNotification from '@/presentation/config/partials/pre-built/user-manage/UserProfileNotification';

import MakeOrganizationList from '../factories/modules/organizations/organizationList.factory';
import MakeOrganizationForm from '../factories/modules/organizations/organizationForm.factory';
// import MakeOrganizationConfig from '../factories/modules/organizations/organizationConfig.factory';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='admin/*' element={<Navigate to='/dashboard' />} />

        {/* Pages */}
        <Route path='dashboard' element={<Invest />} />

        {/* Organizações */}
        <Route path='organizacoes/*'>
          <Route index element={<MakeOrganizationList />} />
          <Route path='novo' element={<MakeOrganizationForm />} />
          <Route path='editar/:id' element={<MakeOrganizationForm />} />
          {/* <Route path='config/:id' element={<MakeOrganizationConfig />} /> */}
          <Route path='*' element={<Navigate to='/error/404' />} />
        </Route>

        <Route element={<UserContextProvider />}>
          <Route path='user-list-regular' element={<UserListRegular />}></Route>
          <Route path='user-list-compact' element={<UserListCompact />}></Route>
          <Route path='user-contact-card' element={<UserContactCard />}></Route>
          <Route path='user-details-regular/:userId' element={<UserDetails />}></Route>
        </Route>

        <Route>
          <Route path='user-profile-notification' element={<UserProfileNotification />}></Route>
          <Route path='user-profile-regular' element={<UserProfileRegular />}></Route>
          <Route path='user-profile-activity' element={<UserProfileActivity />}></Route>
          <Route path='user-profile-setting' element={<UserProfileSetting />}></Route>
        </Route>

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  );
};
export {PrivateRoutes};
