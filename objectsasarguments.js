var movie={
    title: 'Baahubali',
    duration:150,
    stars:['Prabhas','Anushka','Rana'],
};
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('Stars:' + movie.stars.join(', '));
}
printMovie(movie);