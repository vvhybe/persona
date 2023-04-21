const humanames = require('human-names');
const { emailDomains, countryByCities } = require('../constants');
const { getCityByCountry, getCallingCodeByCountry } = require('../utils');
class Persona{
    // protected properties
    #country = countryByCities[Math.floor(Math.random() * countryByCities.length)].country;
    constructor(gender = "male", country = this.#country){
        // this.country = country ? country : this.#country;
        this.name = gender.toLowerCase() == "male" ? humanames.maleRandom() : humanames.femaleRandom();
        // get random age between 5 and 100
        this.age = Math.floor(Math.random() * 100) + 5;
        this.sex = gender.toLowerCase() == "male" ? gender : "female";
        // calculate the birthdate of the person by the age
        this.birthdate = new Date(`${new Date().getFullYear() - this.age}/${Math.floor(Math.random() * 11) + 1}/${Math.floor(Math.random() * 31)}`).toLocaleDateString();
        // generate a random phone number prefixed by the calling code of the country
        this.phone = `(${getCallingCodeByCountry(this.#country)}) ${Math.floor(Math.random() * 100000000)}`;
        // generate a random email
        this.email = `${this.name.toLowerCase().replace(" ", ".")}@${emailDomains[Math.floor(Math.random() * emailDomains.length)]}`;
        this.address = {
            country: this.#country,
            city: getCityByCountry(this.#country),
            street: Math.floor(Math.random() * 10000),
            zip: Math.floor(Math.random() * 100000)
        }
    }
}

module.exports = Persona;