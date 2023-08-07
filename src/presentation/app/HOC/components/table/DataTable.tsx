import {Card} from 'reactstrap';
import classNames from 'classnames';
import React, {ReactNode} from 'react';

interface IDataTableProps {
  className?: string;
  bodyClassName?: string;
  title?: string;
  children: ReactNode;
}

export const DataTable: React.FC<IDataTableProps> = ({
  title,
  children,
  className,
  bodyClassName,
}) => {
  return (
    <Card className={`card-bordered ${className ? className : ''}`}>
      <div className='card-inner-group'>{children}</div>
    </Card>
  );
};

interface IDataTableTitleProps {
  children: ReactNode;
}

export const DataTableTitle: React.FC<IDataTableTitleProps> = ({children}) => {
  return (
    <div className='card-inner position-relative card-tools-toggle'>
      <div className='card-title-group'>{children}</div>
    </div>
  );
};

interface IDataTableBodyProps {
  compact?: boolean;
  className?: string;
  bodyclass?: string;
  children: ReactNode;
}

export const DataTableBody: React.FC<IDataTableBodyProps> = ({
  compact,
  className,
  bodyclass,
  children,
}) => {
  return (
    <div className={`card-inner p-0 ${className ? className : ''}`}>
      <div
        className={`nk-tb-list nk-tb-ulist ${bodyclass ? bodyclass : ''} ${
          compact ? 'is-compact' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

interface IDataTableHeadProps {
  children: ReactNode;
  className?: string;
}

export const DataTableHead: React.FC<IDataTableHeadProps> = ({children, className}) => {
  return <div className={'nk-tb-item nk-tb-head ' + className}>{children}</div>;
};

interface IDataTableRowProps {
  className?: string;
  size?: string;
  children: ReactNode;
}

export const DataTableRow: React.FC<IDataTableRowProps> = ({className, size, children}) => {
  const rowClass = classNames({
    'nk-tb-col': true,
    [`${className}`]: className,
    [`tb-col-${size}`]: size,
  });
  return <div className={rowClass}>{children}</div>;
};

interface IDataTableItemProps {
  className?: string;
  children: ReactNode;
}

export const DataTableItem: React.FC<IDataTableItemProps> = ({className, children}) => {
  return <div className={`nk-tb-item ${className ? className : ''}`}>{children}</div>;
};
