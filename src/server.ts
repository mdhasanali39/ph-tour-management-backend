import {Server} from "http"
import mongoose from "mongoose"
import app from "./app";
import { envVariables } from "./app/config/env";

let server: Server;


const main = async() =>{
    try {
        await mongoose.connect(`${envVariables.DB_URI}`);
        console.log("Database is connected");
        
        server = app.listen(envVariables.PORT, () => {
          console.log(`Server is running on port ${envVariables.PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}




main()