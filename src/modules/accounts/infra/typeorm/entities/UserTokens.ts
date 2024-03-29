import { v4 as uuidV4} from "uuid"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User"

@Entity("users_tokens")
class UserTokens {

  @PrimaryColumn()
  id?: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: "user_id"})
  user: User

  @Column()
  refresh_token: string;

  @CreateDateColumn()
  created_at: Date

  @Column()
  expires_date: Date

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { UserTokens };
