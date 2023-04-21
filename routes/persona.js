const Persona = require('../models/Persona');
const { isSupportedCountry } = require('../utils');

// load .env file
require('dotenv').config();

const personaRoute = (req, res)=>{
    let { gender, country, amount } = req.body;
    try{
        // check for required fields
        if(!gender) return res.status(400).send(null);
        // check for supported countries
        // if(country && !isSupportedCountry(country)) return res.status(400).send(null);
        // limit the amount of profiles to 100 at most
        amount = Math.abs(amount) > 100 ? 100 : Math.abs(amount);
        // generate profile Persona based on the amount
        const profiles = [];
        for(let i = 0; i < amount; i++){
            profiles.push(new Persona(gender));
        }
        res.status(200).json(profiles);
    }
    catch(error){
        console.log(error);
        res.status(500).send(null);
    }
}

module.exports = personaRoute;
