import React from 'react';
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { resetOrder } from '../../actions/orderAction';

function OrderSuccess({displaySuccess, resetOrder}) {

    const continueOrder = () => {
        resetOrder();
    }
    return (
        <Modal
      show={displaySuccess}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="success-msg">
            Your order has been successfully placed. Thank you :)
        </div>
        <div>
            <button className="pizza-card-button" onClick={() => continueOrder()}> Continue </button>
        </div>
      </Modal.Body>
    </Modal>
    )
}
const mapStateToProps = (state) => ({
    displaySuccess: state.order.display
  });
const mapDispatchToProps = (dispatch) => {
    return {
        resetOrder: () => dispatch(resetOrder())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);
