const current  = [];
const waitList = [];

module.exports = function(app){

    app.get(`/api/tables`,(req,res)=>{
        res.send(current);
    });

    app.get(`/api/waitlist`,(req,res)=>{
        res.send(waitList);
    });

    app.post(`/api/reservations`,(req,res)=>{

        console.log("**** NEW SUBMISSION ****");
        console.log(req.body);

        if(current.length < 5){

            current.push(req.body);
            res.send(true);

        } else {

            waitList.push(req.body);
            res.send(false)

        }

    });

}