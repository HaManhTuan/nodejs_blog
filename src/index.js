const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const sass = require('node-sass');

  const app = express()
 
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(express.urlencoded({
    extended: true
  }))
  app.use(express.json())

  app.use(morgan('combined'))
  app.engine('hbs', handlebars.engine({
    extname: '.hbs'
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'resources', 'views'))


  const port = 3000

  app.get('/', (req, res) => {
    res.render('home')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })