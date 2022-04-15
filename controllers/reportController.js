import {objReportByname, objReports} from "../models/reportModel.js";
import multer from "multer"; //importo multer

import { connection } from "../models/database.js"; //importo la variabile che contiene l'oggetto connesione



//inizializzo multer specificando la destinazione delli immagini
//multer.single ->  per specificare che verrà ricevuto un solo file dal form

export const upload = multer({ dest: "./public/assets/uploads" }).single(
  "imageUpload" 
); 



         //ritornare tutti i reports
export const getReports = (req, res) => {
  connection.query("select * from reports", (err, results) => {
    if (err) throw err;

    let reports = objReports(results); //motodo del reportModel che ritorna un array filtrato
    console.log(reports);
    res.render("reports", { reports: reports }); //mando la view e i giusti dati ritornati dal model
  });
};



          //ritornare i report di una città
export const getReportsByCity = (req, res) => {
  const { city } = req.params;

  connection.query(
    "SELECT * FROM reports WHERE city= ?",
    [city.toLowerCase()],
    (err, results) => {
      if (err) throw err;

      let level = 0;
      let images = [];
      let levels = [];

     let reports= objReportByname(city,results);   //metodo del reportModel che restituisce un oggetto filtrato

      res.status(200).render("report", { reports: reports }); //mando la view con i dati
    }
  );
};

export const insertReport = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send("errore");
      return console.error(err);
    }
    //prendo i dati dal form
    const city = req.body.city.toLowerCase();
    const level = Number(req.body.level);
    const fileImage = req.file.filename;

    connection.query(
      "insert into reports(city,level,img) values(?,?,?)", //query
      [city, level, fileImage],
      (err, result) => {
        res.status(201).redirect("/reports"); //reindirizzamento a /reports
      }
    );
  });
};
