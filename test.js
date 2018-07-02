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
  
  
  const weather = true;
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
    {
        console.log(dateDetails);
   
    }
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});
const myDate = function() {
    date
      .then(function(done) {
        console.log('We are going on a date!')
        console.log(done)
      })
      .catch(function(error) {
          console.log(error.message)
      })
  }
  
  myDate();
