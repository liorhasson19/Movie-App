import React, { Component } from "react";
import "./ActorComp.css";

export default class ActorComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    let fullName = data.fName + " " + data.lName;
    return (
      <div className="actor-card">
        <div className="actor-img">
          <img
            src={"https://m.media-amazon.com/images/M/" + data.imageUrl}
            alt="Actor_Image"
          />
        </div>
        <div className="actor-details">
          <a
            className="actor-name"
            href={data.imdbLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fullName}
          </a>
          <div className="actor-bday">
            Birthday: {data.birthday} <br></br>(Age: {data.getAge})
          </div>
        </div>
      </div>
    );
  }
}
