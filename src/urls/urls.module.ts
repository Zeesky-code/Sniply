import { Module } from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service'
import { UrlController } from './urls.controller';
import { UrlService } from './urls.service';

@Module({
    controllers: [UrlController],
    providers: [UrlService, PrismaService]
})
export class UrlsModule {}
