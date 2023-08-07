import {useState, FC} from 'react';
import {Icon, Button} from '@/presentation/app/HOC/components';

interface INSComponentProps {
  max: number;
  min: number;
  step?: number;
  color?: string;
  outline?: boolean;
  defaultVal?: number;
}

export const NSComponent: FC<INSComponentProps> = ({
  max,
  min,
  step,
  color,
  outline,
  defaultVal,
}) => {
  const [value, setValue] = useState(defaultVal || min);

  const addVal = (n: number) => {
    if (value !== max) {
      if (step) {
        n = step;
      }
      setValue((prevValue) => Math.min(prevValue + n, max));
    }
  };

  const reduceVal = (n: number) => {
    if (value > 0 && value !== min) {
      if (step) {
        n = step;
      }
      setValue((prevValue) => Math.max(prevValue - n, min));
    }
  };

  return (
    <div className='form-control-wrap number-spinner-wrap'>
      <Button
        outline={outline ? true : false}
        color={color}
        disabled={value === min}
        className='btn-icon number-spinner-btn number-minus'
        onClick={() => reduceVal(1)}
      >
        <Icon name='minus'></Icon>
      </Button>
      <input
        type='number'
        className='form-control number-spinner'
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        max={max}
        min={min}
      />
      <Button
        outline={outline ? true : false}
        color={color}
        disabled={value === max}
        className='btn-icon number-spinner-btn number-plus'
        onClick={() => addVal(1)}
      >
        <Icon name='plus'></Icon>
      </Button>
    </div>
  );
};
