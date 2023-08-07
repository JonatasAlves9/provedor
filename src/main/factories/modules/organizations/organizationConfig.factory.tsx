import React from 'react';
import {OrganizationConfig} from '@/presentation/app/modules/organizations/pages/organizationConfig';
import {makeRemoteOrganization} from "@/main/factories/usecases/organizations/organizations-factory";

const makeOrganizationConfig: React.FC = () => {
    return <OrganizationConfig organizations={makeRemoteOrganization()}/>;
};

export default makeOrganizationConfig;
