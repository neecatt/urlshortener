import { Controller, Post, Body } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async create(@Body() createUrlDto: CreateUrlDto) {
    return await this.urlService.create(createUrlDto);
  }
}
