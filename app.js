const express = require('express')
const app = express()
const expbs = require('express-handlebars')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', expbs.engine({defaultLayout: "main"}))
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
        oseba: oseba,
        css: "style.css"
    })
})

app.get('/login', (req, res) => {
    res.render('login', {
        css: "style.css"
    })
   
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

app.get('/login2', (req, res) => {
    res.render('login2')
})

var vsiMaili = ["fabio@sluga.it", "manica@slo.si", "igor@cok.it",
                "knjiznjicarka@knjiga.it", "a@b.com"]

var vsaGesla = ["enciklopedija", "iLoveSlo", "promessiSposi", 
                "knjige104", "12345678"]

app.post('/fabio', (req, res) => {
    var mail = req.body.mail
    var geslo = req.body.geslo

    console.log(mail, geslo)

    if (vsiMaili.includes(mail)) {
        var index = vsiMaili.indexOf(mail)
        console.log(index)

        if (geslo == vsaGesla[index]) {
            res.render('home', {
                mail: mail
            })
        } else {
            res.render('login2', {
                napaka: true,
                sporocilo: "Geslo ni pravilno"
            })
        }

    } else {
        
        res.render('login2', {
            napaka: true,
            sporocilo: "Mail ne obstaja"
        })
        
        
        console.log("Mail ne obstaja")
    }

   
})












app.listen(3000, () => {
    console.log("Dela")
})