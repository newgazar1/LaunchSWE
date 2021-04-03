/* Do all of these using proper ES6 syntax

Using the following array of objects,*/

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];


/*(1) Write an arrow function that adds a new entry to bookList */

 add_to_booklist = (title1, author2) => {
  var book = {title: title1, author: author2}
  bookList.push(book)
}



/*(2) Write an arrow function that removes a specific book from the bookList*/

 remove_from_booklist = (title_of_book, author_of_book) => {
   var temp_book = { title: title_of_book, author: author_of_book }
   var size =bookList.length
   for(i = 0; i < size; i++){
     if(bookList[i].title == temp_book.title && bookList[i].author == temp_book.author ){
       bookList.splice(i,1)
       i = 4
     }
   }
   }

/*(3) Write an arrow function that lists out all the books or all the authors in the book list */

list_all_authors_or_books = (type) => {

  if (type === "author") {
    for(i = 0; i < bookList.length; i++){
      console.log(bookList[i].author)
    }
  } else if (type === "title") {
    for(i = 0; i < bookList.length; i++){
      console.log(booklist[i].title)
    }
  } else {
    console.log("Not a valid input")
  }
}

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

 const single_number = (num) => {return (num > 0) ? "Positive":"negative"}

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

 day_of_week = (day) => {
   if(day === "Monday"){
    console.log("Worst day of the week")
   } else if (day === "Tuesday "){
    console.log("Monday Part 2")
   } else if (day === "Wednesday"){
    console.log("Hump day")
  } else if (day === "Thursday"){
    console.log("Friday Junior")
  } else if (day === "Friday"){
    console.log("Party time")
  } else if (day === "Saturday"){
    console.log("Time to do work") 
  } else{
    console.log("Pre Monday")
  }
 }
  

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

sum_of_number = (num) => {
  var sum = 0
  for(i = 1; i<= num; i++){
    sum += i
  }
  console.log(sum)
}

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

cel_to_fah = (tempreture) => {
  fah_temp = (tempreture * 9 / 5) + 32
  if(tempreture > 15){
    console.log("The tempreture is too warm you should dress lighetly")
  } else{
    console.log("The weather is too cold you should dress warmly")
  }
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

is_it_truthy = (arr) => {
  var count = 0
  arr.forEach(val => (val ? count ++ : count+=0))
  console.log(count)
}

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

change_names_and_gpa = (lst) => {
  const updatedArray = lst.map((students) => {
    let studentsFullName = students.firstName + " " + students.lastName
    let gradePointAverage
    if(students.gpa >= 4){
      gradePointAverage = "A"
    } else if (students.gpa >= 3.7){
      gradePointAverage = "A-"
    } else if (students.gpa >= 3.3){
      gradePointAverage = "B+"
    } else if (students.gpa >= 3.0){
      gradePointAverage = "B"
    } else if (students.gpa >= 2.7){
      gradePointAverage = "B-"
    } else if (students.gpa >= 2.3){
      gradePointAverage = "C+"
    } else if (students.gpa >= 2.0){
      gradePointAverage = "C"
    } else if (students.gpa >= 1.7){
      gradePointAverage = "C-"
    } else if (students.gpa >= 1.3){
      gradePointAverage = "D+"
    }else if (students.gpa >= 1.0){
      gradePointAverage = "D"
    }else {
      gradePointAverage = "F"
    }
    console.log({studentsFullName, gradePointAverage})
  }) 
}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

/* I used an outside resource to help me on this part */

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]) : '';
    return str;
}

every_number_eventually_equals_4 = (number) =>{
  let changed_array = []
  if(changed_array[(changed_array.length)] === "4"){
    console.log(changed_array)
    return changed_array
  } 
  if(inWords(number) === "4"){
    changed_array.pop("4")
    every_number_eventually_equals_(4)
  } else {
    changed_array.pop(inWords(number))
    every_number_eventually_equals_4(parseInt(inWords(number)))
  }

}
