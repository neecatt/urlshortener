import { IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  longUrl: string;
}
