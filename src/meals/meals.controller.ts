import {Controller, Post, Body, Get, Param, UseGuards, Request } from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateMealDto, @Request() req) {
    return this.mealsService.create(dto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.mealsService.findAll();
  }

@Get('user/:userId')
@UseGuards(JwtAuthGuard)
findByUser(@Param('userId') userId: string) {
  return this.mealsService.findByUser(userId);
}
}



