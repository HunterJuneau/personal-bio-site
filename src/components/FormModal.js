import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from './forms/ProjectForm';
import TechnologyForm from './forms/TechnologyForm';

export default function FormModal({ dataSource, setState, data }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formSetup = () => {
    switch (dataSource) {
      case 'Project':
        return (
          <ProjectForm setProjects={setState} toggle={toggle} data={data} />
        );
      case 'Technology':
        return (
          <TechnologyForm
            setTechnologies={setState}
            toggle={toggle}
            data={data}
          />
        );
      default:
        return '';
    }
  };

  return (
    <>
      <Button color='primary' onClick={toggle}>
        {data ? 'Edit' : 'Add'}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          {formSetup()}
        </ModalBody>
      </Modal>
    </>
  );
}

FormModal.propTypes = {
  dataSource: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  data: PropTypes.object,
};
