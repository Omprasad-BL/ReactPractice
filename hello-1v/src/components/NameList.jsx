import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Manoja", age: 23, skill: "React" },
    { id: 2, name: "Omi", age: 23, skill: "Mongodb" },
    {
      id: 3,
      name: "Fakiza",
      age: 48,
      skill: "Massage",
    },
  ];
 const personList=persons.map(person=> <Person person={person}/>)
 return <ol >{personList}</ol>;
}
export default NameList;
