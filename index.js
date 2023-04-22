const array = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  //get profession id
  const profession = document.getElementById("profession-type");
  //get user list
  const userlist = document.getElementById("users");
  //function to show the users
  function showUser() {
    if (profession.value == "Profession")
      alert("Select a profession before clicking the Filter");
    else {
      let n = userlist.children.length - 1;
      //delete the existing data in html
      while (n >= 0) {
        userlist.removeChild(userlist.children[n]);
        n--;
      }
      //get the filtered array
      let result = array.filter((e) => {
        return e.profession.toLowerCase() == profession.value.toLowerCase();
      });
      //store in the html the filtered array
      result.forEach((e, i) => {
        let div = document.createElement("div");
        let number = document.createElement("p");
        let name = document.createElement("p");
        let profession = document.createElement("p");
        let age = document.createElement("p");
        number.innerText = i + 1 + ".";
        name.innerText = "Name : " + firstUpperCase(e.name);
        profession.innerText = "Profession : " + firstUpperCase(e.profession);
        age.innerText = "Age : " + e.age;
        div.appendChild(number);
        div.appendChild(name);
        div.appendChild(profession);
        div.appendChild(age);
        userlist.appendChild(div);
      });
    }
  }
  
  //make first letter upperCase
  function firstUpperCase(str) {
    let firstLetter = str.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    str = firstLetter + str.slice(1);
    return str;
  }
  
  //add user to array
  function addUser() {
    const name = document.getElementById("name");
    const prof = document.getElementById("profession");
    const age = document.getElementById("age");
    const newUser = {};
    newUser.id = array.length + 1;
    newUser.name = name.value;
    newUser.profession = prof.value;
    newUser.age = age.value;
    name.value = "";
    prof.value = "";
    age.value = "";
    array.push(newUser);
  }