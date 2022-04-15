

import { connection } from "../models/database.js";




export const getCities= async (req, res)=>{

     connection.query("SELECT DISTINCT city from reports",(err, results)=>{

          let cities=[];
          results.forEach(result => {
               cities.push(result.city);
          });
      res.render("cities",{cities});
     })
  
  
}
   
   