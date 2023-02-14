import express from 'express';
import { categoriresRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specification.routes';

const app = express();

app.use(express.json());
app.use("/categories", categoriresRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is listening")); 