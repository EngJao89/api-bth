import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/lib/prisma.service';
import { CreateOngDTO } from './dto/create-ong.dto';
import { UpdatePutOngDTO } from './dto/update-put-ong.dto';
import { UpdatePatchOngDTO } from './dto/update-patch-ong.dto';

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

  async list() {
    return this.prisma.ong.findMany();
  }

  async show(id: string) {
    return this.prisma.ong.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdatePutOngDTO) {
    await this.exists(id);

    if (data.password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
    }

    return this.prisma.ong.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePartial(id: string, data: UpdatePatchOngDTO) {
    await this.exists(id);

    if (data.password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
    }

    return this.prisma.ong.update({
      data,
      where: {
        id,
      },
    });
  }

  async exists(id: string) {
    if (
      !(await this.prisma.ong.count({
        where: { id },
      }))
    ) {
      throw new NotFoundException(`User ${id} not found`);
    }
  }
}
