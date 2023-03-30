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

const shranjen_mail = "manica@maver.si" 
const shranjeno_geslo = "slovenscina123"

app.post('/podatki', (req, res) => {
    var mail = req.body.mail
    var geslo = req.body.geslo

    if (mail != shranjen_mail) {
        res.render('login', {
            napaka: true,
            sporocilo: "Račun ne obstaja. Preveri mail"
        })
    } else {
        if (geslo != shranjeno_geslo) {
            res.render('login', {
                napaka: true, 
                sporocilo: "Geslo ni pravilno"
            })
        } else {
            res.render('index', {
                mail: mail
            })
        }
    }
})

app.listen(3000, () => {
    console.log("Dela")
})