// const moviePatrons = [
//   { name: "Tom", age: 16 },
//   { name: "Ashley", age: 31 },
//   { name: "Sarah", age: 18 },
//   { name: "Alvin", age: 22 },
//   { name: "Cherie", age: 14 },
//   { name: "Malcolm", age: 15 }
// ];
// vvv JAMES ARASIM vvv /////////////////////////////////////////////////////////////////////////////////////////
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
// ^^^ JAMES ARASIM ^^^ /////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// 1.
// forEach is a functional way of iterating through an array without a for-loop
// moviePatrons.forEach(patron => console.log(`PATRON AGE FOREACH:${patron.age}`));
// vvv JAMES ARASIM vvv /////////////////////////////////////////////////////////////////////////////////////////
// moviePatronos.forEach goes through the moviePatrons array, and passes each of its objects to a function
// we want performed for each one of them individually.
// In that function, we choose to represent each object with the variable name "patron", in this case, a patron object,
// to a function that you provide.
// In this case, all the function is doing is printing the patron's age to the Standard Output Stream (e.g. Mac Terminal).
// NOTE: The function in this foreach example is optimized syntactically, and can also look like this:
//
// moviePatrons.forEach(
//     function(patron) {
//       console.log(`PATRON AGE FOREACH ALTERNATESYNTAX:${patron.age}`);
//     }
// );
//
// If you were to do this with a for-loop instead of using a forEach, it would look something like this.
//
// for(let i=0;i<moviePatrons.length;i++){
//   console.log(`PATRON AGE FOR-LOOP:${moviePatrons[i].age}`);
// }
//
// As a developer you'll always gravitate ways towards things that make sense to you, so when you re-visit them days, months, or years later,
// it's easy to understand for you.  There are many ways to program something.  This is for-loop just as valid as foreach, but foreach is
// probably optimized and faster performance wise (that's a guess. don't quote me.).
// Once you get used to the foreach, it's a lot more convenient to use, but less people will recognize it,
// ^^^ JAMES ARASIM ^^^ /////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// 2.
// Filter returns a new array containing only elements whose callback returns a truthy value
// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17;
// });
// vvv JAMES ARASIM vvv /////////////////////////////////////////////////////////////////////////////////////////
// moviePatrons.filter allows you to take an array, and return only a portion of it in a new array, that satisfies a condition you specify.
// In this case, "return patron.age > 17;" says, 'return an array whose objects are only movie patrons over the age of 17.'
// And call that array canWatchRatedR.
//
// Why would you use this? The canWatchRatedR could subsequently be used by an email function to only email patrons
// about a Rated R movie, using something like the solution here: console.log(`https://www.w3schools.com/nodejs/nodejs_email.asp`);
//
//
// function sendAgeRestrictedEmail(movieName) {
//   console.log(`TODO:
//   Implement email solution like this: https://www.w3schools.com/nodejs/nodejs_email.asp
//   (similar to a client-side javascript solution, but actually send it)`);
//   canWatchRatedR.forEach(patron => console.log(
//       `window.open(mailto:${patron.name}@gmail.com?subject=${movieName}&body=Hey ${patron.name}, You're ${patron.age} now. ${movieName} is out. Go see it.)`
//   ));
// }
// sendAgeRestrictedEmail("Midsommar");
//
// ^^^ JAMES ARASIM ^^^ /////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// 3.
// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array
// const cardedMoviePatrons = moviePatrons.map(patron => {
//   const pObj = { ...patron };
//   // Do everything else the same
//   if (pObj.age >= 17) {
//     pObj.canWatchRatedR = true;
//   } else {
//     pObj.canWatchRatedR = false;
//   }
//   // Be sure to return the new obj, not the parameter
//   return pObj;
// });
// vvv JAMES ARASIM vvv /////////////////////////////////////////////////////////////////////////////////////////
// Discussion about spread syntax (e.g. "...patron");
//    FIRST NOTE: IMPORTANT to understanding the context of LESSON #3's code;
//    "WHY ARE WE COPYING THE PARAMETER INSTEAD OF JUST USING IT?"
//    When you pass an Object or an Array to a function, it is passed BY REFERENCE, not BY VALUE.
//    Consequently, for passing BY REFERENCE, if you change the OBJECT or ARRAY represented
//    by the parameter of a function, then the original object or array IS CHANGED.
//    This is different for Strings, Integers, Booleans, and other primitive types, which are
//    passed BY VALUE. For passing BY VALUE, if you change the value of the primitive type
//    represented by the parameter of a function, the original variable IS NOT CHANGED.
//    Run the following lines of code to demonstrate how passing an array by reference will change the array, if we don't copy it.
const JimsMoviePatrons = [
  { name: "Jim", age: 2 },
  { name: "Joe", age: 12 },
  { name: "Jon", age: 78 },
  { name: "Jack", age: 22 },
  { name: "Jake", age: 44 },
  { name: "Jaime", age: 15 }
];
console.log(`noCopy=========================================================================================================`);
function noCopy(patronObject){
  //NOTE: if we use the OBJECT parameter directly in a function, we change what it references.
  patronObject.copytype = "none";
  return patronObject;
};
console.log(`PRE noCopy JimsMoviePatrons ${JSON.stringify(JimsMoviePatrons)}`); //print out array to see what it looks like before calling our function
console.log(`RETURNED BY noCopy ${JSON.stringify(noCopy(JimsMoviePatrons[0]))}`); //pass the first object of the array to our function "noCopy"
console.log(`POST noCopy JimsMoviePatrons CHANGED ${JSON.stringify(JimsMoviePatrons)}`); //note the addition of the "copytype" property to the first object; the original object passed to the function gets changed
console.log(`noCopyAssignment=========================================================================================================`);
function noCopyAssignment(patronObject){
  //NOTE: When you assign one object equal to another directly like this, using the assignment "=" operator,
  // you end up with a reference to the same object; thus, any changes to the object referred by the
  // new variable changes the original object, which may or may not be intended.
  const aStraightCopiedObject = patronObject;
  aStraightCopiedObject.copytype = "straight";
  return aStraightCopiedObject;
};
console.log(`PRE noCopyAssignment JimsMoviePatrons ${JSON.stringify(JimsMoviePatrons)}`); //print out array to see what it looks like before calling our function
console.log(`RETURNED BY noCopyAssignment ${JSON.stringify(straightCopy(JimsMoviePatrons[0]))}`); //pass the first object of the array to our function "straightCopy"
console.log(`POST noCopyAssignment JimsMoviePatrons CHANGED ${JSON.stringify(JimsMoviePatrons)}`); //note the addition of the "copytype" property to the first object; the original object passed to the function gets changed
console.log(`bruteForceCopy=========================================================================================================`);
function bruteForceCopy(patronObject){
  //This is what the spread syntax does behind the scenes to copy patronObject.
  // It creates a new aSpreadCopiedObject, and makes it exactly like the passed in patronObject.
  // To make this copy, we have to know the properties of the patronObject, name and age.
  // But what if we don't know the properties; what if we added another property to our patronObject, then
  // that property wouldn't get copied here, only name and age will.
  let aBruteForceCopiedObject = {};
  aBruteForceCopiedObject.name = patronObject.name;
  aBruteForceCopiedObject.age = patronObject.age;
  aBruteForceCopiedObject.copytype = "bruteforce";
  return aBruteForceCopiedObject;
};
console.log(`PRE bruteForceCopy JimsMoviePatrons ${JSON.stringify(JimsMoviePatrons)}`); //print out array to see what it looks like before calling our function
console.log(`RETURNED BY bruteForceCopy ${JSON.stringify(bruteForceCopy(JimsMoviePatrons[0]))}`); //pass the first object of the array to our function "bruteForceCopy"
console.log(`POST bruteForceCopy JimsMoviePatrons UNCHANGED ${JSON.stringify(JimsMoviePatrons)}`); //note the original object does not get changed because we made a copy "aBruteForceCopiedObject"
console.log(`spreadCopy=========================================================================================================`);
function spreadCopy(patronObject){
  //This function uses the spread syntax to copy the patronObject and all of its properties.
  // The original patronOjbect remains unchanged.
  const aSpreadCopiedObject = { ...patronObject };
  aSpreadCopiedObject.copytype = "spread";
  return aSpreadCopiedObject;
};
console.log(`PRE spreadCopy JimsMoviePatrons ${JSON.stringify(JimsMoviePatrons)}`); //print out array to see what it looks like before calling our function
console.log(`RETURNED BY spreadCopy ${JSON.stringify(spreadCopy(JimsMoviePatrons[0]))}`); //pass the first object of the array to our function "spreadCopy"
console.log(`POST spreadCopy JimsMoviePatrons UNCHANGED ${JSON.stringify(JimsMoviePatrons)}`); //note the original object does not get changed because we made a copy "aSpreadCopiedObject"
// ^^^ JAMES ARASIM ^^^ /////////////////////////////////////////////////////////////////////////////////////////


