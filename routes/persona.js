// load .env file
require('dotenv').config();

const personaRoute = (req, res)=>{
    // const { gender }
    try{

    }
    catch(error){
        console.log(error);
        res.status(500).send(null);
    }
}

module.exports = personaRoute;
