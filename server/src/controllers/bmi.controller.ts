export class BmiController{
   static calculateBmi(req:any, res:any ){
        console.log("Skaiciuojami rezultatai");
        const m = parseInt(req.body.m);
        const h = parseInt(req.body.h);
        console.log();
        res.json({
            "bmi": ((Math.round((m / (h*h))*100000))/10),
        });
   } 
}