import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { OngService } from './ong.service';
import { CreateOngDTO } from './dto/create-ong.dto';
import { ParamId } from 'src/decorators/param-id.decorator';
import { UpdatePutOngDTO } from './dto/update-put-ong.dto';
import { UpdatePatchOngDTO } from './dto/update-patch-ong.dto';

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

  @Get(':id')
  async readOne(@ParamId() id: string) {
    return this.ongService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutOngDTO, @ParamId() id: string) {
    return this.ongService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchOngDTO, @ParamId() id: string) {
    return this.ongService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: string) {
    return this.ongService.delete(id);
  }
}
