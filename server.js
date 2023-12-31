const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require("./db/connect");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const prolmRoutes = require('./routes/problRoutes');
const dRoutes = require('./routes/dRoutes');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 8000

app.use(express.json());
app.use(cors());



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server started on ${port}`)
            console.log(`Mongo Connected!!!`)
        });
    } catch (err) {
        console.log(err);
    }
}
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/teams', teamRoutes);
app.use('/api/v1/problems', prolmRoutes);
app.use('/extra/api', dRoutes)
app.use(errorHandler);

start();
