import {Input} from 'reactstrap';
import phoneInput from 'react-phone-number-input/input';

export const Phone = ({...rest}) => {
  return <Input {...rest} tag={phoneInput} maxLength={15} className='form-control' />;
};
