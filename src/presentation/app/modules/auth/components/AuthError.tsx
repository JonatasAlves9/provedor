interface IProps {
  message: string;
}

export const AuthError = ({message}: IProps) => {
  return (
    <div className='position-relative py-5 alert alert-dismissible bg-light-danger border border-danger justify-content-arround d-flex flex-column flex-sm-row  align-items-center p-1'>
      <div className='d-flex flex-column text-danger'>
        <span className='fw-bold'>{message}</span>
      </div>

      <button
        type='button'
        className='position-absolute end-0 btn btn-icon ms-sm-auto'
        data-bs-dismiss='alert'
      >
        <span className='fw-bolder svg-icon svg-icon-1 svg-icon-danger'>x</span>
      </button>
    </div>
  );
};
