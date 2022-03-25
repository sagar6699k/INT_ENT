import mongoose from "mongoose";

export const connect = async () => {
    console.log("connection successfull");
    return mongoose.connect("mongodb://127.0.0.1:27017/int_ent_db")
}
