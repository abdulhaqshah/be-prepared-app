import React, { Component } from "react";
import EditDetail from "./EditDetail";

class DetailPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <a
          href="#/"
          onClick={this.openModal}
          data-toggle="modal"
          data-target="#Modal"
        >
          <i className="fa fa-pencil" />
        </a>
        <div
          className="modal fade"
          id="Modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header ">
                <b> Edit Detail</b>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" />
              <EditDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailPopup;
