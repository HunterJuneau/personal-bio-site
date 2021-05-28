import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';
import propTypes from 'prop-types';
import ProjectForm from './forms/ProjectForm';
import TechnologyForm from './forms/TechnologyForm';

export default function FormModal({ dataSource, setState }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formSetup = () => {
    switch (dataSource) {
      case 'Project':
        return <ProjectForm setProjects={setState} toggle={toggle} />;
      case 'Technology':
        return <TechnologyForm setTechnologies={setState} toggle={toggle} />;
      default:
        return '';
    }
  };

  return (
    <>
      <Button color='primary' onClick={toggle}>
        Add {dataSource}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        {formSetup()}
      </Modal>
    </>
  );
}

FormModal.propTypes = {
  dataSource: propTypes.string.isRequired,
  setState: propTypes.func.isRequired,
};
