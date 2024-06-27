// Creating a Array.
let userNames = ["Sualeh", "Umer", "Zeeshan", "Admin", "Ali"];

// Using Function Loop on Array.
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you logging in again.`)
    }
})