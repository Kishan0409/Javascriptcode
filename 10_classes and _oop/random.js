// function random() {
//     let num = Math.floor(Math.random() * 10) + 1
//     return num ; 
// }
// console.log(random());


// guess the output 


    // console.log(x)
    // let x = 10;
 

    // async function foo() {
    //     return 'Hello world'
    // }
    // const result = foo() 
    // console.log(result);

    // filter method 

    // const numbers = [0,1,2,3,4,5]

    // let result = numbers.map((e) => {
    //     return e.toString()
    // }
    // )
    // console.log(result);

    // time clock when a button is clicked 

    let result = document.getElementById('time')
    let count = 0
    let btn = document.getElementById('start').addEventListener('click', () => {
        const stopData =  setInterval(() => {
            count++
            result.innerHTML = count;
            if(count===10) {
                clearInterval(stopData);
                btn.disabled = true;
            }
        },1000)
     
    })