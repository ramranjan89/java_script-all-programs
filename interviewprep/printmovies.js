//create an array of top 5 movie nd print

let movies= ["avaenger", "hera pehri",  "bhagambgaag", "chup cup ke", "hydrabadi movie"];
console.log(movies);
movies.forEach(function(movie)
{
console.log(movie);
});

// find and log 2nd element of an array:
console.log(movies[1]);
// add 2 element in array using unshift()
movies.unshift("ram");
movies.unshift(4);
movies.forEach(function(value1)
{
console.log(`
${value1}`);
})
movies.pop();
console.log(movies);