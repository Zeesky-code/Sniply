import { Module } from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service'
import { UrlController } from './urls.controller';
import { UrlService } from './urls.service';
import { QrcodeService } from '../qrcode/qrcode.service';

@Module({
    controllers: [UrlController],
    providers: [UrlService, PrismaService, QrcodeService]
})
export class UrlsModule {}
