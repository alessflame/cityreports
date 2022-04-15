



//funzione che ritorna la lista sistematica di tutti i records
export const objReports=(results)=>{

     let reports = [];
     results.forEach((result) => {
       //scorro i risultati della query per costruire un nuovo oggetto da passare
       let report = {
         //alla view
         city: result.city,
         level: result.level,
         image: result.img,
       };
 
       reports.push(report);
     });

     return reports;

}

//funzione che ritorna un oggetto Report contenente il nome di una città , la media del livello di inquinamento 
//inserito dagli utenti e la lista di tutte le immagini associate ad una città
export const objReportByname=(city,results)=>{
     let level = 0;
     let images = [];
     let levels = [];

     results.forEach((result) => {
       //scorro i risultati della query per costruire un nuovo oggetto da passare
       levels.push(result.level); //alla view
       level += result.level;
       images.push(result.img);
     });
     let reports = {
       //creo l'oggetto da passare alla views
       city: city,
       level: () => {
         return Math.round((Number(level / levels.length) + Number.EPSILON) * 10) / 10; //ritorna il livello medio di tutti i reports
       },
       images: images,
     };

     return reports;
}