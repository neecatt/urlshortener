import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import * as shortid from 'shortid';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UrlService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUrlDto: CreateUrlDto) {
    let { longUrl } = createUrlDto;
    const foundUrl = await this.prisma.links.findUnique({
      where: {
        longUrl,
      },
    });
    if (foundUrl) {
      return { shortUrl: foundUrl.shortUrl };
    }

    if (!longUrl.includes('https://' || 'http://')) {
      longUrl = `https://${longUrl}`;
    }

    const host = 'localhost:3000';
    const urlKey: string = shortid.generate();
    const shortUrl = host + '/' + urlKey;

    await this.prisma.links.create({
      data: {
        urlKey,
        longUrl,
        shortUrl,
      },
    });
    return { shortUrl };
  }
}
