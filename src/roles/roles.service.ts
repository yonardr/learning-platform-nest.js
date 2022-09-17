import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {Roles} from "./roles.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Roles) private roleRepository: typeof Roles) {}

    async createRole(dto: CreateRoleDto){
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value : string){
        const role = await this.roleRepository.findOne({where : {value}});
        return role
    }

    async getRoles(){
        const role = await this.roleRepository.findAll()
        console.log(role)
        return role
    }


}
