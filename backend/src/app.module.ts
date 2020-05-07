import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import { MaratonaModule } from './maratona/maratona.module';
import {Maratona} from "./maratona/maratona.model";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [Maratona],
         }),
         MaratonaModule
    ],
    controllers: [AppController],
    providers: [AppService],

})
export class AppModule {
}
