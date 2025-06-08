import React from "react";
import Person from "./Person";
import './myStyles.css'
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
 const personList=persons.map(person=>
  // if key same react through error beacause of react terms to handle items properly
  <Person key={person.id}  person={person}/>)
 return <ol className="primary">{personList}</ol>;
}
export default NameList;
