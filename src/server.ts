import express from 'express';
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerfile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerfile))

app.use(router);

app.listen(3333, () => console.log("Server is listening")); 