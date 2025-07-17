import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Meal } from '@prisma/client';
import { CreateMealDto } from './dto/create-meal.dto';

@Injectable()
export class MealsService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateMealDto, userId: string): Promise<Meal> {
    return this.prisma.meal.create({
      data: {
        description: dto.description,
        userId,
      },
    });
  }


  async findAll(): Promise<Meal[]> {
    return this.prisma.meal.findMany({ include: { user: true } });
  }

  async findByUser(userId: string): Promise<Meal[]> {
    return this.prisma.meal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
