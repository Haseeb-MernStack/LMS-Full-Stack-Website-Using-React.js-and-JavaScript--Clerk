import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebHooks } from './controllers/webhooks.js';

// initialize express
const app = express()

// connect to database.
await connectDB();

// Middlewares
app.use(cors());

// routes.
app.get('/', (req,res)=>{res.send("API Working...")});
app.post('/clerk',express.json(), clerkWebHooks);


// PORT 
const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`);    
});