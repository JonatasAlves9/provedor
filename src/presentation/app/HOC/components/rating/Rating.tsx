import React, {useState} from 'react';
import {Icon} from '@/presentation/app/HOC/components';

interface IRatingProps {
  type: string;
  initVal: number;
  className?: string;
}

export const Rating: React.FC<IRatingProps> = ({type, initVal, className}) => {
  const [rating, setRating] = useState<number>(initVal);

  return (
    <ul className={`rating ${className ? className : ''}`}>
      <li onClick={() => setRating(1)} style={{cursor: 'pointer'}}>
        <Icon name={rating >= 1 ? `${type}-fill` : type}></Icon>
      </li>
      <li onClick={() => setRating(2)} style={{cursor: 'pointer'}}>
        <Icon name={rating >= 2 ? `${type}-fill` : type}></Icon>
      </li>
      <li onClick={() => setRating(3)} style={{cursor: 'pointer'}}>
        <Icon name={rating >= 3 ? `${type}-fill` : type}></Icon>
      </li>
      <li onClick={() => setRating(4)} style={{cursor: 'pointer'}}>
        <Icon name={rating >= 4 ? `${type}-fill` : type}></Icon>
      </li>
      <li onClick={() => setRating(5)} style={{cursor: 'pointer'}}>
        <Icon name={rating > 4 ? `${type}-fill` : type}></Icon>
      </li>
    </ul>
  );
};
