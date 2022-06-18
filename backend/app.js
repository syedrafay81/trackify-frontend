const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const Tracker = require("./model/tracker");

dotenv.config({ path: './config.env'});
require("./db/connection");

app.use(express.json());

app.use(cors()) 

app.post('/locationdata',(req,res)=> {
    console.log(req.body)
    let x= req.body;

    const {
        deviceID, lat, long
    } = req.body

    try {

     
      

            const tracker = new Tracker({
                deviceID, lat, long
            });
            await tracker.save()
            res.status(200).json("done");
            console.log("done")

        
    } catch (err) {
        console.log(err);
    }





    res.send(x)
})

app.use(require('./routers/Userssiginandsignup'));
// app.use(require('./routers/requestforcar'));
app.use(require('./routers/signin&signout'));
// app.use(require('./routers/yourmessege'));
// app.use(require('./routers/Carlist'));
// app.use(require('./routers/bookingrequests'));
// app.use(require('./routers/count'));
// app.use(require('./routers/bookingstatus'));
app.use(require('./routers/uservarification'));
// app.use(require('./routers/addcarstatus'));

const port = process.env.PORT || 5000;




server.listen(port, ()=>{ 
     console.log(`port is runing ${port}`);
 })