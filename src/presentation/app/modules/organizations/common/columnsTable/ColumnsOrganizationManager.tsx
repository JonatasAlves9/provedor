import React from 'react';
import {TableColumn} from 'react-data-table-component';
import {ORGANIZATION_MANAGER} from '@/presentation/app/modules/organizations/models/data/ORGANIZATION_MANAGER';

export const columns: TableColumn<ORGANIZATION_MANAGER>[] = [
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
    name: 'PROFISSÃO',
    selector: (row) => row.career,
    sortable: true,
  },
];
