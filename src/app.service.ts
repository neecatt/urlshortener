import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async findByKey(urlKey: string) {
    const foundUrl = await this.prisma.links.findUnique({
      where: { urlKey },
    });
    if (!foundUrl) {
      throw new NotFoundException('Url Not Found');
    }
    return foundUrl.longUrl;
  }
}
