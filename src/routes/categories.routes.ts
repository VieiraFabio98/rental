import { response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriresRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriresRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if(categoryAlreadyExists){
    return response.status(400).json({error: "category already exists"});
  }

  categoriesRepository.create({name, description})

  return response.status(201).send();

});

categoriresRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
})

export { categoriresRoutes }; 