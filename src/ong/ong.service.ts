import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/lib/prisma.service';
import { CreateOngDTO } from './dto/create-ong.dto';

@Injectable()
export class OngService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOngDTO) {
    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    return this.prisma.ong.create({
      data,
    });
  }
}
