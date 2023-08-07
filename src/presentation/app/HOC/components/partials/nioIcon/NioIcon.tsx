import React, {useState} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Icon, Button} from '@/presentation/app/HOC/components';

interface NicoIconCardProps {
  iconName: string;
  tag: string;
}

export const NicoIconCard: React.FC<NicoIconCardProps> = ({iconName, tag}) => {
  const [copy, setCopy] = useState<boolean>(false);
  const [text] = useState<string>(tag);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <>
      <li className='preview-icon-item'>
        <div className={`preview-icon-box card ${copy ? 'clipboard-success' : ''}`}>
          <CopyToClipboard text={text}>
            <Button
              type='button'
              className='btn-icon btn-clipboard clipboard-init clipboard-text'
              onClick={handleCopy}
            >
              <Icon name='copy' />
            </Button>
          </CopyToClipboard>
          <div className='preview-icon-wrap'>
            <Icon name={iconName} />
          </div>
          <span className='preview-icon-name'>{iconName}</span>
          <span className='clipboard-success-message text-primary'>Copied</span>
        </div>
      </li>
    </>
  );
};
