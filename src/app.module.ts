import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';
import { UserModule } from './user.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mongodb',
          url:
            `mongodb://${config.get('DB_USER')}:${config.get('DB_PASS')}@${config.get('DB_HOSTNAME')}`,// ?retryWrites=true&w=majority
          entities: [join(__dirname, '**/**.entity{.ts,.js}')],
          synchronize: true,
          useNewUrlParser: true,
          logging: true,
        }
      },
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
