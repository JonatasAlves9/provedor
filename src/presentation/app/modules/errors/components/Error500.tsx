import {FC} from 'react';
import {Link} from 'react-router-dom';
import ErrorImage from '../../../../config/images/gfx/error-504.svg';
import {Block, BlockContent, Button} from '@/presentation/app/HOC/components';

const Error500: FC = () => {
  return (
    <>
      <Block className='nk-block-middle wide-md mx-auto'>
        <BlockContent className='nk-error-ld text-center'>
          <img className='nk-error-gfx' src={ErrorImage} alt='error' />
          <div className='wide-xs mx-auto'>
            <h3 className='nk-error-title'>Oops! Why you’re here?</h3>
            <p className='nk-error-text'>
              We are very sorry for inconvenience. It looks like you’re try to access a page that
              either has been deleted or never existed.
            </p>
            <Link to={`/`}>
              <Button color='primary' size='lg' className='mt-2'>
                Back To Home
              </Button>
            </Link>
          </div>
        </BlockContent>
      </Block>
    </>
  );
};

export {Error500};
