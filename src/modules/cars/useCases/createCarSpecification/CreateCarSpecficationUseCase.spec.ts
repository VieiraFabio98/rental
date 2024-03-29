import { SpecificationRepositoryInMemory } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepositoryInMemory";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { convertToObject } from "typescript";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"


let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory

describe("Create Car Specification", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory,
    specificationsRepositoryInMemory);
  })

  it("Should not be able to add a new specification to non-existent car", async() => {
    const car_id = "1234";
    const specifications_id = ["54321"]

    await expect( createCarSpecificationUseCase.execute({ car_id, specifications_id })
    ).rejects.toEqual(new AppError("Car does not exists"))
  })

  it("Should be able to add a new specification to the car", async() => {
    const car = await carsRepositoryInMemory.create({
      name: "name car",
      description: "description car",
      daily_rate: 999,
      License_plate: "ABC-1234",
      fine_amount: 100,
      brand: "car brand",
      category_id: "category"
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test",
    });

    const specifications_id = [specification.id]
   const specificationsCars = await createCarSpecificationUseCase.execute({car_id: car.id, specifications_id});

   expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });

  

})