//configurando servidor
const express = require("express");
const server = express();



//configurando servidor para apresentar arquivos estaticos
server.use(express.static('public'))

//habilitar body do formulario
server.use(express.urlencoded({extended: true}))

//configurar a conexão com banco de dados
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: 'leosl1230',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})


//configurando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

//lista de doadores: array




//confirgurar apresentação da pagina
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})


server.post("/", function(req, res){
//pegar dados do formulario    
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios")

    } else {

    }

    //coloco valores dentro do banco de dados
    const query = `
    INSERT INTO donors ("name", "email", "blood") 
    VALUES ($1, $2, $3)`
    
    
    
    db.query(query, [naem, email, blood])

    return res.redirect("/")
})


server.listen(3000)
