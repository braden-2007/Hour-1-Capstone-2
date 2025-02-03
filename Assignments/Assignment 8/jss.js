class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "VALIDATIONERROR";
    }
}
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
class hi {
    constructor(turtle){
        this.turtle = turtle
    }
}

try{
    console.log(validateUser("RedRole"));
}catch (error){
    console.error(error.message);
}
