const countryList = [
  {
    country: "Spain",
    id:1
  },
  {
    country: "Germany",
    id:2
  }
];
let id = 3;

module.exports = {
  getAll:(req, res) => {
    res.status(200).send(countryList)
  },
  addCountry:(req, res) => {
    let newCountry = {
      id: id,
      country: req.body.text
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
    console.log(countryIndex)
    countryList [countryIndex] = {
      id: updateId,
      country: country
    }
    res.status(200).send(countryList)
  },
  deleteCountry:(req, res) => {
    const deleteID = req.params.id;
    countryIndex = countryList.findIndex(country => countryList.id == deleteID);
    countryList.splice(countryIndex, 1);
    res.status(200).send(countryList); 
  }
}