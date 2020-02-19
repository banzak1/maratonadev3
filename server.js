//configurando servidor
const express = require("express");
const server = express();


//configurando servidor para apresentar arquivos estaticos
server.use(express.static('public'))

//habilitar body do formulario
server.use(express.urlencoded({extended: true}))


//configurando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

//lista de doadores: array
const donors = [
    {
        name: "Leonardo Santana",
        blood: "A-"
    },

]






//confirgurar apresentação da pagina
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})


server.post("/", function(req, res){
//pegar dados do formulario    
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    //coloco valores dentro do array
    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})


server.listen(3000)
