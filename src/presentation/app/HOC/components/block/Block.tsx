import classNames from 'classnames';
import {Link} from 'react-router-dom';
import React, {ReactNode} from 'react';
import {Icon} from '@/presentation/app/HOC/components';

/**
 * @Types
 * Block
 * BlockContent
 * BlockBetween
 * BlockHead
 * BlockHeadContent
 * BlockTitle
 * BlockDes
 * BlockHeadSub
 * BlockImage
 * BackTo
 */

type HTMLTag = keyof JSX.IntrinsicElements;

interface IBlockProps {
  size?: string;
  className?: string;
  children?: ReactNode;
}

interface IBlockContentProps {
  className?: string;
  children?: ReactNode;
}

interface IBlockBetweenProps {
  size?: string;
  className?: string;
  children?: ReactNode;
}

interface IBlockHeadProps {
  size?: string;
  wide?: string;
  className?: string;
  children?: ReactNode;
}

interface IBlockHeadContentProps {
  className?: string;
  children?: ReactNode;
}

interface IBlockTitleProps extends React.HTMLProps<HTMLHeadingElement> {
  tag?: HTMLTag;
  page?: boolean;
  className?: string;
  children?: ReactNode;
}

interface IBlockDesProps {
  page?: boolean;
  className?: string;
  children?: ReactNode;
}

interface IBlockHeadSubProps {
  className?: string;
  children?: ReactNode;
}

interface IBlockImageProps {
  classNames?: string;
  children?: ReactNode;
}

interface IBackToProps {
  link: string;
  icon: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Block: React.FC<IBlockProps> = ({className, size, ...props}) => {
  const blockClass = classNames({
    'nk-block': true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{props.children}</div>;
};

export const BlockContent: React.FC<IBlockContentProps> = ({className, ...props}) => {
  const blockContentClass = classNames({
    'nk-block-content': true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{props.children}</div>;
};

export const BlockBetween: React.FC<IBlockBetweenProps> = ({className, size, ...props}) => {
  return (
    <div
      className={`${size ? `nk-block-between-${size}` : 'nk-block-between'} ${
        className ? className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export const BlockHead: React.FC<IBlockHeadProps> = ({className, size, wide, ...props}) => {
  const blockHeadClass = classNames({
    'nk-block-head': true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{props.children}</div>;
};

export const BlockHeadContent: React.FC<IBlockHeadContentProps> = ({className, ...props}) => {
  return (
    <div className={`nk-block-head-content${className ? ' ' + className : ''}`}>
      {props.children}
    </div>
  );
};

export const BlockTitle: React.FC<IBlockTitleProps> = ({
  page,
  className,
  tag: Tag = 'h3',
  ...props
}) => {
  const classes = `nk-block-title text-dark ${page ? 'page-title' : 'title'}${
    className ? ' ' + className : ''
  }`;
  return (
    <React.Fragment>
      <Tag className={classes}>{props.children}</Tag>
    </React.Fragment>
  );
};

export const BlockDes: React.FC<IBlockDesProps> = ({className, page, ...props}) => {
  const classes = `nk-block-des${className ? ' ' + className : ''}`;
  return <div className={classes}>{props.children}</div>;
};

export const BlockHeadSub: React.FC<IBlockHeadSubProps> = ({className, ...props}) => {
  return (
    <div className={`nk-block-head-sub ${className ? className : ''}`}>
      <span>{props.children}</span>
    </div>
  );
};

export const BlockImage: React.FC<IBlockImageProps> = ({classNames, ...props}) => {
  return <div className={`nk-block-image ${classNames ? classNames : ''}`}>{props.children}</div>;
};

export const BackTo: React.FC<IBackToProps> = ({className, link, icon, onClick, ...props}) => {
  const classes = `back-to${className ? ' ' + className : ''}`;
  return (
    <div className='nk-block-head-sub' onClick={onClick}>
      <Link className={classes} to={link}>
        <Icon name={icon} />
        <span>{props.children}</span>
      </Link>
    </div>
  );
};
