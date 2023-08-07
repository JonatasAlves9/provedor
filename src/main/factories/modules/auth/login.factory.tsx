import React from 'react';
import {Login} from '@/presentation/app/modules/auth/pages/Login';
import {makeSessionStorage} from '@/main/factories/http/session-storage-factory';
import {makeRemoteAuthentication} from '@/main/factories/usecases/authentication/remote-authentication-factory';

export const MakeLogin: React.FC = () => {
  return <Login authentication={makeRemoteAuthentication()} session={makeSessionStorage()} />;
};
