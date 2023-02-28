import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "@errors/AppError";


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  }
  token: string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse>{
    const user = await this.userRepository.findByEmail(email);

    if(!user){
      throw new AppError("Email or password incorrect.", );
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Email or password incorrect.");
    }

    const token = sign({}, "c3fea5915252da51da3019d5ad366d3a", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user:{
        name: user.name,
        email: user.email
      },
    }

    return tokenReturn;

  }
}

export { AuthenticateUserUseCase };