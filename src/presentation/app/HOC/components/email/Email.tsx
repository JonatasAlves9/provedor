import React, {ReactNode} from 'react';

interface IEmailWrapperProps {
  children?: ReactNode;
}

interface IEmailHeaderProps {
  children?: ReactNode;
}

interface IEmailBodyProps {
  centered?: boolean;
  children?: ReactNode;
}

interface IEmailBodyContentProps {
  className?: string;
  children?: ReactNode;
}

interface IEmailFooterProps {
  children?: ReactNode;
}

export const EmailWrapper: React.FC<IEmailWrapperProps> = ({children}) => {
  return (
    <table className='email-wraper'>
      <tbody>
        <tr>
          <td className='py-5'>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailHeader: React.FC<IEmailHeaderProps> = ({children}) => {
  return (
    <table className='email-header'>
      <tbody>
        <tr>
          <td className='text-center pb-4'>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailBody: React.FC<IEmailBodyProps> = ({centered, children}) => {
  return (
    <table className={`email-body ${centered ? 'text-center' : ''}`}>
      <tbody>{children}</tbody>
    </table>
  );
};

export const EmailBodyContent: React.FC<IEmailBodyContentProps> = ({className, children}) => {
  return (
    <tr>
      <td className={`${className ? className : ''}`}>{children}</td>
    </tr>
  );
};

export const EmailFooter: React.FC<IEmailFooterProps> = ({children}) => {
  return (
    <table className='email-footer'>
      <tbody>
        <tr>
          <td className='text-center pt-4'>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};
