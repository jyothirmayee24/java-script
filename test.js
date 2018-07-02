console.log("Hello.");
// Say "Goodbye" two seconds from now.
setTimeout(function() {
  console.log("Goodbye!");
}, 2000);
// Say "Hello again!"
console.log("Hello again!");
function greeting(name) {
    console.log(`Hello ${name}, welcome to Scotch!`);
  }
  function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
  
    callback(fullName);
  }
  
  introduction('Chris','Nwamba', greeting); 