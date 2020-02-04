import { Button, Modal } from 'react-bootstrap';

export function ModalDelete(props) {
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Body>{props.label}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>Close</Button>
        <Button bsStyle="danger" onClick={props.onSubmit}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}
