# Server 4UZ

## **Navodila**

### **Node**

Inštaliramo node-js. Brez tega ne uspemo ustvariti serverja. <br>
To je link za download:
https://nodejs.org/en/download

### **Ustvarimo server**
V programu visual studio odpremo poljubno mapo, v kateri ustvarimo file app.js. Ta file bo vseboval kodo za naš server. <br>
Znotraj mape ustvarimo še eno mapo imenovano "views". V tej mapi bomo imeli vse naše spletne strani.


### **Koda za server**

```js
const express = require('express')
const app = express()
```
Express je knjižnjica, s katero ustvarimo server

```js
const expbs = require('express-handlebars')
const bodyParser = require('body-parser')
```
Handlebars je pa "motor" naše spletne strani. Handlebars poveže podatke ozadja z ospredjem spletne strani

```js
app.use(bodyParser.urlencoded({extended: false}))
app.engine('handlebars', expbs.engine({defaultLayout: "main"}))
app.set('view engine', 'handlebars')
```
BodyParser nam rabi, da lahko pošiljamo podatke na server (req.body) <br>
V teh treh stavkih povemo serverju, da uporabljamo "handlebars" kot "motor" naše spletne strani. 

```js
var cors = require('cors')
app.use(cors())
```
Cors (Cross-origin resource sharing ) pove browserju, da je naš server varen in da mu lahko pošiljamo podatke. 

```js
app.use(express.static('public'))
```
Tukaj povemo serverju, da bo najdu css file v mapi public. 
Mapo pubic ustvarimo. Znotraj mape publuc pa ustvarimo mapo css, ki bo vsebovala vse file css. 

```js
app.get('/', (req, res) => {
    res.render('index', {
        oseba: oseba
    })
})
```
Tukaj povemo, da na naši glvni strani, ponavadi "localhost:3000", bomo ustvarili spletno stran imenovano index, ki se nahaja vedno v mapi views.

```js
app.listen(3000, () => {
    console.log("Dela")
})
```
Določimo vrata (številka 3000), na kateri bo deloval server. To pomeni, da bo server deloval na naslovu "http://localhost:3000". Localhost je različica za lokalni ip naslov računanika (ponavadi 192.168.xxx.xxx)

### **Handlebars**
V mapi views ustvarimo novo mapo imenovano layouts. Znotraj te mape pa nov file imenovan main.handlebars. Ta file nam rabi, da lahko imamo enako strukturo za vse druge spletne strani. 

Znotraj mape views pa ustvarimo file index.handlebars. To bo naša glavna speletna stran. 


### **Naloži zunanje knjižnjice**
Za vsako zunanjo knjižnjico je potrebno "npm install"

    
```js
npm i express
npm i express-handlebars
npm i body-parser
npm i cors

```