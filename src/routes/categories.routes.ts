import { Router } from "express";
const categoriresRoutes = Router();

const categories = [];

categoriresRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;
  categories.push({
    name, description,
  })

  return response.status(201).send();
});

export { categoriresRoutes };