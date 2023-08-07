import {Icon} from '../../index';
import React, {useState, HTMLAttributes} from 'react';

interface IOutlinedInputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  size?: string;
  icon?: string;
}

export const OutlinedInput: React.FC<IOutlinedInputProps> = ({label, size, id, icon, ...props}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={`form-control-wrap ${focus ? 'focused' : ''}`}>
      {icon && (
        <div className='form-icon form-icon-right xl'>
          <Icon name={icon}></Icon>
        </div>
      )}
      <input
        type='text'
        className={`form-control-outlined form-control ${size ? `form-control-${size}` : ''}`}
        id={id}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
      <label className='form-label-outlined' htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
