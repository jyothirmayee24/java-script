function helloWorld(lang) {
    if (lang == 'de') {
        return 'Hallo Welt';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('de'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));