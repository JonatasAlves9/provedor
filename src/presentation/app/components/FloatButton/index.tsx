import {useState} from 'react';
import {motion} from 'framer-motion';

export const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <>
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.9}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className='btn btn-primary d-flex align-items-center justify-content-center'
            style={{
              width: '80px',
              height: '40px',
              borderRadius: '5px',
              position: 'fixed',
              right: '20px',
              bottom: '170px',
            }}
          ></motion.button>
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.9}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className='btn btn-primary d-flex align-items-center justify-content-center'
            style={{
              width: '80px',
              height: '40px',
              borderRadius: '5px',
              position: 'fixed',
              right: '20px',
              bottom: '120px',
            }}
          >
            Button
          </motion.button>
        </>
      )}

      <motion.button
        onClick={handleButtonClick}
        whileHover={{scale: 1.01}}
        whileTap={{scale: 0.9}}
        animate={{rotate: isOpen ? 180 : 0}}
        transition={{duration: 0.3}}
        className='btn btn-primary d-flex align-items-center justify-content-center'
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          position: 'fixed',
          right: '20px',
          bottom: '70px',
        }}
      >
        <span className='d-inline-block'>{isOpen ? 'X' : '+'}</span>
      </motion.button>
    </>
  );
};
