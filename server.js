const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require("./db/connect");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const prolmRoutes = require('./routes/problRoutes');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 8000

app.use(express.json());
var allowedOrigins = ['https://vcet-hackathon.web.app/','https://hack-dash.web.app'];

app.use(cors({

  origin: function(origin, callback){

    // allow requests with no origin

    // (like mobile apps or curl requests)

    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){

      var msg = 'The CORS policy for this site does not ' +

                'allow access from the specified Origin.';

      return callback(new Error(msg), false);

    }

    return callback(null, true);

  }
}));


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
app.use(errorHandler);

start();

//16th Aug 
// Dashboard -Filters
// Sort problem according to team preference