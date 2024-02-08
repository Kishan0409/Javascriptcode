// For loop 

for(let i = 0 ; i<=10; i++) {
    const element = i ;
    if(element === 5) {
        // console.log(" 5 is best number ")
    }
    // console.log(element)
}


for(let i=1 ; i<=10;i++) {
    console.log(`outer loop is ${i}`)
for(let j=1 ;j<=10 ; j++) {
    console.log(`inner loop is ${j}`)


   console.log(i + '*' + j + '=' + i*j) 
}
}



// ARRAY 

const myArray = ["flash","batman","superman"]
console.log(myArray.length)

for(let index=0 ; index <= myArray.length; index++) {
    const element = myArray[index]
    console.log(element)
}


// BREAK AND CONTINUE 

for(let index = 1 ; index<=20; index++) {
    if(index=== 5) {
        console.log('Detected 5')
        break
    }
    console.log(`value of i is ${index }`)
}


for(let i=1; i<=20; i++) {
    if(i===5) {
        console.log('Detected 5') 
        continue
    }
    console.log(`value of is ${i}`)
}