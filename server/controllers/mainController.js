const countryList = [];
let id = 1;

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

  },
  deleteCountry:(req, res) => {
    // console.log("deleted!")
    let index = countryList.findIndex((county) => {
      if(country.id === Number(req.params.id)) {
        return true
      } else {
        return false
      }
    })
      if(index !== -1) {
        countryList.splice(index, 1)
      }
    
    res.status(200).send(countryList)
  }

}