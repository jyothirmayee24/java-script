function fixStart(s) {
    var c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
  }
console.log(fixStart("amaravathi"));  