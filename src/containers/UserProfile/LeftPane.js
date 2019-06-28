import React, { Component, Fragment } from "react";
import EditIntro from "../../containers/UserProfile/EditIntro";
import * as auth from "../../services/Session";
import "./LeftPane.scss";
import DetailPopup from "../../containers/UserProfile/DetailPopup";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");

    var initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return (
      <Fragment>
        <div className="about">
          <button className="profile-btn btn-secondary btn-xl">
            {initials}
            <div className="overlay">
              <a href="./edit">{/* <i className="fa fa-pencil" /> */}</a>
            </div>
          </button>
          <h3 className="profile-name">{name}</h3>
          <p>{email}</p>
          <div className="edit-btn">
            <a
              href="#editintro"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-pencil" /> Edit_Intro
            </a>
          </div>
          <div
            className="modal"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Intro
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    aria-hidden="true"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" />
                <EditIntro
                  name={name}
                  email={email}
                  closeModal={this.closeModal}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-detail">
          <div className="about-heading">
            <h5>About</h5>
          </div>
          <div className="about-pen-icon">
            <DetailPopup />
          </div>
          <div className="user-about-info">
            <span>Expected year of Graduation</span>
            <br />
            <b>2019</b>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
