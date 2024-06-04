import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { User } from "./schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

    create(createUserDto: CreateUserDto) {
        return this.userModel.create(createUserDto);
    }

    findAll() {
        return this.userModel.find();
    }

    async findOne(id: string) {
        if (!isValidObjectId(id)) {
            return [];
        }

        return (await this.userModel.findById(id)) || [];
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(
            { _id: id },
            { $set: updateUserDto },
            { new: true }
        );
    }

    async remove(id: string) {
        await this.userModel.findByIdAndDelete(id);

        return;
    }
}
