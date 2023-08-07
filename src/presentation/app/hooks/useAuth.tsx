// React
import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react';

// Helpers
import {WithChildren} from '@/presentation/config/helpers';

// This file provides some helper functions to get authentication and logged in user.

interface AuthModel {
  data: UserModel;
  message: string;
  status: number;
}

interface UserModel {
  photo: string;
  company: string;
  isAdmin: boolean;
  isRoot: boolean;
  username: string;
  firstName: string;
  forceChangePassword: boolean;
}

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  logout: () => void;
  getLoggedUser: () => UserModel | undefined;
};

const initAuthContextPropsState = {
  auth: undefined,
  logout: () => {},
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  getLoggedUser: () => undefined,
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({children}) => {
  const getLoggedUser = () => {
    const user = sessionStorage.getItem('authUser');
    if (!user) {
      return undefined;
    } else {
      return JSON.parse(user);
    }
  };

  // - quando o usuario fizer login, criar um identificador de sessao para ele
  // - armazenar identificador em um cookie
  // - sempre que o usuario fizer uma requisicao, usar o id da sessao (extraido do cookie) para recuperar os detalhes da conta

  const [auth, setAuth] = useState<AuthModel | undefined>();
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>(getLoggedUser());

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
    sessionStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider
      value={{auth, saveAuth, currentUser, setCurrentUser, logout, getLoggedUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, useAuth};
