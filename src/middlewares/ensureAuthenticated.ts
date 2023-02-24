import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Bearer hgrkyvoe7ygvpnnp8755
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try{
    const { sub: user_id } = verify(token, "c3fea5915252da51da3019d5ad366d3a") as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if(!user){
      throw new Error("User does not exist.")
    }

    next();
  }catch{
    throw new Error("invalid Token.");
  }
}