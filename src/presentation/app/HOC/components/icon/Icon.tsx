import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

interface IconProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  name: string;
}

export const Icon: React.FC<IconProps> = ({name, id, className, style, ...props}) => {
  const iconClass = classNames({
    [`${className}`]: className,
    icon: true,
    ni: true,
    [`ni-${name}`]: true,
  });
  return <em className={iconClass} id={id} style={style} {...props}></em>;
};
