import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { getTutorialById } from "../../store/actions/Actions";
import "./CoursePage.scss";

class TutorialPage extends Component {
  componentDidMount() {
    this.props.getTutorials(this.props.history.location.state);
  }

  render() {
    return (
      <div className="main-course-container">
        <div className="header">
          <h1>
            {this.props.tutorialById ? this.props.tutorialById[0].name : null}
          </h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <p>
                  {this.props.tutorialById
                    ? this.props.tutorialById[0].content
                    : null}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tutorialById: state.getTutorialDataById.tutorialById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTutorials: id => {
      dispatch(getTutorialById(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TutorialPage)
);
