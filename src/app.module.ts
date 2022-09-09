import {Module} from "@nestjs/common";

import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from "./users/users.module";
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import {Roles} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";

// По факу здесь все регаем, там контроллеры и тд
@Module({ // Это дикаратор, это обертка, которая добавляет классу/функции новый функционал
    controllers: [RolesController],
    providers: [RolesService], // Здесь логика
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Roles, UserRoles],
            autoLoadModels : true
        }),
        UsersModule,
        RolesModule
    ]
})
export class AppModule{

}