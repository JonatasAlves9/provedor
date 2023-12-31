import React from 'react';
import {Icon} from '@/presentation/app/HOC/components';

interface ISlickArrowProps {
  currentSlide: number;
  slideCount: number;
}

export const SlickArrowLeft: React.FC<ISlickArrowProps> = ({
  currentSlide,
  slideCount,
  ...props
}) => (
  <div
    {...props}
    className={`slick-arrow-prev slick-arrow ${currentSlide === 0 ? 'slick-disabled' : ''}`}
    aria-hidden='true'
    aria-disabled={currentSlide === 0}
    role='button'
  >
    <a href='#prev' className='slick-prev' onClick={(ev) => ev.preventDefault()}>
      <Icon name='chevron-left' />
    </a>
  </div>
);

export const SlickArrowRight: React.FC<ISlickArrowProps> = ({
  currentSlide,
  slideCount,
  ...props
}) => (
  <div
    {...props}
    role='button'
    className={`slick-arrow-next slick-arrow ${
      currentSlide === slideCount - 3 ? 'slick-disabled' : ''
    }`}
    aria-hidden='true'
    aria-disabled={currentSlide === slideCount - 3}
  >
    <a href='#next' className='slick-next' onClick={(ev) => ev.preventDefault()}>
      <Icon name='chevron-right' />
    </a>
  </div>
);
