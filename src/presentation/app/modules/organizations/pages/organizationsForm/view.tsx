// React
import React from 'react';
import Dropzone from 'react-dropzone';
import {Card, Input, Label, Form, Row, Col} from 'reactstrap';
import {
  Icon,
  Block,
  Button,
  BlockHead,
  BlockTitle,
  BlockBetween,
  BlockHeadContent,
} from '@/presentation/app/HOC/components';

// Utils & Configs
import Head from '@/presentation/config/layout/head/Head';
import {generateOptions} from '../../helpers/convertEvent';
import {bytesToMegaBytes} from '@/presentation/app/utils/Utils';
import Content from '@/presentation/config/layout/content/Content';

// Components
import {Phone} from '@/presentation/app/components/Phone';
import {FormFeedback} from '@/presentation/app/components/FormFeedback';
import {iconsType} from '@/presentation/config/partials/file-manager/components/Icons';
import {CnpjInput, SelectCityAsync, SelectInput, ZipCodeInput} from 'adasi_components';

export const OrganizationsFormView = ({
  navigate,
  orgInsure,
  validation,
  selectedFiles,
  setSelectedFiles,
  handleAcceptedFiles,
  organizationTypesList,
}) => {
  return (
    <React.Fragment>
      <Head title='Organizações'></Head>
      <Content>
        <BlockHead size='sm'>
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag='h4'>Adicionar Organização</BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Card className='card-bordered'>
          <div className='card-aside-wrap'>
            <div className='card-inner card-inner-md'>
              <Block>
                <Form
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <div className='nk-data data-list'>
                    <div className='data-head'>
                      <h6 className='overline-title'>Dados Básicos</h6>
                    </div>

                    <Row className='mt-1 g-4'>
                      <Col md={4}>
                        <Label>Tipo</Label>
                        <SelectInput
                          value={validation.values.tipo_entidade}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          isDark={false}
                          name='tipo_entidade'
                          options={generateOptions(organizationTypesList)}
                          className={`${
                            !!(validation.touched.tipo_entidade && validation.errors.tipo_entidade)
                              ? 'border rounded border-1 border-danger '
                              : 'react-select-container'
                          }`}
                          inputId={'tipo_entidade'}
                          isMulti={false}
                        />
                        {validation.touched.tipo_entidade && validation.errors.tipo_entidade ? (
                          <span className='invalid'>
                            {String(validation.errors.tipo_entidade.value)}
                          </span>
                        ) : null}
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='name'>CNPJ</Label>
                        <CnpjInput
                          handleBlur={validation.handleBlur}
                          handleChange={validation.handleChange}
                          className='form-control'
                          value={validation.values.cnpj || ''}
                          inputId='cnpj'
                          invalid={!!(validation.touched.cnpj && validation.errors.cnpj)}
                        />
                        {validation.touched.cnpj && validation.errors.cnpj ? (
                          <FormFeedback message={String(validation.errors.cnpj)} />
                        ) : null}
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='codigo_integracao'>Código de Integração (API)</Label>
                        <Input
                          id='codigo_integracao'
                          onChange={validation.handleChange}
                          className='form-control'
                          type='text'
                          value={validation.values.codigo_integracao || ''}
                          onBlur={validation.handleBlur}
                          name='codigo_integracao'
                        />
                      </Col>

                      <Col md={6}>
                        <Label htmlFor='name' className='form-label '>
                          Razão Social
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.razao_social || ''}
                          onBlur={validation.handleBlur}
                          name='razao_social'
                          type='text'
                          className='form-control'
                          invalid={
                            !!(validation.touched.razao_social && validation.errors.razao_social)
                          }
                        />
                        {validation.touched.razao_social && validation.errors.razao_social ? (
                          <FormFeedback message={String(validation.errors.razao_social)} />
                        ) : null}
                      </Col>

                      <Col md={6}>
                        <Label htmlFor='name' className='form-label '>
                          Nome fantasia
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.nome_fantasia || ''}
                          onBlur={validation.handleBlur}
                          name='nome_fantasia'
                          type='text'
                          className='form-control'
                          invalid={
                            !!(validation.touched.nome_fantasia && validation.errors.nome_fantasia)
                          }
                        />
                        {validation.touched.nome_fantasia && validation.errors.nome_fantasia ? (
                          <FormFeedback message={String(validation.errors.nome_fantasia)} />
                        ) : null}
                      </Col>

                      <Col md={6}>
                        <Label htmlFor='name' className='form-label '>
                          Representante
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.representante || ''}
                          onBlur={validation.handleBlur}
                          name='representante'
                          type='text'
                          className='form-control'
                        />
                      </Col>

                      <Col md={6}>
                        <Label htmlFor='name' className='form-label '>
                          Cargo
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.representante_cargo || ''}
                          onBlur={validation.handleBlur}
                          name='representante_cargo'
                          type='text'
                          className='form-control'
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className='nk-data data-list'>
                    <div className='data-head'>
                      <h6 className='overline-title'>Contato</h6>
                    </div>

                    <Row className='mt-1 g-4'>
                      <Col md={4}>
                        <Label htmlFor='phone2' className='form-label '>
                          Telefone
                        </Label>
                        <Phone
                          name='telefone'
                          id={'telefone'}
                          value={validation.values.telefone || ''}
                          onBlur={validation.handleBlur}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e) {
                              const inputValue = {
                                target: {
                                  name: 'telefone',
                                  value: e,
                                },
                              };
                              validation.handleChange(inputValue);
                            }
                          }}
                        />
                      </Col>

                      <Col md={4}>
                        <label htmlFor='name' className='form-label '>
                          Email
                        </label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.email || ''}
                          onBlur={validation.handleBlur}
                          name='email'
                          type='email'
                          className='form-control'
                        />
                      </Col>

                      <Col md={4}>
                        <label htmlFor='name' className='form-label '>
                          Site
                        </label>
                        <input
                          onChange={validation.handleChange}
                          value={validation.values.site || ''}
                          onBlur={validation.handleBlur}
                          type='text'
                          name='site'
                          className='form-control'
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className='nk-data data-list'>
                    <div className='data-head'>
                      <h6 className='overline-title'>Endereço</h6>
                    </div>

                    <Row className='mt-1 g-4'>
                      <Col md={4}>
                        <Label htmlFor='name' className='form-label '>
                          CEP
                        </Label>
                        <Input
                          tag={ZipCodeInput}
                          className='form-control'
                          id='cep'
                          onChange={validation.handleChange}
                          changeInputs={(e) => {
                            validation.setValues({
                              ...validation.values,
                              cep: e.cep,
                              logradouro: e.logradouro,
                              bairro: e.bairro,
                              cidade: {
                                label: `${e.localidade} - ${e.uf} `,
                                value: e.ibge,
                              },
                            });
                          }}
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            validation.handleBlur(e);
                          }}
                          validation={validation}
                          value={validation.values.cep || ''}
                          getValues={undefined}
                          loading={undefined}
                          invalid={!!(validation.touched.cep && validation.errors.cep)}
                        />
                        {validation.touched.cep && validation.errors.cep ? (
                          <FormFeedback message={String(validation.errors.cep)} />
                        ) : null}
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='name' className='form-label '>
                          Logradouro
                        </Label>
                        <Input
                          type='text'
                          className='form-control'
                          name='logradouro'
                          onChange={validation.handleChange}
                          value={validation.values.logradouro || ''}
                          onBlur={validation.handleBlur}
                          invalid={
                            !!(validation.touched.logradouro && validation.errors.logradouro)
                          }
                        />
                        {validation.touched.logradouro && validation.errors.logradouro ? (
                          <FormFeedback message={String(validation.errors.logradouro)} />
                        ) : null}
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='name' className='form-label '>
                          Número
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.numero || ''}
                          onBlur={validation.handleBlur}
                          type='text'
                          className='form-control'
                          name='numero'
                          invalid={!!(validation.touched.numero && validation.errors.numero)}
                        />
                        {validation.touched.numero && validation.errors.numero ? (
                          <FormFeedback message={String(validation.errors.numero)} />
                        ) : null}
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='name' className='form-label '>
                          Complemento
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.complemento || ''}
                          onBlur={validation.handleBlur}
                          name='complemento'
                          type='text'
                          className='form-control'
                        />
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='name' className='form-label '>
                          Bairro
                        </Label>
                        <Input
                          type='text'
                          className='form-control'
                          name='bairro'
                          onChange={validation.handleChange}
                          value={validation.values.bairro || ''}
                          onBlur={validation.handleBlur}
                          invalid={!!(validation.touched.bairro && validation.errors.bairro)}
                        />
                        {validation.touched.bairro && validation.errors.bairro ? (
                          <FormFeedback message={String(validation.errors.bairro)} />
                        ) : null}
                      </Col>

                      <Col md={4}>
                        <Label htmlFor='name' className='form-label '>
                          Cidade
                        </Label>
                        <SelectCityAsync
                          name='cidade'
                          id={'cidade'}
                          onChange={validation.handleChange}
                          value={validation.values.cidade}
                          onBlur={validation.handleBlur}
                          isDark={false}
                          apiRoute={'https://www.adasi.dev/rade/common/city'}
                          className={` ${
                            !!(validation.touched.cidade && validation.errors.cidade)
                              ? 'border rounded border-1 border-danger'
                              : ''
                          }`}
                        />
                        {!!validation.touched.cidade && validation.errors.cidade ? (
                          <FormFeedback
                            message={String(
                              validation.errors.cidade?.value || validation.errors.cidade
                            )}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  </div>

                  <div className='nk-data data-list'>
                    <div className='data-head'>
                      <h6 className='overline-title'>TCE</h6>
                    </div>

                    <Row className='mt-1 g-4'>
                      <Col md={6}>
                        <Label>Seguradora TCE</Label>
                        <SelectInput
                          value={validation.values.tce_Seguradora}
                          name='tce_Seguradora'
                          isMulti={false}
                          inputId='tce_Seguradora'
                          onBlur={validation.handleBlur}
                          placeholder='Seguradora TCE'
                          onChange={validation.handleChange}
                          isDark={false}
                          options={generateOptions(orgInsure)}
                        />
                      </Col>

                      <Col md={6}>
                        <Label htmlFor='name' className='form-label '>
                          Número da Apólice
                        </Label>
                        <Input
                          onChange={validation.handleChange}
                          value={validation.values.tce_num_apolice || ''}
                          onBlur={validation.handleBlur}
                          type='text'
                          className='form-control'
                          name='tce_num_apolice'
                        />
                      </Col>

                      <Col md={12}>
                        <Label>Logomarca</Label>
                        <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}>
                          {({getRootProps, getInputProps}) => (
                            <section>
                              <div
                                {...getRootProps()}
                                className='dropzone upload-zone small bg-lighter my-2 dz-clickable'
                              >
                                <input {...getInputProps()} />
                                <div className='dz-message'>
                                  <span className='dz-message-text'>
                                    <span>Arraste e solte</span> seu arquivo aqui ou{' '}
                                    <span>selecione</span>
                                  </span>
                                </div>
                              </div>
                            </section>
                          )}
                        </Dropzone>

                        <div>
                          <h6 className='title'>Uploaded Files</h6>
                          {selectedFiles.length > 0 &&
                            selectedFiles.map((file, index) => (
                              <div className='nk-upload-item' key={index}>
                                <div className='nk-upload-icon'>
                                  {iconsType[file.type]
                                    ? iconsType[file.type]
                                    : iconsType['others']}
                                </div>
                                <div className='nk-upload-info'>
                                  <div className='nk-upload-title'>
                                    <span className='title'>{file.name}</span>
                                  </div>
                                  <div className='nk-upload-size'>
                                    {bytesToMegaBytes(file.size)} MB
                                  </div>
                                </div>
                                <div className='nk-upload-action'>
                                  <a
                                    href='#delete'
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      setSelectedFiles([]);
                                    }}
                                    className='btn btn-icon btn-trigger'
                                  >
                                    <Icon name='trash'></Icon>
                                  </a>
                                </div>
                              </div>
                            ))}
                        </div>
                      </Col>

                      <Col md={12}>
                        <Label>Modelo de Termo de Recisão</Label>
                        <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}>
                          {({getRootProps, getInputProps}) => (
                            <section>
                              <div
                                {...getRootProps()}
                                className='dropzone upload-zone small bg-lighter my-2 dz-clickable'
                              >
                                <input {...getInputProps()} />
                                <div className='dz-message'>
                                  <span className='dz-message-text'>
                                    <span>Arraste e solte</span> seu arquivo aqui ou{' '}
                                    <span>selecione</span>
                                  </span>
                                </div>
                              </div>
                            </section>
                          )}
                        </Dropzone>

                        <div>
                          <h6 className='title'>Uploaded Files</h6>
                          {selectedFiles.length > 0 &&
                            selectedFiles.map((file, index) => (
                              <div className='nk-upload-item' key={index}>
                                <div className='nk-upload-icon'>
                                  {iconsType[file.type]
                                    ? iconsType[file.type]
                                    : iconsType['others']}
                                </div>
                                <div className='nk-upload-info'>
                                  <div className='nk-upload-title'>
                                    <span className='title'>{file.name}</span>
                                  </div>
                                  <div className='nk-upload-size'>
                                    {bytesToMegaBytes(file.size)} MB
                                  </div>
                                </div>
                                <div className='nk-upload-action'>
                                  <a
                                    href='#delete'
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      setSelectedFiles([]);
                                    }}
                                    className='btn btn-icon btn-trigger'
                                  >
                                    <Icon name='trash'></Icon>
                                  </a>
                                </div>
                              </div>
                            ))}
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row className='d-flex justify-content-end align-items-center mt-4'>
                    <Col xs='6' md='2'>
                      <ul className='align-center flex-wrap flex-sm-nowrap gx-4 gy-2'>
                        <li>
                          <a
                            href='#cancel'
                            onClick={(ev) => {
                              ev.preventDefault();
                              navigate('/organizacoes');
                            }}
                            className='link link-light'
                          >
                            Cancelar
                          </a>
                        </li>
                        <li>
                          <Button color='primary' size='md' type='submit'>
                            Salvar
                          </Button>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Form>
              </Block>
            </div>
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};
