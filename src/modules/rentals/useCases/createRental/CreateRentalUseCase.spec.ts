import { RentalRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase"


let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalRepositoryInMemory;

describe("Create Rental", () => {
  rentalsRepositoryInMemory = new RentalRepositoryInMemory();
  createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);

  it("should be able to create a new rental", async () => {
    await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "121212",
      expected_return_data: new Date()
    });
  })
})