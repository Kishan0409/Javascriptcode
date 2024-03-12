// Q1. function to reverse a string 

function reverseString(str) {
    const string = str.split('').reverse().join('')
    console.log(string)
    
}
reverseString('Hello')

// Q2.2. Write a JavaScript program to find the maximum number in an array.

function maxElement() {
    const data = [2,4,5,6,7,9,10,10]
    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)

    console.log(`max value ${maxValue}`)
    console.log(`minimum valye ${minValue}`);
}
maxElement();   


// Q3. Using callback print data1 , data2 and data3 every two seconds ??

   function getData(dataid, getnextData) {

    setTimeout(() => {
        console.log("data" , dataid)
        if(getnextData) {
            getnextData();
        }
    },2000)
    
   }
   getData(1 , ()=> {   
    getData(2, () => {
        getData(3)
    });
   });


// // Q4, Promise in javascript ??

//  let promise = new Promise((resolve , reject) => {
//     console.log("I am a promise")
//     // resolve("sucess")
//     reject("some error occured")

//  })


// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise")
//          resolve("sucess");

//     })
// }
//   let promise = getPromise()
//   promise.then((res) => {
//     console.log("promise fullfilled" , res)
//     promise.catch((err) => {
//         console.log("rejected" , err)

//     })
//   })



// Q5.   Async await 
 function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data" , dataId)
            resolve("sucess");
        },3000)

    })
 }
  async function getAllData(){
    console.log("gettin data...1");
    await  getData(1);
    console.log("gettin data...2");
    await  getData(2);
    console.log("gettin data...3");
    await  getData(3);
    console.log("gettin data...4");
    await  getData(4);
    console.log("gettin data...5");
    await  getData(5);
   
  }
  getAllData();





