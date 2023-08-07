import {ORGANIZATION_COURSES} from '@/presentation/app/modules/organizations/models/data/ORGANIZATION_COURSES';
import {Form} from 'react-bootstrap';
import {TableColumn} from 'react-data-table-component';

interface IProps {
  toggleModal: () => void;
}

export const makeColumnsOrganizationCourses = ({
  toggleModal,
}: IProps): TableColumn<ORGANIZATION_COURSES>[] => {
  return [
    {
      name: 'Cursos',
      selector: (row) => row.course,
      width: '40%',
      sortable: true,
    },
    {
      name: '',
      selector: (row) => row.id,
      sortable: true,
      width: '40%',
      cell: (cell) => {
        return (
          <Form.Control
            type='email'
            placeholder='Código de integração API'
            className='h-35px form-control '
          />
        );
      },
    },
  ];
};
