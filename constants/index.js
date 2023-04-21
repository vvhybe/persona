const emailDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "live.com", "aol.com", "icloud.com", "mail.com", "msn.com", "protonmail.com", "zoho.com", "yandex.com", "gmx.com", "mail.ru", "inbox.com", "gmx.net", "tutanota.com", "hushmail.com", "gmx.de", "gmx.us", "gmx.co.uk", "gmx.fr", "gmx.at", "gmx.ch", "gmx.es", "gmx.it", "gmx.nl", "gmx.ca", "gmx.com.au", "gmx.com.br", "gmx.com.mx", "gmx.com.tr", "gmx.com.ar", "gmx.com.co", "gmx.com.pe", "gmx.com.uy", "gmx.com.ve", "gmx.com.ec", "gmx.com.pa", "gmx.com.py", "gmx.com.sv", "gmx.com.gt", "gmx.com.do", "gmx.com.ni", "gmx.com.cr", "gmx.com.hn", "gmx.com.pr", "gmx.com.bo", "gmx.com.cl", "gmx.com.uy", "gmx.com.ve", "gmx.com.ec", "gmx.com.pa", "gmx.com.py", "gmx.com.sv", "gmx.com.gt", "gmx.com.do", "gmx.com.ni", "gmx.com.cr", "gmx.com.hn", "gmx.com.pr", "gmx.com.bo", "gmx.com.cl", "gmx.com.uy", "gmx.com.ve", "gmx.com.ec", "gmx.com.pa", "gmx.com.py", "gmx.com.sv", "gmx.com.gt", "gmx.com.do", "gmx.com.ni", "gmx.com.cr", "gmx.com.hn", "gmx.com.pr", "gmx.com.bo", "gmx.com.cl", "gmx.com.uy", "gmx.com.ve", "gmx.com.ec", "gmx.com.pa", "gmx.com.py", "gmx.com.sv", "gmx.com.gt", "gmx.com.do", "gmx.com.ni", "gmx.com.cr", "gmx.com.hn"]
const countryByAbreviation = require("country-json/src/country-by-abbreviation.json");
const countryByCallingCode = require("country-json/src/country-by-calling-code.json");
const countryByCities = require("./country-by-cities.json");
// export constants:
module.exports = {
    emailDomains,
    countryByAbreviation,
    countryByCallingCode,
    countryByCities
}