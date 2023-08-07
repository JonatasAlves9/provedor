import React from 'react';
import {OrganizationsList} from '@/presentation/app/modules/organizations/pages/organizationsList';
import {makeRemoteOrganization} from '@/main/factories/usecases/organizations/organizations-factory';

const makeOrganizationList: React.FC = () => {
  return <OrganizationsList organizations={makeRemoteOrganization()} />;
};

export default makeOrganizationList;
