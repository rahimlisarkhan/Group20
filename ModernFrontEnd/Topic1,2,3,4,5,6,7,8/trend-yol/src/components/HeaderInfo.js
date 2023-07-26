import React, { Component } from "react";

export class HeaderInfo extends Component {
  render() {
    return (
      <div className="header-bottom">
        <div className="card border-0 bg-danger">
          <div className="card-body text-center ">
            <h5 className="card-title display-1 text-light">
              Special title treatment
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-warning">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
