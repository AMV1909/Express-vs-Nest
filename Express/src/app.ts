import express from "express";
import { userRoutes } from "./routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/api", userRoutes);

export { app };
