import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rental";


class RentalsRepository implements IRentalsRepository {

  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }
  
  async create({ 
    car_id, 
    expected_return_date,
    user_id,
    id,
    end_date,
    total,
  }: ICreateRentalDTO): Promise<Rental>{
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      id,
      user_id,
      end_date,
      total
    });

    await this.repository.save(rental);
    return rental;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const user = await this.repository.findOne({
      where: { user_id, end_date: null}
    });
    return user;
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const car = await this.repository.findOne({
      where: { car_id, end_date: null}
    })
    return car;
  }

  async findById(id: string): Promise<Rental> {
    const rentalId = await this.repository.findOne(id);
    return rentalId;
  }

  findByUser(user_id: string): Promise<Rental[]> {
    throw new Error("Method not implemented.");
  }
  
}

export { RentalsRepository };