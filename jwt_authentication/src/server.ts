import {app} from "./index";
const PORT = 2022;
import {connect} from "./configs/db";

app.listen(PORT,async function () {
    await connect();
    console.log(`Listening on the port: http://localhost:${PORT}`);
    
})