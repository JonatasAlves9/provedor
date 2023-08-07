import React, {useState} from 'react';
import {UserAvatar, LinkList, LinkItem} from '@/presentation/app/HOC/components';
import {DropdownToggle, DropdownMenu, Dropdown} from 'reactstrap';
import {useAuth} from '@/presentation/app/hooks/useAuth';

const User = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);
  const {currentUser, logout} = useAuth();

  return (
    <Dropdown isOpen={open} className='user-dropdown' toggle={toggle}>
      <DropdownToggle
        tag='a'
        href='#toggle'
        className='dropdown-toggle'
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className='user-toggle'>
          <UserAvatar icon='user-alt' className='sm bg-primary-dim' />
          <div className='user-info d-none d-xl-block'>
            <div className='user-status user-status-invest'>
              {currentUser?.isAdmin ? 'Administrador' : ''}
            </div>
            <div className='user-name dropdown-indicator'>
              {currentUser?.firstName}
            </div>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu end className='dropdown-menu-md dropdown-menu-s1'>
        <div className='dropdown-inner user-card-wrap bg-lighter d-none d-md-block'>
          <div className='user-card sm'>
            <div className='user-avatar bg-primary-dim'>
              <span>JD</span>
            </div>
            <div className='user-info'>
              <span className='lead-text'>John Doe</span>
              <span className='sub-text'>adasi@software.com</span>
            </div>
          </div>
        </div>
        <div className='dropdown-inner'>
          <LinkList>
            <LinkItem to={'/user-profile-regular'} icon='user-alt' onClick={toggle}>
              Perfil
            </LinkItem>
            <LinkItem to={'/user-profile-setting'} icon='setting-alt' onClick={toggle}>
              Configurações
            </LinkItem>
            <LinkItem to={'/user-profile-activity'} icon='activity-alt' onClick={toggle}>
              Atividade do Login
            </LinkItem>
          </LinkList>
        </div>
        <div className='dropdown-inner'>
          <LinkList>
            <LinkItem onClick={logout} icon='signout'>
              <span>Sair</span>
            </LinkItem>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
