import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { MongoRepository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) { }

  async getUsersByName(name: string) {
    const result = this.userRepository.find({
      where: {
        name: { $eq: name },
      }
    })

    return result;
  }
}
