import {ReactNode} from 'react';

interface IUserGroupProps {
  className?: string;
  children: ReactNode;
}

export const UserGroup = ({className, ...props}: IUserGroupProps) => {
  return <div className={`user-avatar-group ${className ? className : ''}`}>{props.children}</div>;
};
