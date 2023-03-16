import { ICreateUsersTokensDTO } from "../dtos/ICreateUsersTokensDTO";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";


interface IUsersTokensRepository{
  create({
    expires_date, 
    refresh_token, 
    user_id
  }: ICreateUsersTokensDTO): Promise<UserTokens>
}

export { IUsersTokensRepository };