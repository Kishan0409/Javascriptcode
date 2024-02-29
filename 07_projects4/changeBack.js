// Gemerate a random number ?

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
    const startchangeColor = function() {
       intervalid = setInterval(changebackColor,1000);
    }

    function changebackColor() {
        document.body.style.backgroundColor = randomColor();
    } 

    const stopbackColor = function() {
        clearInterval(intervalid);
    }


 document.querySelector('#start').addEventListener("click" , startchangeColor);
  document . querySelector('#stop').addEventListener("click" , stopbackColor);







