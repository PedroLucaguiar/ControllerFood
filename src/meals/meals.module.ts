import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
