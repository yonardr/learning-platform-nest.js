import { Module } from '@nestjs/common';
import {RolesController} from "./roles.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Roles} from "./roles.model";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";
import {RolesService} from "./roles.service";

@Module({
    controllers : [RolesController],
    providers : [RolesService],
    imports : [
        SequelizeModule.forFeature([Roles, User, UserRoles])
    ],
    exports:[RolesService]
})
export class RolesModule {}
