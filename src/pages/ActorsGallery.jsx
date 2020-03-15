import React, { useState } from "react";
import ActorsData from "../data/actorsData.json";
import ActorComp from "../components/Actor/ActorComp";
import ActorModel from "../models/ActorModel";
import "./ActorsGallery.css";
import SearchBox from "../components/SearchBox/SearchBox";

const ActorsGallery = props => {
  const [input, setInput] = useState("");
  const [allActors, setAllActors] = useState(
    ActorsData.map(actor => new ActorModel(actor))
  );
  // const [filteredActors, setFilteredActors] = useState([]);

  // const onChangeHandler = ev => {
  //   setInput(ev.target.value);
  //   console.log("input: " + input);
  // };

  const onSearchChange = actorFilterInput => {
    setInput(actorFilterInput);
    console.log(actorFilterInput);
  };

  let filteredActors = allActors.filter(itm => {
    let boolResultofFname = itm.fName
      .toLowerCase()
      .includes(input.toLowerCase());
    let boolResultofLname = itm.lName
      .toLowerCase()
      .includes(input.toLowerCase());
    return boolResultofFname || boolResultofLname;
  });

  let filteredActorsCards = filteredActors.map((item, index) => {
    return (
      <div key={index} className="actor-col">
        <ActorComp data={item} />
      </div>
    );
  });

  return (
    <div>
      <div>
        <SearchBox
          onSearchChange={onSearchChange}
          placeholder="Search for an actor/actress by name"
        />
        {/* <input
          className="filter-input"
          type="text"
          value={input}
          onChange={onChangeHandler}
          placeholder="Search for an actor/actress by name"
        /> */}
      </div>
      <div className="actors-gallery">{filteredActorsCards}</div>
      <br />
    </div>
  );
};
export default ActorsGallery;
