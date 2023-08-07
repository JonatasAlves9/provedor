import React from 'react';
import {makeRemoteOrganization} from '../../usecases/organizations/organizations-factory';
import {OrganizationsForm} from '@/presentation/app/modules/organizations/pages/organizationsForm';
import {makeRemoteOrganizationInsure} from '../../usecases/organizationInsure/organization-factory';
import {makeRemoteOrganizationTypes} from '../../usecases/organization-types/organization-types-factory';

const makeOrganizationForm: React.FC = () => {
  return (
    <OrganizationsForm
      organizations={makeRemoteOrganization()}
      organizationTypes={makeRemoteOrganizationTypes()}
      organizationInsure={makeRemoteOrganizationInsure()}
    />
  );
};

export default makeOrganizationForm;
