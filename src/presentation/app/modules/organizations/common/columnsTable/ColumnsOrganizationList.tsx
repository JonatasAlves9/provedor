import React from 'react';
import {TableColumn} from 'react-data-table-component';
import {ORGANIZATION_LIST} from '@/presentation/app/modules/organizations/models/data/ORGANIZATION_LIST';

export const columns: TableColumn<ORGANIZATION_LIST>[] = [
  {
    name: 'Nome',
    selector: (row) => row.nome_fantasia,
    sortable: true,
  },
  {
    name: 'Tipo',
    selector: (row) => row.tipo_entidade_nome,
    sortable: true,
  },
  {
    name: 'Localização',
    selector: (row) => row.cidade_nome,
    sortable: true,
  },
];
