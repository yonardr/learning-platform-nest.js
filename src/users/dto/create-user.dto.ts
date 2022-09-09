import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адерс'})
    readonly email : string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    readonly password : string;
}

// Data Transfer Object