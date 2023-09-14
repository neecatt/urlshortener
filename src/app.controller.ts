import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UrlService } from './url/url.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':key')
  async redirect(@Param('key') key: string, @Res() res: Response) {
    const longUrl = await this.appService.findByKey(key);
    console.log(longUrl);
    res.redirect(301, `${longUrl}`);
    res.end();
  }
}
