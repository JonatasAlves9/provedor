import {TableColumn} from 'react-data-table-component';
import {COORDINATORS_LIST} from '../../models/data/COORDINATORS_LIST';

export const columns: TableColumn<COORDINATORS_LIST>[] = [
  {
    name: 'CPF',
    selector: (row) => row.cpf,
    sortable: true,
  },
  {
    name: 'Nome',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'E-mail',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'Curso',
    selector: (row) => row.course,
    sortable: true,
  },
];
