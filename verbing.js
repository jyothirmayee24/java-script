function verbing(word) {
    if (word.length < 3) return word;
    if (word.slice(-3) == 'ing') {
      return word + 'ly';
    } else {
      return word + 'ing';
    }
  }
  console.log(verbing("swim"));
  console.log(verbing("swimming"));
  console.log(verbing("do"));
  