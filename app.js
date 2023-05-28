const express = require('express')
const app  = express();
const port = process.env.PORT || '3005';
const web = require('./routes/web')

app.set('view engine','ejs')

app.use(express.static('public'))

app.use('/', web)

app.listen(port, () => {
    console.log('server started')
})