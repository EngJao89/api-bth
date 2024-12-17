import { Module } from '@nestjs/common';
import { OngService } from './ong.service';
import { OngController } from './ong.controller';

@Module({
  imports: [],
  controllers: [OngController],
  providers: [OngService],
  exports: [OngService],
})
export class OngModule {}
