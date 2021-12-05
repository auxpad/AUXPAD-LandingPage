import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SendGrid from '@sendgrid/mail';

var app = express();
app.use(cors());

SendGrid.setApiKey(process.env.SENDGRID_KEY);
app.post('/send-email', (req, res) => {
    console.log(req.body);
    
    /*
    let msg = {
        to: "app@auxpad.com",
        from: "joshishreehar@gmail.com",
        subject: "AUXPAD wave",
        text:  "Hey"
    }
    try{
        await SendGrid.send(msg);
    } catch (error) {
          console.log("Error: ", error)
          res.send({completed:false})
    }
    res.send({completed:true});
    */
});


const PORT = 5000;
app.listen(PORT, function () {
  console.log('App running on port', PORT);
});