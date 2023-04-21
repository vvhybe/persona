const humanames = require('human-names');
const avgAge = Math.floor(Math.random() * 100); // this is a scope error

const profileRoute = (req, res)=>{
    try{
        const maleProfile = {
            name: humanames.maleRandom(),
            age: avgAge,
            sex: "male"
        }

        const femaleProfile = {
            name: humanames.femaleRandom(),
            age: avgAge,
            sex: "female"
        }

        const profiles = [maleProfile, femaleProfile];
     
        // send a random profile
        res.status(200).json(profiles[Math.floor(Math.random() * profiles.length)]);
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
}

module.exports = profileRoute;
