import { UsersRepositoryInMemory } from "@modules/accounts/repositories/inMemory/UserRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/inMemory/UsersTokensRepositoryInMemory";
import { DayJsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/inMemory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase"


let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot mail", () => {


  usersRepositoryInMemory = new UsersRepositoryInMemory();
  dateProvider = new DayJsDateProvider();
  usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
  mailProvider = new MailProviderInMemory();
  
  sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
    usersRepositoryInMemory,
    usersTokensRepositoryInMemory,
    dateProvider,
    mailProvider
  );

  beforeEach(() => {

  })

  it("Should be able to send a forgot password mail to user", async () => {

    const sendMail = jest.spyOn(mailProvider, "sendMail")

    await usersRepositoryInMemory.create({
      driver_license: "664168",
      email: "algo@mail.com",
      name: "Fulano Ciclano",
      password: "1234"
    });

    await sendForgotPasswordMailUseCase.execute("algo@mail.com")

    expect(sendMail).toHaveBeenCalled();
  });

  it("Should not not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("blablabla@email.com")
    ).rejects.toEqual(new AppError("User does not exists!"))
  });

  it("Should be able to create an users token", async() => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create");

    usersRepositoryInMemory.create({
      driver_license: "472932",
      email: "test@mail.com",
      name: "Fulano Beltrano",
      password: "4321"
    });

    await sendForgotPasswordMailUseCase.execute("test@mail.com")

    expect(generateTokenMail).toHaveBeenCalled();
  })

});