import { Router } from "express";
import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriresRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();


categoriresRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepositories.create({name, description})

  return response.status(201).send();

});

export { categoriresRoutes }; 