const express = require('express')
const app = express();
const path = require("path");
const apiRoute = require("./routes/apiRoute.js")
const methodOverride = require("method-override")


app.use(methodOverride('_method'))


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


app.use(express.static(path.join(__dirname,'/../public')));


app.listen(8000, (req, res) => {
    console.log("port 8000");
} )

app.use("/api", apiRoute );

app.get("/", (req, res) => {
    res.render("main")
})
