import React from 'react';
import {UncontrolledTooltip} from 'reactstrap';
import {Icon} from '@/presentation/app/HOC/components';

export declare const top: 'top';
export declare const left: 'left';
export declare const right: 'right';
export declare const bottom: 'bottom';

type HTMLTag = keyof JSX.IntrinsicElements;

export declare type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';
export declare type BasePlacement = typeof top | typeof bottom | typeof right | typeof left;
export declare type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

interface ITooltipComponentProps {
  id?: string;
  icon?: string;
  text?: string;
  Tag?: HTMLTag;
  iconClass?: string;
  containerClassName?: string;
  direction: AutoPlacement | BasePlacement | VariationPlacement;
}

export const TooltipComponent: React.FC<ITooltipComponentProps> = ({
  iconClass,
  icon,
  id,
  direction,
  text,
  containerClassName,
  Tag,
}) => {
  return (
    <React.Fragment>
      {Tag ? (
        <Tag className={containerClassName} id={id}>
          {' '}
          <Icon className={`${iconClass ? iconClass : ''}`} name={icon}></Icon>
        </Tag>
      ) : (
        <Icon className={`${iconClass ? iconClass : ''}`} name={icon} id={id}></Icon>
      )}
      <UncontrolledTooltip autohide={false} placement={direction} target={id}>
        {text}
      </UncontrolledTooltip>
    </React.Fragment>
  );
};
