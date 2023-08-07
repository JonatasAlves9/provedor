import React from 'react';
import {TableColumn} from 'react-data-table-component';
import {ORGANIZATION_PRECEPTOR} from '@/presentation/app/modules/organizations/models/data/ORGANIZATION_PRECEPTOR';

export const columns: TableColumn<ORGANIZATION_PRECEPTOR>[] = [
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
