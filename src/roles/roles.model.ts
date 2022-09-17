import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RolesCreationAttrs {
    value : string
    description : string
}

@Table({tableName: 'roles'})
export class Roles extends Model<Roles, RolesCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : number

    @ApiProperty({example: 'Администратор', description: 'Название роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value : string

    @ApiProperty({example: 'Ну он там всем управляет', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull:false})
    description : string

    @BelongsToMany(() => User, () => UserRoles)
    users : User[]

}