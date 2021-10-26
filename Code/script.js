function submitForm() {
  var fname = document.getElementById("fname");
  console.log(fname.value);
  var lname = document.getElementById("lname");
  console.log(lname.value);
  var male = document.getElementById("male");
  console.log(male.checked);
  var female = document.getElementById("female");
  console.log(female.checked);
  var about = document.getElementById("about");
  console.log(about.value);
  console.log(`Your name is ${fname.value} ${lname.value}`);
  console.log(`You want people to know: ${about.value}`);
  if (male.checked === true) {
    console.log("You are male");
  }
  if (female.checked === true) {
    console.log("You are female");
  }
  var nameResult = document.getElementById("nameResult");
  nameResult.innerText = `Your name is ${fname.value} ${lname.value}`;
  var genderResult = document.getElementById("genderResult");
  if (male.checked === true) {
    genderResult.innerText = "You are male";
  }
  if (female.checked === true) {
    genderResult.innerText = "You are female";
  }
  var aboutResult = document.getElementById("aboutResult");
  aboutResult.innerText = `You want people to know: ${about.value}`;
  // var female=document.getElementById("female")
  // var fname=document.getElementById("fname").value
  // var lname=document.getElementById("lname").value
  // var about=document.getElementById("about").value
  // var paragraph=document.getElementById("result")
  // paragraph.innerHTML += fname
  // paragraph.innerHTML += lname
  // if (male.checked){
  // console.log(male.value)
  // }
  // else if (female.checked){
  // console.log(female.value)
  // }
}
