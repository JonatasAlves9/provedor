// React
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form, Spinner, Alert} from 'reactstrap';

// Components
import AuthFooter from '../../AuthFooter';
import Head from '@/presentation/config/layout/head/Head';
import {
  Icon,
  Block,
  Button,
  BlockDes,
  BlockHead,
  BlockTitle,
  PreviewCard,
  BlockContent,
} from '@/presentation/app/HOC/components';

// Yup & Formik
import * as Yup from 'yup';
import {useFormik} from 'formik';

// Helpers
import clsx from 'clsx';
import {Authentication} from '@/domain/usecases';
import {useAuth} from '@/presentation/app/hooks/useAuth';
import {SessionStorageAdapter} from '@/infra/cache/session-storage-adapter';
import {AuthError} from '../../components/AuthError';

// assets
import LogoDark from '@/presentation/config/images/default-dark.png';

interface IAuth {
  authentication: Authentication;
  session: SessionStorageAdapter;
}

export function Login({authentication, session}: IAuth) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);

  const {saveAuth, setCurrentUser} = useAuth();

  const formik = useFormik({
    // to remove later
    initialValues: {
      cpf: '00000000000',
      password: '102030',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required('Por favor, insira sua senha'),
      cpf: Yup.string().required('Por favor, insira seu usuário'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await authentication.auth(values);
        saveAuth(response);
        setCurrentUser(response.data);
        session.set('authUser', response.data);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
        saveAuth(undefined);
        setError(true);
      }
    },
  });

  return (
    <>
      <Head title='Login' />
      <Block className='nk-block-middle nk-auth-body  wide-xs'>
        <div className='brand-logo pb-4 text-center'>
          <Link to={'/'} className='logo-link'>
            <img className='logo-dark logo-img logo-img-lg' src={LogoDark} alt='logo-dark' />
          </Link>
        </div>

        <PreviewCard className='card-bordered' bodyClass='card-inner-lg'>
          <BlockHead>
            <BlockContent>
              <BlockTitle className="text-dark" tag='h4'>Bem vindo!</BlockTitle>
              <BlockDes>
                <p>Faça login para continuar</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>

          {error && <AuthError message='Dados de autenticação inválidos' />}

          <Form className='is-alter' onSubmit={formik.handleSubmit}>
            <div className='form-group'>
              <div className='form-label-group'>
                <label className='form-label' htmlFor='default-01'>
                  CPF
                </label>
              </div>
              <div className='form-control-wrap'>
                <input
                  name='cpf'
                  type='text'
                  id='default-01'
                  placeholder='CPF'
                  autoComplete='off'
                  {...formik.getFieldProps('cpf')}
                  className='form-control-lg form-control'
                />
                {formik.touched.cpf && formik.errors.cpf && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.cpf}</span>
                  </div>
                )}
              </div>
            </div>

            <div className='form-group'>
              <div className='form-label-group'>
                <label className='form-label' htmlFor='password'>
                  Senha
                </label>
                <Link className='link link-primary link-sm' to='/auth/forgot-password'>
                  Esqueceu sua senha?
                </Link>
              </div>
              <div className='form-control-wrap'>
                <a
                  href='#password'
                  onClick={(ev) => {
                    ev.preventDefault();
                    setPassState(!passState);
                  }}
                  className={`form-icon lg form-icon-right passcode-switch ${
                    passState ? 'is-hidden' : 'is-shown'
                  }`}
                >
                  <Icon name='eye' className='passcode-icon icon-show'></Icon>

                  <Icon name='eye-off' className='passcode-icon icon-hide'></Icon>
                </a>
                <input
                  type={passState ? 'text' : 'password'}
                  id='password'
                  autoComplete='off'
                  {...formik.getFieldProps('password')}
                  className={`form-control-lg form-control ${passState ? 'is-hidden' : 'is-shown'}`}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.password}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='form-group'>
              <Button size='lg' className='btn-block' type='submit' color='primary'>
                {loading ? <Spinner size='sm' color='light' /> : 'Continue'}
              </Button>
            </div>
          </Form>

          <div className='form-note-s2 text-center pt-4'>
            Novo aqui? <Link to={`/auth-register`}>Criar sua conta</Link>
          </div>
        </PreviewCard>
      </Block>
      <AuthFooter />
    </>
  );
}
