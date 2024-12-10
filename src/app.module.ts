import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './lib/prisma.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, PrismaModule, ThrottlerModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
