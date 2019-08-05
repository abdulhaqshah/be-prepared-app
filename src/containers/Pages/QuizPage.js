import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import * as auth from "../../services/Session";
import { getQuizById } from "../../store/actions/Actions";
import API from "../../api/index";
import { addNotification } from "../../utilities/index";
import "./QuizPage.scss";

class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pathname: this.props.history.location.pathname
    };
  }

  componentDidMount() {
    var id = this.state.pathname.split("/");
    this.props.getQuizes(id[3]);
  }
  addingQuizToUser = () => {
    debugger
    const data = {
      name: this.props.quizById[0].name && this.props.quizById[0].name,
      description:
        this.props.quizById[0].description && this.props.quizById[0].description
    };
    API.addingQuizProgressToUser(
      this.props.quizById[0].quizId && this.props.quizById[0].quizId,
      this.props.quizById[0].courseId && this.props.quizById[0].courseId,
      data,
      result => {
        if (result.status === "200") {
        }
      }
    ).catch = error => {
      addNotification(this.notificationRef, "Error", "warning", error);
    };
  };
  quizQuestion = () => {
    this.addingQuizToUser();

    let index = auth.getItem("index");
    this.props.history.push(`/quiz-questions${this.state.pathname}/${index}`);
  };

  onClickNextBtn = () => {
    debugger;
    this.setState({
      index: this.state.index++
    });
  };
  render() {
    return (
      <div className="main-quiz-container">
        <div className="header">
          <h4>{this.props.quizById ? this.props.quizById[0].name : null}</h4>
        </div>
        <div align="center" className="description">
          <p>
            {this.props.quizById ? this.props.quizById[0].description : null}
          </p>
        </div>
        {this.props.quizById &&
        this.props.quizById[0].questions.length === 0 ? (
          <div align="center" className="no-quiz">
            There is no Quiz avaliable
          </div>
        ) : (
          <div align="center" className="quiz-btn">
            <button className="btn btn-secondary" onClick={this.quizQuestion}>
              Start Quiz
            </button>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizById: state.getDashboardData.quizById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getQuizes: id => {
      dispatch(getQuizById(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizPage)
);
