const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];
//JAMES ARASIM/////////////////////////////////////////////////////////////////////////////////////////
// const moviePatrons  is an array of objects that cannot change, because it is a constant.
// You can pass arrays of objects to other applications using Javascript Object Notation (JSON).
// JSON is commonly used to communicate WebService API requests and responses over HTTP, just like HTML does.
// JSON data files, on a file system like Mac OSX or Linux or Windows,
// usually have the extension .json, and virtually look exactly like the value of moviePatrons.
// Here's what the contents of a moviePatrons.json file would look like, if we needed one:
//           [
//             { "name": "Tom", "age":"16" },
//             { "name": "Ashley", "age":"31" },
//             { "name": "Sarah", "age":"18" },
//             { "name": "Alvin", "age":"22 },
//             { "name": "Cherie", "age":"14" },
//             { "name": "Malcolm", "age":"15" }
//           ]
// NOTE: the only difference between the javascript syntax and the json are quotes around the property names: "name" and "age"
//JAMES ARASIM/////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
// 1.
// forEach is a functional way of iterating through an array without a for-loop
moviePatrons.forEach(patron => console.log(`PATRON AGE FOREACH:${patron.age}`));
//JAMES ARASIM/////////////////////////////////////////////////////////////////////////////////////////
// moviePatronos.forEach goes through the moviePatrons array, and passes each of its objects to a function
// we want performed for each one of them individually.
// In that function, we choose to represent each object with the variable name "patron", in this case, a patron object,
// to a function that you provide.
// In this case, all the function is doing is printing the patron's age to the Standard Output Stream (e.g. Mac Terminal).
// NOTE: The function in this foreach example is optimized syntactically, and can also look like this:
moviePatrons.forEach(
    function(patron) {
      console.log(`PATRON AGE FOREACH ALTERNATESYNTAX:${patron.age}`);
    }
);
// If you were to do this with a for-loop instead of using a forEach, it would look something like this.
for(let i=0;i<moviePatrons.length;i++){
  console.log(`PATRON AGE FOR-LOOP:${moviePatrons[i].age}`);
}
// As a developer you'll always gravitate ways towards things that make sense to you, so when you re-visit them days, months, or years later,
// it's easy to understand for you.  There are many ways to program something.  This is for-loop just as valid as foreach, but foreach is
// probably optimized and faster performance wise (that's a guess. don't quote me.).
// Once you get used to the foreach, it's a lot more convenient to use, but less people will recognize it,
//JAMES ARASIM/////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
// 2.
// Filter returns a new array containing only elements whose callback returns a truthy value
const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});
//JAMES ARASIM/////////////////////////////////////////////////////////////////////////////////////////
// moviePatrons.filter allows you to take an array, and return only a portion of it in a new array, that satisfies a condition you specify.
// In this case, "return patron.age > 17;" says, 'return an array whose objects are only movie patrons over the age of 17.'
// And call that array canWatchRatedR.
//
// Why would you use this? The canWatchRatedR could subsequently be used by an email function to only email patrons
// about a Rated R movie, using something like the solution here: console.log(`https://www.w3schools.com/nodejs/nodejs_email.asp`);
//
function sendAgeRestrictedEmail(movieName) {
  console.log(`TODO: 
  Implement email solution like this: https://www.w3schools.com/nodejs/nodejs_email.asp 
  (similar to a client-side javascript solution, but actually send it)`);
  canWatchRatedR.forEach(patron => console.log(
      `window.open(mailto:${patron.name}@gmail.com?subject=${movieName}&body=Hey ${patron.name}, You're ${patron.age} now. ${movieName} is out. Go see it.)`
  ));
}
sendAgeRestrictedEmail("Midsommar");
//JAMES ARASIM/////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
// 3.
// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array
const cardedMoviePatrons = moviePatrons.map(patron => {
  const pObj = { ...patron };
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});
console.log("Movie Patrons: \n")
console.log(moviePatrons);
console.log("\nCarded Movie Patrons: \n");
console.log(cardedMoviePatrons);