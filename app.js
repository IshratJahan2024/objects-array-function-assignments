// Q No1:- 
var friend1 = {
    firstName: "Isra",
    lastName: "majeed",
    id: 5
};
var friend2 = {
    firstName: "Nazia",
    lastName: "Naseer",
    id: 6
};
var friend3 = {
    firstName: "Sheeba",
    lastName: "Moin",
    id: 7
};
var people = {
    friends: []
};
console.log(friend1, friend2, friend3);
console.log(people);
// Q No2:- Rearrange an array using array methods to form the sentence "I am a student if GIAIC."
// Steps:  Scrambled array:
//     * Start with an array of elements in a scrambled order,like 
//  "const scrambleArray = ["student", "of", true,123, "am", "a", "GIAIC", "I"];
// modify the Array:   use methods like split(),join(),.push(),pop(),shift(),and unshift() to;
// convert non-strings(booleans,numbers) to strings if needed.
// split elementsinto character arrays(optional).
// Rearrange characters or elementsin the desired order(modify original array or create temporary arrays).
// output the result: Use  join() to combine elements back into a single string: "I am a student of GIAIC".
// type ScrambledArray = ["student","of","true","123","am","a","GIAIC","I"];
// let scrambledArray = ["string","boolean","number"];
// scrambledArray.push();
// scrambledArray.pop();
// scrambledArray.unshift("I");
// scrambledArray.splice(1,3);
// scrambledArray.splice(2,3,"student", "of");
// scrambledArray.splice(4,1, "GIAIC");
// scrambledArray.join();
// console.log(scrambledArray);
// Q No3:- Creat programe to represent a product catalog using an array and perform basic queries.
// 1.  Define an array named Inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,model,cost,and
// quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quatity property of a specific product (e.g, third product) in the inventory array.
// 5. Explose adding and accessing more element within the inventory array to understand how to manage 
// product data.
// let inventory:products[]=[];
// type products={
//     name:string,
//     model:string,
//     cost:number,
//     quantity:number,
// }
// let product1:products={
//     name:"mobilephone",
//     model:"S21",
//     cost:200000,
//     quantity:10
// }
// let product2:products={
//     name:"smartwatch",
//     model:"I phone",
//     cost:70000,
//     quantity:4
// }
// let product3:products={
//     name:"car",
//     model:"civic",
//     cost:900000,
//     quantity:2
// }
// inventory.push(product1,product2,product3);
// console.log(`The quantity property of the third product is ${inventory[2].quantity}`);
// let product4:products={
//     name:"LED",
//     model:"samsung",
//     cost:50000,
//     quantity:2
// }
// inventory.push(product4);
// console.log(`The name of first product is${inventory[0].name}.`);
// console.log(`the model of second product is ${inventory[1].model}.`);
// console.log(`The cost of four product is ${inventory[3].cost}.`)
// Q no4:- Student list organizer 
// learning objective get comfortable with data structure (object and arrays) and
//  basic function in typescript.
// Task: 1
// student data : The provided code defines and interface named student that discribes 
// Student information like name,senior status(true/false), and whether thay have completed there assignment
// (true/false)
// * Imagen this as a template for organazing student details.
// 2: Student list: 
//  * An array named students stores information about saveral student using the student template.
// Think of this array as your class list!
//  3: Find senior student with assignments (optional):
//  * The code (not shown here) as a function that might find students who are senior and have completed there
// assignment.
// can you guess why this information might be helpfull?
// 4: Class list update:
//  Imagin you need to update your class list! the code(not shown here)might have a function that remove students
//  who have not completed there assignments (assuming only seniors are responsible).
//  Can you think of any resasons why this might be usefull(consider limitation)?
// interface Student {
//     studentInformation: {
//         name: string,
//         seniorStatus: boolean,
//         completedAssign: boolean,
//     },
// };
// let students: Student []= [
//     {studentInformation:{name:"Isra",seniorStatus: true, completedAssign:true}},
//     {studentInformation:{name:"Ishrat",seniorStatus: false, completedAssign:true}},
//     {studentInformation:{name:"Nazia",seniorStatus: true, completedAssign:false}},
//     {studentInformation:{name:"Yasha",seniorStatus: false, completedAssign:false}},
// ];
// function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
//     return students.filter(student =>
//         student.studentInformation.seniorStatus && student.studentInformation.completedAssign
//     )
// };
// const SeniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
// console.log('Senior students who have completed their assignments:', SeniorStudentsWithAssignments);
// function updatedClassList(students:Student[]): Student[]{
//     return students.filter(student => student. studentInformation.seniorStatus ||
//         student.studentInformation.completedAssign)
// }
// const updatedClassListResult = updatedClassList(students);
// console.log(`student who have'nt comlpete there assignment`, updatedClassListResult);
