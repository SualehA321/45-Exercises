// Array of Current Users.
let current_users = ["Sualeh", "Umer", "Mustafa", "Zain", "Ezal"];

// Array Of New Users.
let new_users = ["Hamza", "Zain", "Ali", "Usman", "Ezal"];

// Loop through new_users to check for usernames avaibility.
new_users.forEach(new_one_user => {
   
    // Making a condition for username already exist and save in our_condition variable.
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
//    Print Differnet message using If-Else statement.
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})