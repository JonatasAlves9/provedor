import {IconHoverAnimation} from '@/presentation/app/components/iconHoverAnimation';
import {TableColumn} from 'react-data-table-component';
import {STUDENTS_LIST} from '../../models/data/STUDENTS_LIST';

export const columns: TableColumn<STUDENTS_LIST>[] = [
  {
    name: 'Nome',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'CPF',
    selector: (row) => row.cpf,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: '',
    style: {
      justifyContent: 'end',
    },
    cell: (cell) => {
      return (
        <>
          <IconHoverAnimation path='/media/icons/duotune/general/gen055.svg' color='dark' />
          <IconHoverAnimation path='/media/icons/duotune/general/gen027.svg' color='dark' />
        </>
      );
    },
  },
];
