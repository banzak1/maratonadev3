//configurando servidor
const express = require("express");
const server = express();


//configurando servidor para apresentar arquivos estaticos

server.use(express.static('public'))


//configurando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})


//confirgurar apresentação da pagina
server.get("/", function(req, res) {
    return res.render("index.html")

})

server.listen(3000)
