// let username = " DNS ";
// let email = "DNS123@GMAIL.COM";
// let password = "DNS@1234";

// function values(username,email,password) {
//     return username.replaceAll(" ");
//     return email.toLowerCase();
//     if(password.length() >= 8 && (password.contains("@") || password.contains("$") || password.contains("#"))) {
//         return "Strong Password";
//     }
// }

// console.log(values(username,email,password));
let username = " DNS ";
let email = "DNS123@GMAIL.COM";
let password = "DNS@1234";

function values(username, email, password) {
    username = username.replaceAll(" ", "");

    email = email.toLowerCase();

    let passwordStatus = "Weak Password";
    if (
        password.length >= 8 &&
        (password.includes("@") || password.includes("$") || password.includes("#"))
    ) {
        passwordStatus = "Strong Password";
    }

    let obj1 = {
        name:"Nick"
    }

    let obj2 = {
        id:9,
        name:"Mick"
    }

    // return [obj1,obj2 ]

    return {
        obj1,
        obj2
    }



    return {
        username,
        email,
        passwordStatus
    };
}

console.log(values(username, email, password));


let userData=values(username,email,password)


// console.log(userData.obj1.name);



// // console.log(userData);

// // Object.keys(userData),


