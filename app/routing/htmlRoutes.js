module.exports = function(app){
    
    app.get(`/`,(req,res)=>{
        res.send("home");
    });

    app.get(`/reservations`,(req,res)=>{
        res.send("res");
    });

}