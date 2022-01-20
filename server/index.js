import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

const CONNECTION_URL = process.env.MONGO_URI;

const PORT = 5000;

mongoose.connect(CONNECTION_URL,{
}).then(() => app.listen(PORT, ()=> 
     console.log(`Connection is established and running on port:${PORT}`)
)).catch((err) => console.error(err.message));


app.listen(()=>{
     console.log(`Now Listening on port ${PORT}`)
})

