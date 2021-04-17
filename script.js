// Work Exprience Field
function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here....");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}
// Academic Qualification Field
const addNewAQField = () => {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here....");

  let aqOb = document.getElementById("aq");
  console.log(aqOb);
  let aqAddBuutonOb = document.getElementById("aqAddBuuton");
  console.log(aqAddBuutonOb);

  aqOb.insertBefore(newNode, aqAddBuutonOb);
};

// Generating CV
const generateCV = () => {
  //get name
  let nameFieldOb = document.getElementById("nameField").value.toUpperCase();

  // set name(template)
  let nameTOb = document.getElementById("nameT");
  nameTOb.innerHTML = nameFieldOb;

  // get contact
  let contactFieldOb = document.getElementById("contactField").value;

  //set contact(template)
  document.getElementById("contactT").innerHTML = contactFieldOb;

  // get addressField
  let addressFieldOb = document
    .getElementById("addressField")
    .value.toUpperCase();

  //set address(template)
  document.getElementById("addressT").innerHTML = addressFieldOb;

  //fb(template)
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;

  // insta(template)
  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;

  // linkned(template)
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkedField"
  ).value;

  // objectiveT
  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  // work Experience
  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // a1
  let aqs = document.getElementsByClassName("aqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li>${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // Image
  let file = document.getElementById("imgField").files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);

  console.log(reader.result);

  //set imgae
  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
};

// Print CV
const printCV = () => {
  window.print();
};
