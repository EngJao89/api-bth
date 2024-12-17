import { Module } from '@nestjs/common';
import { OngService } from './ong.service';
import { OngController } from './ong.controller';
import { PrismaModule } from 'src/lib/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OngController],
  providers: [OngService],
  exports: [OngService],
})
export class OngModule {}
