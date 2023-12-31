import React from 'react';
import classNames from 'classnames';
import {basicData} from './TableData';

interface ITableProps {
  headColor?: string;
  striped?: boolean;
  border?: boolean;
  hover?: boolean;
  responsive?: boolean;
}

export const Table: React.FC<ITableProps> = ({headColor, striped, border, hover, responsive}) => {
  const tableClass = classNames({
    table: true,
    'table-bordered': border,
    'table-borderless': !border,
    'table-striped': striped,
    'table-hover': hover,
  });

  return (
    <div className={responsive ? 'table-responsive' : ''}>
      <table className={tableClass}>
        <thead className={`${headColor ? `table-${headColor}` : ''}`}>
          <tr>
            {basicData.header.map((item, idx) => {
              return <th key={idx}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {basicData.data.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.handle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
