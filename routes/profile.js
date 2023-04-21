const Persona = require("../models/Persona");

const profileRoute = (req, res)=>{
    // const genders = ["male", "female"];
    try{
        // create a new persona arbitrarily (randomly)
        const profile = new Persona(["male", "female"][Math.floor(Math.random() * 2)]);    
        res.status(200).json(profile);
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
}

module.exports = profileRoute;
