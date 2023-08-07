import clsx from 'clsx';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

type IProps = {
  color: 'warning' | 'danger' | 'primary' | 'info' | 'dark' | 'success' | 'none';
  to?: string;
  path?: string;
  icon?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
};

export const IconHoverAnimation = ({
  path,
  icon,
  color,
  to = '#',
  label,
  onClick,
  className,
}: IProps) => {
  const iconClass = classNames({
    [`${className}`]: className,
    ni: true,
    [`ni-${icon}`]: true,
  });

  return (
    <motion.div
      onClick={onClick}
      initial={{scale: 1}}
      whileTap={{scale: 0.9}}
      whileHover={{scale: 1.1}}
      transition={{type: 'spring', stiffness: 400, damping: 10}}
      className='d-inline-flex justify-content-center align-items-center px-1'
      style={{
        cursor: 'pointer',
      }}
    >
      <Link
        to={to}
        className={clsx('btn btn-sm ', {
          'btn-icon': !label,
        })}
      >
        <em className={`${iconClass} fs-5 text-${color}`}></em>
        <span>{label}</span>
      </Link>
    </motion.div>
  );
};
