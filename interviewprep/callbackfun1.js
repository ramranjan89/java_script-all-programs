function prep(start, callback)
{
console.log(` my prep is started for ${start}`);
callback();
}
 function interview()
{
console.log("once finish prep then only start for interview");
}
prep("playwright and java script", interview);