import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findUsers() {
    return this.userRepo.find();
  }

  createUser(createUser: CreateUserParams) {
    const newUser = this.userRepo.create({ ...createUser });
    return this.userRepo.save(newUser);
  }

  updateUser(id: number, userUpdate: UpdateUserParams) {
    return this.userRepo.update(
      {
        id,
      },
      {
        ...userUpdate,
      },
    );
  }

  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }
}
