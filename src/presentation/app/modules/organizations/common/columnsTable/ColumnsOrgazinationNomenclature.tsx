// Import
import {Form} from 'react-bootstrap';
import {TableColumn} from 'react-data-table-component';
import {ORGANIZATION_NOMENCLATURE} from '../../models/data/ORGANIZATION_NOMENCLATURE';

export const columns: TableColumn<ORGANIZATION_NOMENCLATURE>[] = [
  {
    name: 'Nomeclatura',
    selector: (row) => row.nomenclature,
    width: '15%',
    sortable: true,
  },
  {
    name: 'Singular',
    selector: (row) => row.singular,
    sortable: true,
    width: '25%',
    cell: (cell) => {
      return <Form.Control type='text' placeholder='Singular' className='h-35px form-control ' />;
    },
  },
  {
    name: 'Plural',
    selector: (row) => row.plural,
    sortable: true,
    width: '25%',
    cell: (cell) => {
      return <Form.Control type='text' placeholder='Plural' className='h-35px form-control ' />;
    },
  },
];
