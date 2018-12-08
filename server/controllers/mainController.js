const countryList = [];
let id = 1;

module.exports = {
  getAll:(req, res) => {
    res.status(200).send(countryList)
  },
  addCountry:(req, res) => {
    let newCountry = {
      country: req.body.text,
      id: id
    }
    countryList.push(newCountry)
    id++
    console.log("post endpoint working!")
    res.status(200).send(countryList)
  },
  editCountry:(req, res) => {
    console.log(req.body, req.params.id)
    const {country} = req.body
    const updateId = req.params.id;
    const countryIndex = countryList.findIndex(country => {
      if( country.id == updateId) {
        return true
      } else {
        return false
      }
    })
    // console.log(countryIndex)
    countryList [countryIndex] = {
      country: country,
      id: updateId
    }
    res.status(200).send(countryList)
  },
  deleteCountry:(req, res) => {
    const deleteID = req.params.id;
    let countryIndex = countryList.findIndex(country => countryList.id  == deleteID);
    countryList.splice(countryList[countryIndex], 1);
    res.status(200).send(countryList); 
  }
}