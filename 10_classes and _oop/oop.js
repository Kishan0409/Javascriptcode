// const user = {
//     username:"kishan",
//     logincount: 8 ,
//     isloggedin:true,
    
//     getUserDetail : function () {
//         // console.log(this.username);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetail()); 


function user(username , loginCount ,isloggedin ) {
    this.username = username;
    this.lohincount = loginCount;
    this.islogged  = isloggedin

    this.greeting = function(){
        console.log(`welcome ${this,username}`)
    }


}

const kishan = new user("kishan",8 , true);
console.log(kishan.constructor); 


