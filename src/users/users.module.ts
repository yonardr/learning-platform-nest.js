import {Module} from '@nestjs/common'
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports : [
        SequelizeModule.forFeature([User, Roles, UserRoles])
    ]
})
export class UsersModule{}
