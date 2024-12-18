import { Body, Controller, Get, Post } from '@nestjs/common';
import { OngService } from './ong.service';
import { CreateOngDTO } from './dto/create-ong.dto';

@Controller('ongs')
export class OngController {
  constructor(private readonly ongService: OngService) {}

  @Post()
  async create(@Body() data: CreateOngDTO) {
    return this.ongService.create(data);
  }

  @Get()
  async read() {
    return this.ongService.list();
  }
}
