import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  @Get()
  findAll(): string {
    return 'This action returns all jobs !!';
  }
  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns ${params.id}`;
  }
}
