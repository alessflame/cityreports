import express from "express";
import routerReport from "./routes/report.js";
import routerCity from "./routes/city.js";
import routerHome from "./routes/home.js";
import ejs from "ejs";

const app= express();
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");//setto il template engine

app.use(express.static('./public'));//middleware interno per l'utilizzo dei file statici -> cartella public


app.use("/", routerHome);    //home
app.use("/reports", routerReport); //utilizzo del routes report per l'entry-point "reports"
app.use("/cities", routerCity); //utilizzo del routes city per l'entry-point "cities"
app.use(express.urlencoded({extended:false}));
app.use("*", (req, res)=>{
     res.status(404).render("notfound",{}); //gestione delle risorse non trovate
})



app.listen(3000,(req,res)=>{
     console.log("server in ascolto alla porta 3000"); 
});




