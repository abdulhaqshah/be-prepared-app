import {
  USER_REGISTER_URL,
  USER_LOGIN_URL,
  METHODS,
  UPDATE_DATA,
  USER_ABOUT_INFO,
  GET_COURSES,
  GET_TUTORIALS,
  GET_QUIZZES,
  TUTORIAL_DATA,
  COURSE_DATA,
  QUIZ_DATA,
  TUTORIAL_UPDATE_CONTENT,
  COURSE_UPDATE_DESCRIPTION,
  GET_COURSE_BY_ID,
  GET_TUTORIALS_BY_COURSE_ID,
  GET_QUIZES_BY_COURSE_ID,
  GET_TUTORIAL_BY_ID,
  GET_QUIZ_BY_ID,
  UPDATE_PASSWORD,
  EMAIL_CONFIRMATION,
  USER_BY_ID,
  ADDING_TUTORIAL_TO_USER,
  ADDING_QUIZ_TO_USER,
  UPDATE_USER_TUTORIAL_PROGRESS,
  QUIZ_QUESTIONS_ADD,
  QUIZ_PROGRESS_UPDATE
} from "./constants";

import GlobalAPISvc from "./globalApi";
import * as auth from "../services/Session";
const uuid = auth.getItem("uuid");

const userRegister = (data, resolve, reject) => {
  return GlobalAPISvc(USER_REGISTER_URL, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const userLogin = (data, resolve, reject) => {
  return GlobalAPISvc(USER_LOGIN_URL, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const updateData = (data, resolve, reject) => {
  return GlobalAPISvc(UPDATE_DATA, METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => {
      return reject(err);
    });
};

const getCourses = (resolve, reject) => {
  return GlobalAPISvc(GET_COURSES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getTutorials = (resolve, reject) => {
  return GlobalAPISvc(GET_TUTORIALS, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getQuizzes = (resolve, reject) => {
  return GlobalAPISvc(GET_QUIZZES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const courseData = (data, resolve, reject) => {
  return GlobalAPISvc(COURSE_DATA, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const quizData = (data, resolve, reject) => {
  return GlobalAPISvc(QUIZ_DATA, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const tutorialData = (data, resolve, reject) => {
  return GlobalAPISvc(TUTORIAL_DATA, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const userAboutInfo = (data, resolve, reject) => {
  return GlobalAPISvc(USER_ABOUT_INFO(uuid), METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const tutorialUpdateContent = (tutorialId, data, resolve, reject) => {
  return GlobalAPISvc(TUTORIAL_UPDATE_CONTENT(tutorialId), METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const getUserById = (resolve, reject) => {
  return GlobalAPISvc(USER_BY_ID(uuid), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getCourseById = (courseId, resolve, reject) => {
  return GlobalAPISvc(GET_COURSE_BY_ID(courseId), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const quizContentAdd = (quizId, data, resolve, reject) => {
  return GlobalAPISvc(QUIZ_QUESTIONS_ADD(quizId), METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const courseUpdateDescription = (courseId, data, resolve, reject) => {
  return GlobalAPISvc(COURSE_UPDATE_DESCRIPTION(courseId), METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getTutorialByCourseId = (courseId, resolve, reject) => {
  return GlobalAPISvc(GET_TUTORIALS_BY_COURSE_ID(courseId), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getQuizByCourseId = (courseId, resolve, reject) => {
  return GlobalAPISvc(GET_QUIZES_BY_COURSE_ID(courseId), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getTutorialById = (tutorialId, resolve, reject) => {
  return GlobalAPISvc(GET_TUTORIAL_BY_ID(tutorialId), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getQuizById = (quizId, resolve, reject) => {
  return GlobalAPISvc(GET_QUIZ_BY_ID(quizId), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const emailConfirmation = (data, resolve, reject) => {
  return GlobalAPISvc(EMAIL_CONFIRMATION(data), METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const updatePassword = (data, resolve, reject) => {
  return GlobalAPISvc(UPDATE_PASSWORD, METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const addingTutorialProgressToUser = (
  tutorialId,
  courseId,
  data,
  resolve,
  reject
) => {
  return GlobalAPISvc(
    ADDING_TUTORIAL_TO_USER(uuid, tutorialId, courseId),
    METHODS.POST,
    data
  )
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const addingQuizProgressToUser = (quizId, courseId, data, resolve, reject) => {
  return GlobalAPISvc(
    ADDING_QUIZ_TO_USER(uuid, quizId, courseId),
    METHODS.POST,
    data
  )
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const updatingUserTutorialProgress = (tutorialId, resolve, reject) => {
  return GlobalAPISvc(
    UPDATE_USER_TUTORIAL_PROGRESS(uuid, tutorialId),
    METHODS.PATCH
  )
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const quizProgressUpdate = (quizId, data, resolve, reject) => {
  return GlobalAPISvc(QUIZ_PROGRESS_UPDATE(uuid, quizId), METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getErrorMessage = error => {
  if (error === "Failed to fetch") {
    return "Something went wrong. Try again later";
  } else {
    return error;
  }
};
export default {
  userRegister,
  userLogin,
  updateData,
  getCourses,
  getTutorials,
  getQuizzes,
  userAboutInfo,
  tutorialData,
  courseData,
  quizData,
  getErrorMessage,
  tutorialUpdateContent,
  courseUpdateDescription,
  getCourseById,
  getTutorialByCourseId,
  getQuizByCourseId,
  getTutorialById,
  getQuizById,
  emailConfirmation,
  updatePassword,
  getUserById,
  addingTutorialProgressToUser,
  addingQuizProgressToUser,
  updatingUserTutorialProgress,
  quizContentAdd,
  quizProgressUpdate
};
