import classNames from 'classnames';
import React, {ReactNode} from 'react';

type HTMLTag = keyof JSX.IntrinsicElements;

interface IOverlineTitleProps {
  className?: string;
  alt?: boolean;
  tag?: HTMLTag;
  children: ReactNode;
}

export const OverlineTitle: React.FC<IOverlineTitleProps> = ({className, alt, tag, children}) => {
  const classes = classNames({
    'overline-title': true,
    [`${className}`]: className,
    'overline-title-alt': alt,
  });

  if (!tag) {
    return <h6 className={classes}>{children}</h6>;
  } else {
    const TagComponent = tag;
    return <TagComponent className={classes}>{children}</TagComponent>;
  }
};
