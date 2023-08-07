import React, {useState} from 'react';
import {Collapse} from 'reactstrap';

interface IAccordionProps {
  className?: string;
  variation?: string;
}

export const Accordion: React.FC<IAccordionProps> = ({className, variation}) => {
  const [isOpen, setIsOpen] = useState<string>('1');

  const toggleCollapse = (param: string) => {
    if (param === isOpen) {
      setIsOpen('0');
    } else {
      setIsOpen(param);
    }
  };

  return (
    <div
      className={`accordion${variation ? ' accordion-s' + variation : ''}${
        className ? ' ' + className : ''
      }`}
    >
      <div className='accordion-item'>
        <div
          className={`accordion-head${isOpen !== '1' ? ' collapsed' : ''}`}
          onClick={() => toggleCollapse('1')}
        >
          <h6 className='title'>What is Dashlite?</h6>
          <span className='accordion-icon'></span>
        </div>
        <Collapse className='accordion-body' isOpen={isOpen === '1'}>
          <div className='accordion-inner'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Collapse>
      </div>
      {/* Add more accordion items with different content as needed */}
    </div>
  );
};
