import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase{
  constructor(private categoriesRepository: ICategoriesRepository) {};

  execute(): Category[]{
    const categoires = this.categoriesRepository.list();
    
    return categoires;
  }

}

export { ListCategoriesUseCase };