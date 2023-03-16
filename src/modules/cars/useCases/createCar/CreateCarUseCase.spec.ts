import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";


let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory;
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "name car",
      description: "description car",
      daily_rate: 999,
      License_plate: "ABC-1234",
      fine_amount: 100,
      brand: "car brand",
      category_id: "category"
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute({
      name: "Car1",
      description: "description car",
      daily_rate: 999,
      License_plate: "ABC-1234",
      fine_amount: 100,
      brand: "car brand",
      category_id: "category"
    });
    await expect( createCarUseCase.execute({
        name: "Car2",
        description: "description car",
        daily_rate: 999,
        License_plate: "ABC-1234",
        fine_amount: 100,
        brand: "car brand",
        category_id: "category"
      })
    ).rejects.toEqual(new AppError("Car already exists."))
  })

  it("should be able to create a car with available true by dafault", async () => {
    
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "description car",
      daily_rate: 999,
      License_plate: "ABCD-1234",
      fine_amount: 100,
      brand: "car brand",
      category_id: "category",
    });
    expect(car.available).toBe(true);
  })
})
