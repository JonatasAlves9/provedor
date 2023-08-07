// React
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

// Components
import {notifyError, notifySuccess} from '@/presentation/app/components/Notify';

// Connection
import {Organization} from '@/domain/usecases/Organization';
import {useAppDispatch, useAppSelector} from '@/presentation/config/hooks/useRedux';
import {loadOrganizations} from '@/presentation/config/store/organization/organizationSlice';

// View
import {OrganizationsListView} from './view';

interface IProps {
  organizations: Organization;
}

export const OrganizationsList = ({organizations}: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {organizations: organizationsList} = useAppSelector((state) => state.organizations);

  const handleDelete = (id: string) => {
    organizations
      .deleteOrganization(id)
      .then(() => {
        notifySuccess('Organização deletada com sucesso');
        getListOrganizations();
      })
      .catch((err) => {
        notifyError(err.menssage || 'Ocorreu um erro ao deletar a organização');
        console.log(err);
      });
  };

  const getListOrganizations = async () => {
    await organizations
      .listOrganizations()
      .then((res) => {
        dispatch(loadOrganizations(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListOrganizations();
  }, []);

  return (
    <OrganizationsListView
      handleDelete={handleDelete}
      organizations={organizationsList || []}
      navigate={navigate}
    />
  );
};
