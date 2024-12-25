import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import connectCloudinary from './config/cloudinary.js';
import CartRouter from './routes/cartRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())


// Api Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', CartRouter)

app.get('/', (req, res) => {
res.send("API WORKING");
})

app.listen(port, () => {
    console.log("Server listen on PORT :" + port);
    
})