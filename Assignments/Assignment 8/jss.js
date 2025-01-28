function validateUser(user){
    if (typeof user !=  "string"){
        throw new Error("NOT VALID");
    }else if(user.length > 15 || user.length < 5){
        throw new Error("USERNAME TO LONG/SHORT")   ;
    }return "valid :). Hi " + user;
}

try{
    console.log(validateUser(3 + "5"));
}catch (error){
    console.error(error.message);
}


try{
    console.log(validateUser("RedRole"));
}catch (error){
    console.error(error.message);
}