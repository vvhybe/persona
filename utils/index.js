const { countryByCities, countryByCallingCode } = require('../constants')

/**
 * Get a random city by country name
 * @param {String} country 
 * @returns 
 * @example
 * getCityByCountry("Spain") // returns "Ibiza"
 */
function getCityByCountry(country) {
    const Country = countryByCities.find(countryObj => countryObj.country.toLowerCase() == country.toLowerCase())
    return Country.cities[Math.floor(Math.random() * Country.cities.length)]
}

/**
 * Get the calling code of a country by its name
 * @param {String} country
 * @returns
 * @example
 * getCallingCodeByCountry("Spain") // returns 34
 */
function getCallingCodeByCountry(country) {
    return countryByCallingCode.find(countryObj => countryObj.country.toLowerCase() == country.toLowerCase()).calling_code
}

// check for supported countries
function isSupportedCountry(country) {
    return countryByCities.find(countryObj => countryObj.country.toLowerCase() == country.toLowerCase()) ? true : false
}

module.exports = { getCityByCountry, getCallingCodeByCountry, isSupportedCountry };