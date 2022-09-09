import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start(){
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule) // Экземпляр нашего приложения // Передаю в create модуль

    const config = new DocumentBuilder()
        .setTitle('Платформа для обучения')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log('Server started on ' + PORT + ' port'))
}

start()