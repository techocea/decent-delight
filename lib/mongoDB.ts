import mongoose from "mongoose"

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> =>{
    mongoose.set("strictQuery",true)

    if (isConnected){
        console.log("MongoDB is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL || "",{
            dbName:"decent_delight"
        })
        isConnected = true;
        console.log("MongoDb is connected!")
    } catch (error) {
        console.log("MongoDB error is: ",error)
    }
}