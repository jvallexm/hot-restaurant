module.exports = function(app){
    
    app.get(`/`,(req,res)=>{
        res.send(path.join(__dirname + `/../public/home.html`));
    });

    app.get(`/reservations`,(req,res)=>{
        res.send(path.join(__dirname + `/../public/tables.html`));
    });

}