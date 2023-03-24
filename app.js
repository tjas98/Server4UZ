const express = require('express')
const app = express()
const expbs = require('express-handlebars')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.engine('handlebars', expbs.engine({defaultLayout: false}))
app.set('view engine', 'handlebars')

var cors = require('cors')
app.use(cors())

app.use(express.static('public'))


app.get('/', (req, res) => {
    
    var oseba = {
        ime: "Manica",
        priimek: "Maver",
        predmet: "Slovenscina"
    }

    res.render('index', {
        oseba: oseba
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/podatki', (req, res) => {
    var mail = req.body.mail
    var geslo = req.body.geslo

    // Ce geslo vsebuje manj kot 6 znakov vrni napako
    if (geslo.length < 6) {
        res.render('login', {
            napaka: true,
            sporocilo: "Geslo vsebuje manj kot 6 znakov"
        })
    }

})

app.listen(3000, () => {
    console.log("Dela")
})