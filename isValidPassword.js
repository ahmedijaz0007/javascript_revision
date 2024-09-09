function isValidPassword(username , password){
    console.log(password.length < 8 || password.includes(username) || password.includes(" "))
}

isValidPassword("ali","aliahmed")

isValidPassword("asdas","asd")

 isValidPassword("asd","wqeqweqweq")