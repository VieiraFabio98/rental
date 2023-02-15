import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";


const categoriresRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriresRoutes.post("/", (request, response) =>{
  return createCategoryController.handle(request, response);

});

categoriresRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
})

export { categoriresRoutes }; 