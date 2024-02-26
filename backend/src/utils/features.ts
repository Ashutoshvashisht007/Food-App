import mongoose from "mongoose";

export const connectDB = (uri: string) => {
    mongoose.connect(uri,{
        dbName: "FoodApp",
    }).then(connect => console.log(`Database Connected to ${connect.connection.host}`)).catch(e => console.log(e))
}