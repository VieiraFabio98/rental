import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICarsRepository } from "../ICarsRepository";


class CarsRepositoryInMemory implements ICarsRepository{
   
  
  cars: Car[] = [];
  
  async create({
    name,
    description,
    daily_rate,
    License_plate,
    fine_amount,
    brand,  
    category_id
  }): Promise<Car> {
    const car = new Car();
    
    Object.assign(car, {
      name,
      description,
      daily_rate,
      License_plate,
      fine_amount,
      brand,
      category_id
    });

    this.cars.push(car)

    return car;
  };

  async findByLicensePlate(License_plate: string): Promise<Car> {
  return this.cars.find((car) => car.License_plate === License_plate);
  }

}

export { CarsRepositoryInMemory };