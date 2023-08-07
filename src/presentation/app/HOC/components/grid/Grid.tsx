import classnames from 'classnames';
import React, {ReactNode} from 'react';

interface IColProps {
  id?: number | string;
  sm?: number | string;
  lg?: number | string;
  md?: number | string;
  xxl?: number | string;
  size?: number | string;
  className?: string;
  children?: ReactNode;
}

interface IRowProps {
  className?: string;
  children?: ReactNode;
}

export const Col: React.FC<IColProps> = ({sm, lg, md, xxl, size, className, children}) => {
  const classNames = classnames({
    [`col-sm-${sm}`]: sm,
    [`col-lg-${lg}`]: lg,
    [`col-md-${md}`]: md,
    [`col-xxl-${xxl}`]: xxl,
    [`col-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={classNames}>{children}</div>;
};

export const Row: React.FC<IRowProps> = ({className, children}) => {
  const rowClass = classnames({
    row: true,
    [`${className}`]: className,
  });
  return <div className={rowClass}>{children}</div>;
};
