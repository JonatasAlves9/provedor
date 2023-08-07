import React from 'react';
import {TableColumn} from 'react-data-table-component';
import {ORGANIZATION_ASSIST} from '../../models/data/ORGANIZATION_ASSIST';

export const columns: TableColumn<ORGANIZATION_ASSIST>[] = [
  {
    name: 'CPF',
    selector: (row) => row.cpf,
    sortable: true,
  },
  {
    name: 'NOME',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'E-MAIL',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'CURSO',
    selector: (row) => row.course,
    sortable: true,
  },
];
