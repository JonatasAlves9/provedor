import classNames from 'classnames';
import React, {ButtonHTMLAttributes, ReactNode} from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  size?: string;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  color,
  size,
  outline,
  disabled,
  className,
  ...props
}) => {
  const buttonClass = classNames({
    btn: true,
    [`btn-${color}`]: !outline,
    [`btn-outline-${color}`]: outline,
    [`btn-${size}`]: size,
    disabled: disabled,
    [`${className}`]: className,
  });
  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
};
