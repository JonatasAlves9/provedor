import classNames from 'classnames';

interface IFormValidationProps {
  formClass?: string;
  message: string;
}

export const FormFeedback = ({formClass, message}: IFormValidationProps) => {
  const validationClass = classNames('invalid', formClass);

  return <span className={validationClass}>{message}</span>;
};
