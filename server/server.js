const express = require('express')
const mainctrl = require('./controllers/mainController.js')
const PORT = 4000;

const app = express();

app.use(express.json())

app.get('/api/countries', mainctrl.getAll)

app.post('/api/country', mainctrl.addCountry)

app.put('/api/countries/:id', mainctrl.editCountry)

app.delete('/api/countries/:id', mainctrl.deleteCountry)

app.listen(PORT, console.log(`listening on port ${PORT}`))