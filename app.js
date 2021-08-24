const express = require ("express");
const path = require ("path")
const app = express()

const publicPath = path.resolve (__dirname,"./Public");
app.use(express.static (publicPath))

app.listen(3000, () =>{
    console.log ("servidor activado en puerto 3000, sale corriendo")
})

app.use(express.static(path.join(__dirname,"Public")))

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"))

    
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});