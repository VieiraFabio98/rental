import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";


interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_data: Date;
}

class CreateRentalUseCase {

  constructor(private rentalsRepository: IRentalsRepository){
    
  }

  async execute({ 
    user_id, 
    car_id, 
    expected_return_data
  }: IRequest): Promise<void>{

    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

    if(carUnavailable){
      throw new AppError("Car is unavaiable");
    }

    const rentalOpenToUSer = await this.rentalsRepository.findOpenRentalByUser(user_id);

    if(rentalOpenToUSer){
      throw new AppError("There is a rental is progress");
    }
  }

}

export { CreateRentalUseCase }