import {Button, CardBody, Col, Modal, Row} from 'reactstrap';

interface IProps {
  isOpen: boolean;
  toggle: (id?: number) => void;
  goBack: (id?: number) => void;
  handleDelete: () => void;
}

export const ModalDelete = ({isOpen, toggle, handleDelete, goBack}: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        toggle();
      }}
      centered
      id='zoomIn'
      zIndex={10000}
      backdrop={'static'}
      modalClassName='zoomIn'
    >
      <Col lg={12}>
        <CardBody className='p-5'>
          <Col className='text-center mb-2'>
            {/*@ts-ignore*/}
            <lord-icon
              src='https://cdn.lordicon.com/tntmaygd.json'
              trigger='loop'
              colors='primary:#dc3545,secondary:#dc3545'
              style={{width: '120px', height: '120px'}}
            >
              {/*@ts-ignore*/}
            </lord-icon>
          </Col>

          <Row className='text-center'>
            <h4 className='mb-3'>Deseja excluir?</h4>
            <p className='text-muted mb-4'>Tem certeza que deseja excluir?</p>
          </Row>

          <ul className='d-flex justify-content-center align-center flex-wrap flex-sm-nowrap gx-4 gy-2'>
            <li>
              <a
                href='#cancel'
                onClick={(ev) => {
                  ev.preventDefault();
                  goBack();
                }}
                className='link link-light'
              >
                Cancelar
              </a>
            </li>
            <li>
              <Button type='button' className='btn btn-danger' onClick={() => handleDelete()}>
                Excluir
              </Button>
            </li>
          </ul>
        </CardBody>
      </Col>
    </Modal>
  );
};
