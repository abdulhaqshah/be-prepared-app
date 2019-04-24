import React, { Component } from "react";
import "./SignUp.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpUserName: "",
      signUpEmail: "",
      signUpPass: "",
      signUpConfirmPass: "",
      isCheckBox: ""
    };
    this.setSignUpUserName = this.setSignUpUserName.bind(this);
    this.setSignUpEmail = this.setSignUpEmail.bind(this);
    this.setSignUpPassword = this.setSignUpPassword.bind(this);
    this.setSignUpConfirmPass = this.setSignUpConfirmPass.bind(this);
    this.setCheckBox = this.setCheckBox.bind(this);
    this.signUpValidation = this.signUpValidation.bind(this);
  }
  setSignUpUserName(event) {
    this.setState({ signUpUserName: event.target.value });
  }
  setSignUpEmail(event) {
    this.setState({ signUpEmail: event.target.value });
  }
  setSignUpPassword(event) {
    this.setState({ signUpPass: event.target.value });
  }
  setSignUpConfirmPass(event) {
    this.setState({ signUpConfirmPass: event.target.value });
  }
  setCheckBox(event) {
    this.setState({ isCheckBox: event.target.value });
  }
  signUpValidation(e) {
    e.preventDefault();
    if (
      this.state.signUpUserName === "" ||
      this.state.signUpEmail === "" ||
      this.state.signUpPass === "" ||
      this.state.signUpConfirmPass === "" ||
      this.state.isCheckBox === ""
    ) {
      alert("All Feilds Required");
    } else {
      this.props.history.push("/Login");
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="signup-container">
          <div className="inner-container">
            <h1 className="heading" align="center">
              {" "}
              Sign Up{" "}
            </h1>
            <form>
              <div>
                <label className="labels vertical-spacing">
                  Your name <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="signUpUserName"
                  type="text"
                  onChange={this.setSignUpUserName}
                />
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Email <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="signUpEmail"
                  type="text"
                  onChange={this.setSignUpEmail}
                />
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="signUpPassword"
                  type="password"
                  onChange={this.setSignUpPassword}
                />
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Confirm Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="signUpConfirmPass"
                  type="password"
                  onChange={this.setSignUpConfirmPass}
                />
              </div>
              <div className="term-conditions">
                By clicking 'Create account', you agree to our Terms and
                Conditions and acknowledge that you have read our Privacy Policy
                and Disclosure Guidelines.
              </div>
              <div>
                <button
                  className="button"
                  name="signUpBtn"
                  type="submit"
                  onClick={this.signUpValidation}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
