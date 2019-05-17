import React, { Component } from "react";
import "./Sidebar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
          <nav class="sidenav">
        <div class="sidebar-header mr-4">
          <h3 align="center">SideBar</h3>
        </div>
        <ul class="list-unstyled components">
          <li>
            <a href="/home">
              <i className="fa fa-book mr-2" /> Courses
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-language mr-2" /> Languages
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-question mr-2 fa-lg" /> Genral Questions
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-file-text-o mr-2" /> Analytical Questions
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-file mr-2" /> CV Templates
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-lightbulb-o mr-3 fa-lg" /> Interview Tips
            </a>
          </li>
        </ul>
      </nav>
      </div>
    
    );
  }
}

export default SideBar;