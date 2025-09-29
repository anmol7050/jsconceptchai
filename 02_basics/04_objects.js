// singleton

// const   tinderUser=new object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser);


const regularUser={
  email:"some@gmail.com",
  fullname:{
    userfullname:{
      firstname:"Anmol",
      lastname:"Yadav"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:'a', 2:'b'}
const obj2={3:'a', 4:'b'}
const obj4={5:'a', 6:'b'}

// const obj3={obj1, obj2}
// const obj3=Object.assign({}, obj1, obj2, obj4)

// const obj3={...obj1, ...obj2, ...obj4}
// console.log(obj3);


// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // This is important 
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name')) // This is used to find wether an element exist in the object or not 


const course={
  coursename:"js in hindi",
  price:"999",
  courseInstructor:"hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor : instructor}=course

// console.log(courseInstructor)
console.log(instructor)


// The below is JSON (object without name)

// {
//   "name":"Anmol Kumar Yadav",
//   "coursename":"js in hindi",
//   "price":"free"
// }

[
  {},
  {},
  {}
]