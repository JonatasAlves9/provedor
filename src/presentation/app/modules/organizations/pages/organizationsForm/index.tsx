// React
import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// Yup & Formik
import * as Yup from 'yup';
import {useFormik} from 'formik';

// Utils
import {OrganizationModel} from '@/domain/models';
import {formatBytes} from '../../helpers/formatFile';
import '../../../../utils/validation/cpfCnpjValidation';

// Components
import {notifyError, notifySuccess} from '@/presentation/app/components/Notify';

// Connection
import {Organization, OrganizationTypes} from '@/domain/usecases';
import {useAppSelector} from '@/presentation/config/hooks/useRedux';
import {OrganizationInsure} from '@/domain/usecases/OrganizationInsure';
import {loadOrganizationTypes} from '@/presentation/config/store/organization/organizationTypesSlice';
import {
  loadOrganizationById,
  loadOrganizationInsurer,
} from '@/presentation/config/store/organization/organizationSlice';

// View
import {OrganizationsFormView} from './view';

interface IProps {
  organizations: Organization;
  organizationTypes: OrganizationTypes;
  organizationInsure: OrganizationInsure;
}

export const OrganizationsForm = ({
  organizations,
  organizationTypes,
  organizationInsure,
}: IProps) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {organization: organizationById, organizationInsure: orgInsure} = useAppSelector(
    (state) => state.organizations
  );

  const {organizationTypes: organizationTypesList} = useAppSelector(
    (state) => state.organizationTypes
  );

  // GET CALLS
  const getOrganizationById = async (id: string) => {
    await organizations
      .getOrganizationById(id)
      .then((res) => {
        dispatch(loadOrganizationById(res));
      })
      .catch((err) => console.log(err));
  };

  const getInsure = async () => {
    await organizationInsure
      .getOrganizationInsurer()
      .then((res) => {
        dispatch(loadOrganizationInsurer(res));
      })
      .catch((err) => console.log(err));
  };

  const getOrganizationTypes = async () => {
    await organizationTypes
      .listOrganizationTypes()
      .then((res) => {
        dispatch(loadOrganizationTypes(res));
      })
      .catch((err) => console.log(err));
  };

  const createOrganization = async (valuesToSubmit: OrganizationModel) => {
    await organizations
      .createOrganization(valuesToSubmit)
      .then(() => {
        notifySuccess('Organização criada com sucesso');
        navigate('/organizacoes');
      })
      .catch((err) => {
        notifyError(err.message || 'Ocorreu um erro ao criar a organização');
        console.log(err);
      });
  };

  const editOrganization = async (id: string, valuesToSubmit: OrganizationModel) => {
    await organizations
      .updateOrganization(id, valuesToSubmit)
      .then(() => {
        notifySuccess('Organização atualizada com sucesso');
        navigate('/organizacoes');
      })
      .catch((err) => {
        notifyError(err.message || 'Ocorreu um erro ao atualizar a organização');
        console.log(err);
      });
  };

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(files);
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      tipo_entidade:
        organizationById && organizationTypesList
          ? {
              value: organizationById.tipo_entidade_id,
              label: organizationById.tipo_entidade_nome,
            }
          : {value: '', label: ''},

      cidade:
        organizationById && organizationTypesList
          ? {
              value: organizationById.cidade_id,
              label: organizationById.cidade_nome,
            }
          : {value: '', label: ''},
      tce_Seguradora:
        organizationById && organizationTypesList
          ? {
              value: organizationById.tce_seguradora_id,
              label: organizationById.tce_modelo_rescisao,
            }
          : {value: '', label: ''},
      cidade_id: organizationById ? '' : '',
      cep: organizationById ? organizationById.cep : '',
      site: organizationById ? organizationById.site : '',
      logo: organizationById ? organizationById.logo : '',
      cnpj: organizationById ? organizationById.cnpj : '',
      email: organizationById ? organizationById.email : '',
      numero: organizationById ? organizationById.numero : '',
      bairro: organizationById ? organizationById.bairro : '',
      telefone: organizationById ? '+' + organizationById.telefone : '',
      logradouro: organizationById ? organizationById.logradouro : '',
      complemento: organizationById ? organizationById.complemento : '',
      razao_social: organizationById ? organizationById.razao_social : '',
      nome_fantasia: organizationById ? organizationById.nome_fantasia : '',
      representante: organizationById ? organizationById.representante : '',
      tce_num_apolice: organizationById ? organizationById.tce_num_apolice : '',
      codigo_integracao: organizationById ? organizationById.codigo_integracao : '',
      tce_modelo_rescisao: organizationById ? organizationById.tce_modelo_rescisao : '',
      representante_cargo: organizationById ? organizationById.representante_cargo : '',
    },

    validationSchema: Yup.object().shape({
      tipo_entidade: Yup.object().shape({
        value: Yup.string().required('Tipo de entidade é obrigatório'),
        label: Yup.string().required('Tipo de entidade é obrigatório'),
      }),
      cidade: Yup.object()
        .shape({
          value: Yup.string().required('Cidade é obrigatória'),
          label: Yup.string().required('Cidade é obrigatória'),
        })
        .required('Cidade é obrigatória'),
      tce_Seguradora: Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
      }),
      cep: Yup.string().required('O CEP é obrigatório'),
      bairro: Yup.string().required('O bairro é obrigatório'),
      logradouro: Yup.string().required('O logradouro é obrigatório'),
      razao_social: Yup.string().required('A razão social é obrigatória'),
      nome_fantasia: Yup.string().required('O nome fantasia é obrigatório'),
      cnpj: Yup.string().cnpjType('Insira um CNPJ válido').required('O CNPJ é obrigatório'),
      numero: Yup.string().required('O número é obrigatório').required('Número é obrigatório'),
      site: Yup.string().nullable(),
      logo: Yup.string().nullable(),
      email: Yup.string().nullable(),
      telefone: Yup.string().nullable(),
      cidade_id: Yup.string().nullable(),
      complemento: Yup.string().nullable(),
      representante: Yup.string().nullable(),
      tce_num_apolice: Yup.string().nullable(),
      codigo_integracao: Yup.string().nullable(),
      tce_modelo_rescisao: Yup.string().nullable(),
      representante_cargo: Yup.string().nullable(),
    }),

    onSubmit: (values) => {
      const valuesToSubmit = {
        cep: values.cep,
        site: values.site,
        cnpj: values.cnpj,
        // to send upload file later
        logo: null,

        email: values.email,
        numero: values.numero,
        bairro: values.bairro,
        telefone: values.telefone,
        logradouro: values.logradouro,
        complemento: values.complemento,
        razao_social: values.razao_social,
        representante: values.representante,
        nome_fantasia: values.nome_fantasia,
        tce_num_apolice: values.tce_num_apolice,

        tce_seguradora_id: values.tce_Seguradora.value,
        // to send upload file later
        tce_modelo_rescisao: null,

        cidade_id: values.cidade.value,
        cidade_nome: values.cidade.label,

        codigo_integracao: values.codigo_integracao,
        tipo_entidade_id: values.tipo_entidade.value,
        tipo_entidade_nome: values.tipo_entidade.label,
        representante_cargo: values.representante_cargo,
      };

      if (id) {
        editOrganization(id, valuesToSubmit);
      } else {
        createOrganization(valuesToSubmit);
      }
    },
  });

  useEffect(() => {
    if (id) {
      getOrganizationById(id);
    }
    getOrganizationTypes();
    getInsure();
  }, []);

  return (
    <OrganizationsFormView
      navigate={navigate}
      validation={validation}
      orgInsure={orgInsure || []}
      selectedFiles={selectedFiles}
      setSelectedFiles={setSelectedFiles}
      handleAcceptedFiles={handleAcceptedFiles}
      organizationTypesList={organizationTypesList || []}
    />
  );
};
