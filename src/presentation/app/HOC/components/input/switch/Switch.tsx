import React, {useState, InputHTMLAttributes} from 'react';

interface InputSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
}

export const InputSwitch: React.FC<InputSwitchProps> = ({label, id, checked, ...props}) => {
  const [inputCheck, setCheck] = useState(checked ?? false);

  return (
    <React.Fragment>
      <input
        type='checkbox'
        className='custom-control-input'
        defaultChecked={inputCheck}
        onClick={() => setCheck(!inputCheck)}
        id={id}
        {...props}
      />
      <label className='custom-control-label' htmlFor={id}>
        {label}
      </label>
    </React.Fragment>
  );
};
