/**
 * The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
 * If both are true, then return the "value" of that property.
 * If firstName does not correspond to any contacts then return "No such contact".
 * If prop does not correspond to any valid properties then return "No such property".
 */
 
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// Only change code below this line
  var result,
      mapped = function(current){
        return (current.firstName === firstName ? (current.hasOwnProperty(prop) ? current[prop] : "No such property") : false);
      },
      filtered = function(el,i){
        return contacts[i].firstName === firstName;
      };

  result = contacts.map(mapped).filter(filtered)[0];


  return result || "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUp("Kristian", "lastName");
