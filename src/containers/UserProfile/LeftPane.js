import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import EditIntro from "../../containers/UserProfile/EditIntro";
import * as auth from "../../services/Session";
import "./LeftPane.scss";
import DetailPopup from "../../containers/UserProfile/DetailPopup";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
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
            <a href="#editintro" onClick={this.openModal}>
              <i className="fa fa-pencil" /> Edit_Intro
            </a>
          </div>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="">
              <a href="#close" className="close" onClick={this.closeModal}>
                &times;
              </a>
              <div className="content">
                <EditIntro
                  name={name}
                  email={email}
                  closeModal={this.closeModal}
                />
              </div>
            </div>
          </Popup>
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