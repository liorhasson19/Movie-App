import React, { useState } from "react";
import "./ActorComp.css";

const ActorComp = props => {
  const { data } = props;

  const [imageUrl, setImageUrl] = useState(data.imageUrl);
  const [imdbLink, setImdbLink] = useState(data.imdbLink);
  const [fullName, setFullName] = useState(data.fName + " " + data.lName);
  const [birthday, setBirthday] = useState(data.birthday);

  const [getAge, setGetAge] = useState(data.getAge());

  return (
    <div className="actor-card">
      <div className="actor-img" src={imageUrl}>
        <img
          src={"https://m.media-amazon.com/images/M/" + imageUrl}
          alt="Actor_Image"
        />
      </div>
      <div className="actor-details">
        <a
          className="actor-name"
          href={imdbLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {fullName}
        </a>
        <div className="actor-bday">
          Birthday: {birthday} <br></br>(Age: {getAge})
        </div>
      </div>
    </div>
  );
};

export default ActorComp;
