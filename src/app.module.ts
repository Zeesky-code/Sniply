import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UrlsModule } from './urls/urls.module';
import configuration from '../config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
    expandVariables: true,
  }),AuthModule, UsersModule, PrismaModule, UrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
