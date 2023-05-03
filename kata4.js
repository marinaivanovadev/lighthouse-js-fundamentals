const instructorWithLongestName = function(instructors) {
  let result = instructors[0];
  for(let i = 0; i < instructors.length; i++) {
    let instructor = instructors[i];
    if ( instructor.name.length > result.name.length){
    result = instructor;
    }
  }
   return result;
}
  

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));