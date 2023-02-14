import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/service/CreateCategoryService";

const categoriresRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriresRoutes.post("/", (request, response) =>{
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({name, description});

  return response.status(201).send();

});

categoriresRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
})

export { categoriresRoutes }; 