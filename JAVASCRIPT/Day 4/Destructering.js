let users = {
    id:1,
    username:"simpi",
    userLocation: {
        city : "Palampur",
        state : "Himachal Pradesh"
    },
    phoneNo : "9876543210",
    skills : {
        FrontEnd:["Html","Css","React"],
        BackEnd:["Java","SpringBoot"]
    }
}

let{id,username,userLocation:{city,state},phoneNo,skills:{FrontEnd:[fsub1,fsub2,fsub3],BackEnd: [bsub1,bsub2,bsub3]}} = users;

console.log(id,username,city,state,phoneNo,fsub1, fsub2, fsub3, bsub1, bsub2, bsub3);