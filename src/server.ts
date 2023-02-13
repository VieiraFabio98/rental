import express from 'express';
import { categoriresRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use("/categories", categoriresRoutes);

app.listen(3333, () => console.log("Server is listening")); 