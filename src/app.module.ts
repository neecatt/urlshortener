import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UrlModule } from './url/url.module';
import { UrlService } from './url/url.service';

@Module({
  imports: [UrlModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UrlService],
  exports: [PrismaService],
})
export class AppModule {}
