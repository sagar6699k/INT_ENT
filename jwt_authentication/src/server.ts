import app from "./index";
const PORT = 2022;
import { connect } from "./configs/db";
// import 'dotenv/config';


app.listen(PORT,async () => {
    await connect();
    console.log(`Listening on the port: http://localhost:${PORT}`);
    
})