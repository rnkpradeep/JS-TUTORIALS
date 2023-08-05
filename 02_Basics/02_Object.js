// Object can be declared in two way 
// 1 Constructor method
// singleton 
// Object.create

// 2 Object literals
const mySym= Symbol("Hello")

const users={
    name:"Pradeep",
    "full Name":"Pradeep Thakur",
    mySym:"Hello1",
    [mySym]:"Hello2",
    age:29,
    email:"example.com",
    isLoggedIn:false,
    lastLoggedInDay:["Monday","friday","Saturday"]
}
// console.log(users.lastLoggedInDay[1]);
// console.log(users.email);
// console.log(users["age"]);
// console.log(users["isLoggedIn"]);
// console.log(users["email"]);
// console.log(users["name"]);
// console.log(users.full Name); cannot access like this
// console.log(users["full Name"]);
// console.log(users.mySym);
// console.log(typeof users.mySym);

// console.log(users[mySym]); //only way to access symbol datatype

// how to change object values
users.email="thakur@gmail.com"
users.age=44
// Object.freeze(users)
users.age=47
// console.log(users);

users.greeting=function(){
    console.log("Hello Users");
}
console.log(users.greeting) //function reference comes
// console.log(users.greeting());

users.greeting2=function(){
    console.log(`Hello Users,${users.name}`);
}
users.greeting2=function(){
    console.log(`Hello Users,${this.age}`);
}


// console.log(users.greeting2());


// Object lecture 2

// const tinderUser=new Object()
// console.log(tinderUser);

const tinderUser={}
// console.log(tinderUser);
tinderUser.id="123abc"
tinderUser.name="Harry"
tinderUser.isLoggedIn=true

// console.log(tinderUser);
const regularUser={
    email:"hello@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Pradeep",
            lastName:"Thakur"

        },
    },
}
// console.log(regularUser.fullName.userFullName?.firstName);

// optional chaining -?
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4=Object.assign(obj1,obj2)
// const obj5=Object.assign({},obj1,obj2)  //(documentation)  optional {}-target obj1 and  obj 2-value  combine and fixed in this empty array
// const obj6={...obj1,...obj2} // mostly used

// console.log(obj4)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj6) 

const Users=[
    {id:1,email:"hello1@gmail.com"},
    {id:12,email:"hello2@gmail.com"},
    {id:3,email:"hello3@gmail.com"},
    {id:4,email:"hello4@gmail.com"}
]

// console.log(Users[4].id);

// console.log(tinderUser);

// Object methods
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogged"));

// Object De-structuring

const course={
    courseName:"JS Course",
    coursePrice:999,
    courseInstructure:"Hitesh"
}
// values access from objects
// course.courseName
// course.coursePrice
// object destructure
const{courseName,coursePrice,courseInstructure:ins}=course
// console.log(courseName);
// console.log(coursePrice);
// console.log(courseInstructure);
console.log(ins);

// react example

// const Navbar=(props.company)=>{

// }

// Navbar(company="Hitesh")

// const Navbar=({company})=>{

// }

// Navbar(company="Hitesh")
// JSON EXAMPLE
// {
//     "courseName":"JS Course",
//     "coursePrice":999,
//     "courseInstructure":"Hitesh"
// }

// json is like a object without name


// random user me api   check