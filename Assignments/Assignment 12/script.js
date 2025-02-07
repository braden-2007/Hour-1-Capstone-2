const user1 = {
    address: {
        city: "New York",
        state: "NY"
    }
};
const user2 = {};

// TODO: Define getUserCity here.
function getUserCity(user){
    return user?.address?.city;
}


console.log(getUserCity(user1)); // "New York"
console.log(getUserCity(user2)); // "Unknown"