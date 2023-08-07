import React, {ReactNode} from 'react';

interface DropzoneContainerProps {
  input: ReactNode;
  previews: ReactNode;
  submitButton: ReactNode;
  files: any[]; // to define file type later
  extra: {
    maxFiles: number;
  };
}

const DropzoneContainer: React.FC<DropzoneContainerProps> = (props) => {
  const {
    input,
    previews,
    submitButton,
    files,
    extra: {maxFiles},
  } = props;
  return (
    <div
      className='dropzone upload-zone small bg-lighter my-2 dz-clickable'
      style={{overflow: 'hidden'}}
    >
      {previews}

      {files.length < maxFiles && input}

      {files.length > 0 && submitButton}
    </div>
  );
};

export default DropzoneContainer;
