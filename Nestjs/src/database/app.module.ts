import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { config } from "dotenv";

config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;

if (!MONGODB_URI || !MONGODB_NAME) {
    throw new Error("Please provide a MongoDB URI and database name");
}

@Module({
    imports: [
        MongooseModule.forRoot(MONGODB_URI, {
            dbName: MONGODB_NAME,
        }),
    ],
})
export class DatabaseModule {}
