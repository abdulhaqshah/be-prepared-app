import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-lg">
        <div>
          <Link className="navigation-logo" to={HOME}>
            Be Prepared
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 ml-3">
            <li class="active" class="nav-item">
              <a class="nav-link " href={HOME}>
                PRACTICE
              </a>
            </li>
            <li class="nav-item ml-1">
              <a class="nav-link" href={HOME}>
                COMPETE
              </a>
            </li>
            <li class="nav-item ml-1">
              <a class="nav-link" href={HOME}>
                JOBS
              </a>
            </li>
            <li class="nav-item ml-1">
              <a class="nav-link" href={HOME}>
                LEADERBOARD
              </a>
            </li>
          </ul>
          <ul class="navbar-nav  mt-2 ml-5">
            <li class="nav-item">
              <form class="form-inline md-form form-sm mt-0">
                <i class="fa fa-search" />
                <input
                  class=" form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
            <li class="nav-item ml-1">
              <a class="nav-link" href={HOME}>
                <i className="fa fa-comment-o fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href={HOME}>
                <i className="fa fa-bell-o fa-lg" />
              </a>
            </li>
            <li class="nav-item ml-1">
              <a class="nav-link" href={HOME}>
                <i className="fa fa-user-o fa-lg" /> Humna Aleem{" "}
                <i class="fa fa-angle-down" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
