import express from "express";
import cors from "cors";
import { dbCreateConnection } from "./orm/dbConnection";
import UserController from "./controllers/user.controller"

const app = express();

// // Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


// Database connection
(async () => {
    await dbCreateConnection.initialize()
      .then(() => {
        console.log(`Database connection successful. Database: '${dbCreateConnection.options.database}'`);
      })
      .catch((err: any) => {
        console.error("Error during Data Source initialization:", err)
      });
})();


app.use(cors(options));
app.use(express.json());

app.use('/user', UserController)


const port = process.env.PORT || 2000 ;
app.listen(port, () => {
    console.log(`Listening on the port: http://localhost:${port}`);
});

