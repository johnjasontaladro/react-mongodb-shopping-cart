import { Button, Modal } from "react-bootstrap";

function ModalConfirm(props) {
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.onCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={false}>
          <Modal.Title>Please confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={props.onClickConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;
