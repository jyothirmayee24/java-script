function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + 'C is ' + celsiusInF + 'F');
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + 'F is ' + fahrenheitInC + 'C');
  }
celsiusToFahrenheit(32);
fahrenheitToCelsius(101);