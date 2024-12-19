import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { FileModule } from 'src/file/file.module';
import { PrismaModule } from 'src/lib/prisma.module';

import { OngModule } from 'src/ong/ong.module';
import { AuthOngService } from './auth-ong.service';
import { AuthOngController } from './auth-ong.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    OngModule,
    PrismaModule,
    FileModule,
  ],
  controllers: [AuthOngController],
  providers: [AuthOngService],
})
export class AuthModule {}
