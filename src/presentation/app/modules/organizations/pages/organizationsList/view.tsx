// React
import React from 'react';

// Components
import Head from '@/presentation/config/layout/head/Head';
import {Datatable} from '@/presentation/app/components/Datatable';
import Content from '@/presentation/config/layout/content/Content';
import {
  Icon,
  Button,
  BlockDes,
  BlockTitle,
  BlockBetween,
  BlockHeadContent,
} from '@/presentation/app/HOC/components';

// Common
import {columns} from '@/presentation/app/modules/organizations/common/columnsTable/ColumnsOrganizationList';

export const OrganizationsListView = ({handleDelete, organizations, navigate}) => {
  return (
    <React.Fragment>
      <Head title='Organizações' />
      <Content page='component'>
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag='h4' page>
              Organizações
            </BlockTitle>
            <BlockDes className='text-soft'>
              <p>
                Cadastre aqui as organizações que utilizarão o Rade App e outros serviços do Rade
              </p>
            </BlockDes>
          </BlockHeadContent>

          <BlockHeadContent>
            <div className='toggle-wrap nk-block-tools-toggle'>
              <div className='toggle-expand-content'>
                <ul className='nk-block-tools g-3'>
                  <li className='nk-block-tools-opt'>
                    <Button
                      color='primary'
                      className='btn-icon btn-rounded'
                      onClick={() => navigate('/organizacoes/novo')}
                    >
                      <Icon name='plus'></Icon>
                      <span className='me-2'>Nova Organização</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </BlockHeadContent>
        </BlockBetween>

        <Datatable
          columns={columns}
          canDelete={true}
          data={organizations}
          actionsColumn={[
            {
              icon: 'opt-dot-alt',
              to: `config/%id`,
            },
            {
              icon: 'edit',
              to: `editar/%id`,
            },
          ]}
          handleDelete={(cellProps) => handleDelete(String(cellProps))}
        />
      </Content>
    </React.Fragment>
  );
};
