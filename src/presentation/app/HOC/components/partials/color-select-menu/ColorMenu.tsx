import React from 'react';

interface IColorOptionsProps {
  value: string;
  label: string;
}

export const ColorOptions: React.FC<IColorOptionsProps> = ({value, label}) => {
  return (
    <div className='d-flex'>
      <span className={`dot dot-${value} m-1`}></span>
      {label}
    </div>
  );
};
