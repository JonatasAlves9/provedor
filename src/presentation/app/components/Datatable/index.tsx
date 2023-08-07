// React
import './styles/_datatable.scss';
import {useCallback, useState} from 'react';
import DatatableComponent, {IDataTableProps} from 'react-data-table-component';

// Components
import {DatatableSearch} from './components/DatatableSearch';
import {ModalDelete} from '@/presentation/app/components/ModalDelete';
import {IconHoverAnimation} from '@/presentation/app/components/IconHoverAnimation';

interface IProps extends IDataTableProps<any> {
  canDelete?: boolean;
  actionsColumn?: ((cell: any) => Array<IActions>) | Array<IActions>;
  handleDelete?: (id: string | number) => void;
}

interface IActions {
  icon: string;
  to: string;
  handleClick?: (id?: string) => void;
}

export const Datatable = ({
  data,
  columns,
  handleDelete,
  actionsColumn,
  canDelete = true,
  ...rest
}: IProps) => {
  const [idToDelete, setIdToDelete] = useState(null);
  const [modal_delete, setModal_delete] = useState(false);
  const toggle = useCallback(
    (id: number) => {
      setIdToDelete(id);
      setModal_delete(!modal_delete);
    },
    [modal_delete]
  );

  const verifyIncludesKey = (key: string, cell: any) => {
    if (key.includes('%')) {
      return concatValues(key, cell);
    } else {
      return key;
    }
  };

  const concatValues = (value: string, cell: any) => {
    const nameKey = value.split('%')[1];
    const key = cell[nameKey];

    return value.split('%')[0] + key;
  };

  const getActionsArray = (cell: any): Array<IActions> => {
    if (typeof actionsColumn === 'function') {
      return actionsColumn(cell);
    } else {
      return actionsColumn;
    }
  };

  return (
    <>
      <ModalDelete
        isOpen={modal_delete}
        toggle={toggle}
        goBack={toggle}
        handleDelete={() => {
          handleDelete(idToDelete);
          setModal_delete(!modal_delete);
        }}
      />
      <DatatableSearch />
      <DatatableComponent
        columns={[
          ...columns,
          {
            name: '',
            cell: (cell) => {
              return (
                <div className='actions-hidden'>
                  {(getActionsArray(cell) || []).map(({to = '#', handleClick, icon}, index) => {
                    return (
                      <IconHoverAnimation
                        key={index}
                        icon={icon}
                        color='dark'
                        to={verifyIncludesKey(to, cell)}
                        onClick={handleClick ? () => handleClick(cell.id) : null}
                      />
                    );
                  })}
                  {canDelete && (
                    <IconHoverAnimation icon='trash' color='dark' onClick={() => toggle(cell.id)} />
                  )}
                </div>
              );
            },
          },
        ]}
        pagination
        data={data}
        noDataComponent={null}
        paginationComponentOptions={{
          rowsPerPageText: 'Linhas por página:',
          rangeSeparatorText: 'de',
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Todos',
        }}
        {...rest}
      />
      {data.length === 0 && (
        <>
          {/*@ts-ignore*/}
          <lord-icon
            src='https://assets7.lottiefiles.com/packages/lf20_fmieo0wt.json'
            trigger='loop'
            colors='primary:#dc3545,secondary:#dc3545'
            style={{width: '100%', height: '150px'}}
          >
            {/*@ts-ignore*/}
          </lord-icon>
          <p className='text-center'>Nenhum dado encontrado</p>
        </>
      )}{' '}
    </>
  );
};
