import Select from 'react-select';

export const RSelect = ({...props}) => {
  return (
    <div className='form-control-select'>
      <Select
        className={`react-select-container ${props.className ? props.className : ''}`}
        classNamePrefix='react-select'
        {...props}
      />
    </div>
  );
};
