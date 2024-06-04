import { connect } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;

if (!MONGODB_URI || !MONGODB_NAME) {
    throw new Error("Missing environment variables for MongoDB");
}

export const connectDB = await connect(MONGODB_URI, {
    dbName: MONGODB_NAME,
})
    .then(() => console.log(`Connected to MongoDB: ${MONGODB_NAME}`))
    .catch((error) => {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
    });
